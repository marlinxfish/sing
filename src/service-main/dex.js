const { Web3 } = require("web3");
const { amount } = require("../config/config");
const citeaRouterABI = require("../utils/abi/citeaRouterABI");
const citeaLpABI = require("../utils/abi/citeaLpABI");
const wsfiABI = require("../utils/abi/wsfiABI");
const usdcABI = require("../utils/abi/usdcABI");

const web3 = new Web3("https://rpc-testnet.singularityfinance.ai");

const wsfiContractAddress = "0x6dC404EFd04B880B0Ab5a26eF461b63A12E3888D";
const usdcContractAddress = "0xD2ED81BE83B33218737Ca188EB9AC28b79C6A0F3";
const citeaContractAddress = "0xFEccff0ecf1cAa1669A71C5E00b51B48E4CBc6A1";
const citeaLpContractAddress = "0xB54284F014DaB8dBdFC77097caa6af35e8233fF6";

async function getBalance(privateKey) {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    const balanceSFI = await web3.eth.getBalance(account.address);
    const formattedSFI = web3.utils.fromWei(balanceSFI, "ether");

    const wsfiContract = new web3.eth.Contract(wsfiABI, wsfiContractAddress);
    const balanceWSFI = await wsfiContract.methods.balanceOf(account.address).call();
    const formattedWSFI = web3.utils.fromWei(balanceWSFI, "ether");

    const usdcContract = new web3.eth.Contract(usdcABI, usdcContractAddress);
    const balanceUSDC = await usdcContract.methods.balanceOf(account.address).call();
    const formattedUSDC = web3.utils.fromWei(balanceUSDC, "mwei");

    const citeaLpContract = new web3.eth.Contract(citeaLpABI, citeaLpContractAddress);
    const balanceCiteaLp = await citeaLpContract.methods.balanceOf(account.address).call();
    const formattedCiteaLp = web3.utils.fromWei(balanceCiteaLp, "mwei");

    return { formattedSFI, formattedWSFI, formattedUSDC, formattedCiteaLp };
  } catch (error) {
    throw new Error(`Error fetching balance: ${error.message}`);
  }
}

async function swapWsfiToUsdc(privateKey) {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    const router = new web3.eth.Contract(citeaRouterABI, citeaContractAddress);
    const wsfiContract = new web3.eth.Contract(wsfiABI, wsfiContractAddress);

    const allowance = await wsfiContract.methods.allowance(account.address, citeaContractAddress).call();
    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    if (parseFloat(allowance) < parseFloat(amountInWei)) {
      const approveTx = wsfiContract.methods.approve(citeaContractAddress, amountInWei);
      const approveGas = await approveTx.estimateGas({ from: account.address });
      const approveGasPrice = await web3.eth.getGasPrice();
      const nonce = await web3.eth.getTransactionCount(account.address, "pending");

      const approveTxData = {
        from: account.address,
        to: wsfiContractAddress,
        gas: approveGas,
        gasPrice: approveGasPrice,
        nonce: nonce,
        data: approveTx.encodeABI(),
      };

      const signedApproveTx = await web3.eth.accounts.signTransaction(approveTxData, privateKey);
      await web3.eth.sendSignedTransaction(signedApproveTx.rawTransaction);
    }

    const path = [wsfiContractAddress, usdcContractAddress];
    const deadline = Math.floor(Date.now() / 1000) + 60 * 5;

    const swapTx = router.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(amountInWei, 0, path, account.address, deadline);
    const swapGas = await swapTx.estimateGas({ from: account.address });
    const swapGasPrice = await web3.eth.getGasPrice();

    const swapTxData = {
      from: account.address,
      to: citeaContractAddress,
      gas: swapGas,
      gasPrice: swapGasPrice,
      nonce: await web3.eth.getTransactionCount(account.address, "pending"),
      data: swapTx.encodeABI(),
    };

    const signedSwapTx = await web3.eth.accounts.signTransaction(swapTxData, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedSwapTx.rawTransaction);

    return { success: true, txHash: receipt.transactionHash };
  } catch (error) {
    throw new Error(`Error swapping WSFI to USDC: ${error.message}`);
  }
}

async function wrapSFI(privateKey) {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    const contract = new web3.eth.Contract(wsfiABI, wsfiContractAddress);
    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    const tx = contract.methods.deposit();
    const gas = await tx.estimateGas({ from: account.address, value: amountInWei });
    const gasPrice = await web3.eth.getGasPrice();
    const nonce = await web3.eth.getTransactionCount(account.address, "pending");

    const txData = {
      from: account.address,
      to: wsfiContractAddress,
      value: amountInWei,
      gas,
      gasPrice,
      nonce,
      data: tx.encodeABI(),
    };

    const signedTx = await web3.eth.accounts.signTransaction(txData, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    return { success: true, txHash: receipt.transactionHash };
  } catch (error) {
    throw new Error(`Error wrapping SFI: ${error.message}`);
  }
}

async function getUsdcAmountForLiquidity(wsfiAmount) {
  try {
    const router = new web3.eth.Contract(citeaRouterABI, citeaContractAddress);
    const wsfiAmountInWei = web3.utils.toWei(wsfiAmount.toString(), "ether");
    const amountsOut = await router.methods.getAmountsOut(wsfiAmountInWei, [wsfiContractAddress, usdcContractAddress]).call();
    const usdcAmount = web3.utils.fromWei(amountsOut[1], "mwei");
    return usdcAmount;
  } catch (error) {
    throw new Error(`Error fetching USDC amount: ${error.message}`);
  }
}

async function addLiquidity(privateKey) {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    const router = new web3.eth.Contract(citeaRouterABI, citeaContractAddress);
    const wsfiContract = new web3.eth.Contract(wsfiABI, wsfiContractAddress);
    const usdcContract = new web3.eth.Contract(usdcABI, usdcContractAddress);

    const wsfiAmount = amount;
    const wsfiAmountInWei = web3.utils.toWei(wsfiAmount.toString(), "ether");
    const usdcAmount = await getUsdcAmountForLiquidity(wsfiAmount);
    const usdcAmountInWei = web3.utils.toWei(usdcAmount.toString(), "mwei");

    const slippageTolerance = 0.05;
    const minWsfi = Math.floor(wsfiAmountInWei * (1 - slippageTolerance));
    const minUsdc = Math.floor(wsfiAmountInWei * (1 - slippageTolerance));
    const deadline = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

    const allowanceWsfi = await wsfiContract.methods.allowance(account.address, citeaContractAddress).call();
    if (BigInt(allowanceWsfi) < BigInt(wsfiAmountInWei)) {
      const approveWsfiTx = wsfiContract.methods.approve(citeaContractAddress, wsfiAmountInWei);
      const approveWsfiGas = await approveWsfiTx.estimateGas({ from: account.address });
      const approveWsfiGasPrice = await web3.eth.getGasPrice();
      const nonce = await web3.eth.getTransactionCount(account.address, "pending");

      const approveWsfiTxData = {
        from: account.address,
        to: wsfiContractAddress,
        gas: Number(approveWsfiGas),
        gasPrice: Number(approveWsfiGasPrice),
        nonce: nonce,
        data: approveWsfiTx.encodeABI(),
      };

      const signedApproveWsfiTx = await web3.eth.accounts.signTransaction(approveWsfiTxData, privateKey);
      await web3.eth.sendSignedTransaction(signedApproveWsfiTx.rawTransaction);
    }

    const allowanceUsdc = await usdcContract.methods.allowance(account.address, citeaContractAddress).call();
    if (BigInt(allowanceUsdc) < BigInt(usdcAmountInWei)) {
      const approveUsdcTx = usdcContract.methods.approve(citeaContractAddress, usdcAmountInWei);
      const approveUsdcGas = await approveUsdcTx.estimateGas({ from: account.address });
      const approveUsdcGasPrice = await web3.eth.getGasPrice();
      const nonce = await web3.eth.getTransactionCount(account.address, "pending");

      const approveUsdcTxData = {
        from: account.address,
        to: usdcContractAddress,
        gas: Number(approveUsdcGas),
        gasPrice: Number(approveUsdcGasPrice),
        nonce: nonce,
        data: approveUsdcTx.encodeABI(),
      };

      const signedApproveUsdcTx = await web3.eth.accounts.signTransaction(approveUsdcTxData, privateKey);
      await web3.eth.sendSignedTransaction(signedApproveUsdcTx.rawTransaction);
    }

    const addLiquidityTx = router.methods.addLiquidity(wsfiContractAddress, usdcContractAddress, wsfiAmountInWei, usdcAmountInWei, minWsfi, minUsdc, account.address, deadline);
    const gasLimit = await addLiquidityTx.estimateGas({ from: account.address });
    const gasPrice = await web3.eth.getGasPrice();

    const addLiquidityTxData = {
      from: account.address,
      to: citeaContractAddress,
      gas: Number(gasLimit),
      gasPrice: Number(gasPrice),
      nonce: await web3.eth.getTransactionCount(account.address, "pending"),
      data: addLiquidityTx.encodeABI(),
    };

    const signedAddLiquidityTx = await web3.eth.accounts.signTransaction(addLiquidityTxData, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedAddLiquidityTx.rawTransaction);

    if (!receipt.status) {
      throw new Error("Transaction reverted by EVM");
    }

    return { success: true, txHash: receipt.transactionHash };
  } catch (error) {
    throw new Error(`Error adding liquidity: ${error.message}`);
  }
}

async function removeLiquidity(privateKey) {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    const router = new web3.eth.Contract(citeaRouterABI, citeaContractAddress);
    const factory = new web3.eth.Contract(citeaFactoryABI, citeaFactoryAddress);
    const citeaLpContract = new web3.eth.Contract(citeaLpABI, citeaLpContractAddress);

    const liquidityBalance = await citeaLpContract.methods.balanceOf(account.address).call();
    const liquidityAmount = (BigInt(liquidityBalance) * BigInt(25)) / BigInt(100);

    const poolAddress = await factory.methods.getPair(wsfiContractAddress, usdcContractAddress).call();
    if (poolAddress === "0x0000000000000000000000000000000000000000") {
      throw new Error("Pool does not exist for the given token pair.");
    }

    const poolContract = new web3.eth.Contract(citeaLpABI, citeaLpContractAddress);
    const reserves = await poolContract.methods.getReserves().call();
    const reserveWsfi = reserves[0];
    const reserveUsdc = reserves[1];

    const totalSupply = await citeaLpContract.methods.totalSupply().call();
    const amountWsfiExpected = (liquidityAmount * BigInt(reserveWsfi)) / BigInt(totalSupply);
    const amountUsdcExpected = (liquidityAmount * BigInt(reserveUsdc)) / BigInt(totalSupply);

    const slippageTolerance = 0.05;
    const minWsfi = (amountWsfiExpected * BigInt(95)) / BigInt(100);
    const minUsdc = (amountUsdcExpected * BigInt(95)) / BigInt(100);

    const deadline = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

    const allowanceLiquidity = await citeaLpContract.methods.allowance(account.address, citeaContractAddress).call();
    if (BigInt(allowanceLiquidity) < liquidityAmount) {
      const approveLiquidityTx = citeaLpContract.methods.approve(citeaContractAddress, liquidityAmount.toString());
      const approveLiquidityGas = await approveLiquidityTx.estimateGas({ from: account.address });
      const approveLiquidityGasPrice = await web3.eth.getGasPrice();
      const nonce = await web3.eth.getTransactionCount(account.address, "pending");

      const approveLiquidityTxData = {
        from: account.address,
        to: citeaLpContractAddress,
        gas: Number(approveLiquidityGas),
        gasPrice: Number(approveLiquidityGasPrice),
        nonce: nonce,
        data: approveLiquidityTx.encodeABI(),
      };

      const signedApproveLiquidityTx = await web3.eth.accounts.signTransaction(approveLiquidityTxData, privateKey);
      await web3.eth.sendSignedTransaction(signedApproveLiquidityTx.rawTransaction);
    }

    const removeLiquidityTx = router.methods.removeLiquidity(wsfiContractAddress, usdcContractAddress, liquidityAmount.toString(), minWsfi.toString(), minUsdc.toString(), account.address, deadline);
    const gasLimit = await removeLiquidityTx.estimateGas({ from: account.address });
    const gasPrice = await web3.eth.getGasPrice();

    const removeLiquidityTxData = {
      from: account.address,
      to: citeaContractAddress,
      gas: Number(gasLimit),
      gasPrice: Number(gasPrice),
      nonce: await web3.eth.getTransactionCount(account.address, "pending"),
      data: removeLiquidityTx.encodeABI(),
    };

    const signedRemoveLiquidityTx = await web3.eth.accounts.signTransaction(removeLiquidityTxData, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedRemoveLiquidityTx.rawTransaction);

    if (!receipt.status) {
      throw new Error("Transaction reverted by EVM");
    }

    return { success: true, txHash: receipt.transactionHash };
  } catch (error) {
    throw new Error(`Error removing liquidity: ${error.message}`);
  }
}

module.exports = { getBalance, swapWsfiToUsdc, wrapSFI, removeLiquidity, addLiquidity };
