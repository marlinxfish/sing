const a0_0x12dfdd=a0_0x31e9;(function(_0x3c4578,_0x4612ef){const _0x358b55=a0_0x31e9,_0x1c5d25=_0x3c4578();while(!![]){try{const _0x46c7e4=-parseInt(_0x358b55(0x94))/0x1+-parseInt(_0x358b55(0xaa))/0x2+parseInt(_0x358b55(0x81))/0x3*(parseInt(_0x358b55(0x8a))/0x4)+-parseInt(_0x358b55(0xad))/0x5+parseInt(_0x358b55(0xa9))/0x6*(parseInt(_0x358b55(0xab))/0x7)+parseInt(_0x358b55(0x8f))/0x8+parseInt(_0x358b55(0x82))/0x9*(parseInt(_0x358b55(0xa6))/0xa);if(_0x46c7e4===_0x4612ef)break;else _0x1c5d25['push'](_0x1c5d25['shift']());}catch(_0x2dd9c4){_0x1c5d25['push'](_0x1c5d25['shift']());}}}(a0_0x58d7,0x208d2));const {Web3}=require(a0_0x12dfdd(0x9b)),{amount}=require(a0_0x12dfdd(0xb3)),citeaRouterABI=require(a0_0x12dfdd(0x7e)),citeaLpABI=require('../utils/abi/citeaLpABI'),wsfiABI=require(a0_0x12dfdd(0x88)),usdcABI=require(a0_0x12dfdd(0xa8)),web3=new Web3(a0_0x12dfdd(0x9e)),wsfiContractAddress=a0_0x12dfdd(0xb0),usdcContractAddress=a0_0x12dfdd(0x8e),citeaContractAddress='0xFEccff0ecf1cAa1669A71C5E00b51B48E4CBc6A1',citeaLpContractAddress=a0_0x12dfdd(0xa0);async function getBalance(_0x5704e2){const _0x4ed07b=a0_0x12dfdd;try{const _0x537ad8=web3[_0x4ed07b(0x79)][_0x4ed07b(0x9a)][_0x4ed07b(0xa5)](_0x5704e2),_0x365ef9=await web3[_0x4ed07b(0x79)]['getBalance'](_0x537ad8[_0x4ed07b(0x7a)]),_0x190ff9=web3[_0x4ed07b(0xa2)][_0x4ed07b(0x7d)](_0x365ef9,_0x4ed07b(0xa7)),_0x373df7=new web3[(_0x4ed07b(0x79))][(_0x4ed07b(0x9c))](wsfiABI,wsfiContractAddress),_0x4d46b1=await _0x373df7['methods']['balanceOf'](_0x537ad8['address'])[_0x4ed07b(0x86)](),_0xbe0e7a=web3[_0x4ed07b(0xa2)]['fromWei'](_0x4d46b1,'ether'),_0x51357a=new web3[(_0x4ed07b(0x79))][(_0x4ed07b(0x9c))](usdcABI,usdcContractAddress),_0x41eb2d=await _0x51357a[_0x4ed07b(0xa4)][_0x4ed07b(0x8b)](_0x537ad8['address'])[_0x4ed07b(0x86)](),_0x2e7d6e=web3['utils'][_0x4ed07b(0x7d)](_0x41eb2d,_0x4ed07b(0x9d)),_0x1bb9d4=new web3['eth'][(_0x4ed07b(0x9c))](citeaLpABI,citeaLpContractAddress),_0x94fd16=await _0x1bb9d4[_0x4ed07b(0xa4)][_0x4ed07b(0x8b)](_0x537ad8[_0x4ed07b(0x7a)])['call'](),_0x27f532=web3[_0x4ed07b(0xa2)]['fromWei'](_0x94fd16,_0x4ed07b(0x9d));return{'formattedSFI':_0x190ff9,'formattedWSFI':_0xbe0e7a,'formattedUSDC':_0x2e7d6e,'formattedCiteaLp':_0x27f532};}catch(_0xea0112){throw new Error(_0x4ed07b(0x97)+_0xea0112[_0x4ed07b(0x7c)]);}}async function swapWsfiToUsdc(_0x337e3d){const _0x62f4eb=a0_0x12dfdd;try{const _0x5331b4=web3[_0x62f4eb(0x79)][_0x62f4eb(0x9a)][_0x62f4eb(0xa5)](_0x337e3d);web3['eth'][_0x62f4eb(0x9a)][_0x62f4eb(0x7f)][_0x62f4eb(0x7b)](_0x5331b4);const _0x353609=new web3[(_0x62f4eb(0x79))][(_0x62f4eb(0x9c))](citeaRouterABI,citeaContractAddress),_0x5bf440=new web3[(_0x62f4eb(0x79))][(_0x62f4eb(0x9c))](wsfiABI,wsfiContractAddress),_0x458269=await _0x5bf440[_0x62f4eb(0xa4)][_0x62f4eb(0x96)](_0x5331b4[_0x62f4eb(0x7a)],citeaContractAddress)['call'](),_0x271a63=web3[_0x62f4eb(0xa2)]['toWei'](amount['toString'](),'ether');if(parseFloat(_0x458269)<parseFloat(_0x271a63)){const _0x2bdc2b=_0x5bf440[_0x62f4eb(0xa4)][_0x62f4eb(0x99)](citeaContractAddress,_0x271a63),_0x20387a=await _0x2bdc2b[_0x62f4eb(0x89)]({'from':_0x5331b4['address']}),_0x8cd4af=await web3[_0x62f4eb(0x79)]['getGasPrice'](),_0x90c39a=await web3[_0x62f4eb(0x79)][_0x62f4eb(0x8d)](_0x5331b4[_0x62f4eb(0x7a)],'pending'),_0x550945={'from':_0x5331b4[_0x62f4eb(0x7a)],'to':wsfiContractAddress,'gas':_0x20387a,'gasPrice':_0x8cd4af,'nonce':_0x90c39a,'data':_0x2bdc2b[_0x62f4eb(0xae)]()},_0x10962e=await web3[_0x62f4eb(0x79)]['accounts'][_0x62f4eb(0xa1)](_0x550945,_0x337e3d);await web3[_0x62f4eb(0x79)]['sendSignedTransaction'](_0x10962e[_0x62f4eb(0xb1)]);}const _0x31615a=[wsfiContractAddress,usdcContractAddress],_0x2c1ce2=Math['floor'](Date[_0x62f4eb(0xb2)]()/0x3e8)+0x3c*0x5,_0x2ce381=_0x353609[_0x62f4eb(0xa4)]['swapExactTokensForTokensSupportingFeeOnTransferTokens'](_0x271a63,0x0,_0x31615a,_0x5331b4[_0x62f4eb(0x7a)],_0x2c1ce2),_0x4f0b21=await _0x2ce381['estimateGas']({'from':_0x5331b4[_0x62f4eb(0x7a)]}),_0xf483d1=await web3[_0x62f4eb(0x79)]['getGasPrice'](),_0x421b97={'from':_0x5331b4[_0x62f4eb(0x7a)],'to':citeaContractAddress,'gas':_0x4f0b21,'gasPrice':_0xf483d1,'nonce':await web3['eth'][_0x62f4eb(0x8d)](_0x5331b4[_0x62f4eb(0x7a)],'pending'),'data':_0x2ce381['encodeABI']()},_0x533404=await web3[_0x62f4eb(0x79)][_0x62f4eb(0x9a)][_0x62f4eb(0xa1)](_0x421b97,_0x337e3d),_0x1cc989=await web3[_0x62f4eb(0x79)][_0x62f4eb(0x83)](_0x533404[_0x62f4eb(0xb1)]);return{'success':!![],'txHash':_0x1cc989[_0x62f4eb(0xaf)]};}catch(_0x213b48){throw new Error(_0x62f4eb(0x87)+_0x213b48[_0x62f4eb(0x7c)]);}}function a0_0x58d7(){const _0x29238a=['exports','159025bgXLmE','encodeABI','transactionHash','0x6dC404EFd04B880B0Ab5a26eF461b63A12E3888D','rawTransaction','now','../config/config','Error\x20wrapping\x20SFI:\x20','eth','address','add','message','fromWei','../utils/abi/citeaRouterABI','wallet','115792089237316195423570985008687907853269984665640564039457584007913129639935','19086SJUtqL','1583703zHtxLD','sendSignedTransaction','toString','pending','call','Error\x20swapping\x20WSFI\x20to\x20USDC:\x20','../utils/abi/wsfiABI','estimateGas','8HySrDr','balanceOf','floor','getTransactionCount','0xD2ED81BE83B33218737Ca188EB9AC28b79C6A0F3','463144JUnhQq','Error\x20removing\x20liquidity:\x20','getGasPrice','status','deposit','141429kHCCUU','toWei','allowance','Error\x20fetching\x20balance:\x20','addLiquidity','approve','accounts','web3','Contract','mwei','https://rpc-testnet.singularityfinance.ai','Transaction\x20reverted\x20by\x20EVM','0xB54284F014DaB8dBdFC77097caa6af35e8233fF6','signTransaction','utils','Error\x20fetching\x20USDC\x20amount:\x20','methods','privateKeyToAccount','10WiCmIP','ether','../utils/abi/usdcABI','24ulHOLD','177344Trzpoe','260141nKTUsg'];a0_0x58d7=function(){return _0x29238a;};return a0_0x58d7();}async function wrapSFI(_0xf528db){const _0x33fdf5=a0_0x12dfdd;try{const _0x5ef1b5=web3['eth'][_0x33fdf5(0x9a)][_0x33fdf5(0xa5)](_0xf528db);web3[_0x33fdf5(0x79)][_0x33fdf5(0x9a)][_0x33fdf5(0x7f)][_0x33fdf5(0x7b)](_0x5ef1b5);const _0x45d2be=new web3[(_0x33fdf5(0x79))][(_0x33fdf5(0x9c))](wsfiABI,wsfiContractAddress),_0x508a2b=web3['utils']['toWei'](amount[_0x33fdf5(0x84)](),'ether'),_0x4c40d3=_0x45d2be['methods'][_0x33fdf5(0x93)](),_0x2610de=await _0x4c40d3['estimateGas']({'from':_0x5ef1b5['address'],'value':_0x508a2b}),_0x5c0640=await web3[_0x33fdf5(0x79)][_0x33fdf5(0x91)](),_0x3d8630=await web3[_0x33fdf5(0x79)][_0x33fdf5(0x8d)](_0x5ef1b5['address'],'pending'),_0x194fae={'from':_0x5ef1b5['address'],'to':wsfiContractAddress,'value':_0x508a2b,'gas':_0x2610de,'gasPrice':_0x5c0640,'nonce':_0x3d8630,'data':_0x4c40d3[_0x33fdf5(0xae)]()},_0x1887ca=await web3[_0x33fdf5(0x79)]['accounts'][_0x33fdf5(0xa1)](_0x194fae,_0xf528db),_0x2c4835=await web3[_0x33fdf5(0x79)][_0x33fdf5(0x83)](_0x1887ca[_0x33fdf5(0xb1)]);return{'success':!![],'txHash':_0x2c4835['transactionHash']};}catch(_0x6a817){throw new Error(_0x33fdf5(0x78)+_0x6a817[_0x33fdf5(0x7c)]);}}async function getUsdcAmountForLiquidity(_0xa027a0){const _0x160a35=a0_0x12dfdd;try{const _0x2ce2a7=new web3[(_0x160a35(0x79))][(_0x160a35(0x9c))](citeaRouterABI,citeaContractAddress),_0x784344=web3['utils'][_0x160a35(0x95)](_0xa027a0[_0x160a35(0x84)](),'ether'),_0x16db76=await _0x2ce2a7[_0x160a35(0xa4)]['getAmountsOut'](_0x784344,[wsfiContractAddress,usdcContractAddress])['call'](),_0x5a4e72=web3['utils']['fromWei'](_0x16db76[0x1],_0x160a35(0x9d));return _0x5a4e72;}catch(_0x4e4a90){throw new Error(_0x160a35(0xa3)+_0x4e4a90[_0x160a35(0x7c)]);}}async function addLiquidity(_0x6f2692){const _0x13a032=a0_0x12dfdd;try{const _0x5a738c=web3[_0x13a032(0x79)][_0x13a032(0x9a)][_0x13a032(0xa5)](_0x6f2692);web3[_0x13a032(0x79)][_0x13a032(0x9a)]['wallet'][_0x13a032(0x7b)](_0x5a738c);const _0x4e0c64=new web3[(_0x13a032(0x79))][(_0x13a032(0x9c))](citeaRouterABI,citeaContractAddress),_0xf64709=new web3[(_0x13a032(0x79))]['Contract'](wsfiABI,wsfiContractAddress),_0x51278c=new web3['eth'][(_0x13a032(0x9c))](usdcABI,usdcContractAddress),_0x318aca=amount,_0x262037=web3[_0x13a032(0xa2)][_0x13a032(0x95)](_0x318aca[_0x13a032(0x84)](),_0x13a032(0xa7)),_0x5186da=await getUsdcAmountForLiquidity(_0x318aca),_0x59db00=web3['utils'][_0x13a032(0x95)](_0x5186da[_0x13a032(0x84)](),_0x13a032(0x9d)),_0xebb4d9=0.05,_0x5f00a7=Math['floor'](_0x262037*(0x1-_0xebb4d9)),_0x59a713=Math[_0x13a032(0x8c)](_0x262037*(0x1-_0xebb4d9)),_0x12263f='115792089237316195423570985008687907853269984665640564039457584007913129639935',_0x50b74a=await _0xf64709[_0x13a032(0xa4)][_0x13a032(0x96)](_0x5a738c['address'],citeaContractAddress)[_0x13a032(0x86)]();if(BigInt(_0x50b74a)<BigInt(_0x262037)){const _0x4c6248=_0xf64709[_0x13a032(0xa4)][_0x13a032(0x99)](citeaContractAddress,_0x262037),_0x391ba1=await _0x4c6248[_0x13a032(0x89)]({'from':_0x5a738c['address']}),_0x48465e=await web3[_0x13a032(0x79)]['getGasPrice'](),_0x442412=await web3['eth'][_0x13a032(0x8d)](_0x5a738c['address'],_0x13a032(0x85)),_0x2ddb2c={'from':_0x5a738c['address'],'to':wsfiContractAddress,'gas':Number(_0x391ba1),'gasPrice':Number(_0x48465e),'nonce':_0x442412,'data':_0x4c6248[_0x13a032(0xae)]()},_0x825ce4=await web3[_0x13a032(0x79)][_0x13a032(0x9a)][_0x13a032(0xa1)](_0x2ddb2c,_0x6f2692);await web3[_0x13a032(0x79)][_0x13a032(0x83)](_0x825ce4['rawTransaction']);}const _0x23f649=await _0x51278c[_0x13a032(0xa4)][_0x13a032(0x96)](_0x5a738c[_0x13a032(0x7a)],citeaContractAddress)[_0x13a032(0x86)]();if(BigInt(_0x23f649)<BigInt(_0x59db00)){const _0x59705b=_0x51278c[_0x13a032(0xa4)][_0x13a032(0x99)](citeaContractAddress,_0x59db00),_0x95c991=await _0x59705b[_0x13a032(0x89)]({'from':_0x5a738c[_0x13a032(0x7a)]}),_0x5cede1=await web3[_0x13a032(0x79)][_0x13a032(0x91)](),_0x3a1e3c=await web3['eth'][_0x13a032(0x8d)](_0x5a738c[_0x13a032(0x7a)],'pending'),_0x5c762={'from':_0x5a738c[_0x13a032(0x7a)],'to':usdcContractAddress,'gas':Number(_0x95c991),'gasPrice':Number(_0x5cede1),'nonce':_0x3a1e3c,'data':_0x59705b[_0x13a032(0xae)]()},_0x441308=await web3['eth'][_0x13a032(0x9a)]['signTransaction'](_0x5c762,_0x6f2692);await web3[_0x13a032(0x79)]['sendSignedTransaction'](_0x441308['rawTransaction']);}const _0x164fef=_0x4e0c64[_0x13a032(0xa4)][_0x13a032(0x98)](wsfiContractAddress,usdcContractAddress,_0x262037,_0x59db00,_0x5f00a7,_0x59a713,_0x5a738c[_0x13a032(0x7a)],_0x12263f),_0x12ea85=await _0x164fef['estimateGas']({'from':_0x5a738c[_0x13a032(0x7a)]}),_0x194b19=await web3[_0x13a032(0x79)][_0x13a032(0x91)](),_0x3340a9={'from':_0x5a738c['address'],'to':citeaContractAddress,'gas':Number(_0x12ea85),'gasPrice':Number(_0x194b19),'nonce':await web3['eth'][_0x13a032(0x8d)](_0x5a738c[_0x13a032(0x7a)],'pending'),'data':_0x164fef[_0x13a032(0xae)]()},_0x47970f=await web3[_0x13a032(0x79)]['accounts']['signTransaction'](_0x3340a9,_0x6f2692),_0x3013b5=await web3[_0x13a032(0x79)][_0x13a032(0x83)](_0x47970f[_0x13a032(0xb1)]);if(!_0x3013b5[_0x13a032(0x92)])throw new Error(_0x13a032(0x9f));return{'success':!![],'txHash':_0x3013b5[_0x13a032(0xaf)]};}catch(_0x222fd7){throw new Error('Error\x20adding\x20liquidity:\x20'+_0x222fd7[_0x13a032(0x7c)]);}}function a0_0x31e9(_0x1926cc,_0x1e8bfe){const _0x58d78a=a0_0x58d7();return a0_0x31e9=function(_0x31e9ad,_0x270d14){_0x31e9ad=_0x31e9ad-0x78;let _0x40ced3=_0x58d78a[_0x31e9ad];return _0x40ced3;},a0_0x31e9(_0x1926cc,_0x1e8bfe);}async function removeLiquidity(_0x1c17d1){const _0x212fc9=a0_0x12dfdd;try{const _0x241e8d=web3[_0x212fc9(0x79)]['accounts'][_0x212fc9(0xa5)](_0x1c17d1);web3[_0x212fc9(0x79)][_0x212fc9(0x9a)][_0x212fc9(0x7f)][_0x212fc9(0x7b)](_0x241e8d);const _0x5a2914=new web3[(_0x212fc9(0x79))][(_0x212fc9(0x9c))](citeaRouterABI,citeaContractAddress),_0x1cf667=new web3[(_0x212fc9(0x79))][(_0x212fc9(0x9c))](citeaLpABI,citeaLpContractAddress),_0x1e42e1=await _0x1cf667[_0x212fc9(0xa4)][_0x212fc9(0x8b)](_0x241e8d[_0x212fc9(0x7a)])['call'](),_0xc28104=BigInt(_0x1e42e1)*BigInt(0x19)/BigInt(0x64),_0x42cba9=0.05,_0x3e8436=Math[_0x212fc9(0x8c)](wsfiAmountInWei*(0x1-_0x42cba9)),_0x4a0bea=Math[_0x212fc9(0x8c)](wsfiAmountInWei*(0x1-_0x42cba9)),_0x30c253=_0x212fc9(0x80),_0x228598=await _0x1cf667[_0x212fc9(0xa4)][_0x212fc9(0x96)](_0x241e8d[_0x212fc9(0x7a)],citeaContractAddress)[_0x212fc9(0x86)]();if(BigInt(_0x228598)<_0xc28104){const _0x358177=_0x1cf667['methods'][_0x212fc9(0x99)](citeaContractAddress,_0xc28104[_0x212fc9(0x84)]()),_0x3ea5eb=await _0x358177[_0x212fc9(0x89)]({'from':_0x241e8d[_0x212fc9(0x7a)]}),_0xf4b4f1=await web3[_0x212fc9(0x79)]['getGasPrice'](),_0x5d186e=await web3[_0x212fc9(0x79)][_0x212fc9(0x8d)](_0x241e8d[_0x212fc9(0x7a)],_0x212fc9(0x85)),_0x4655f1={'from':_0x241e8d['address'],'to':citeaLpContractAddress,'gas':Number(_0x3ea5eb),'gasPrice':Number(_0xf4b4f1),'nonce':_0x5d186e,'data':_0x358177[_0x212fc9(0xae)]()},_0x1a2a8b=await web3[_0x212fc9(0x79)][_0x212fc9(0x9a)][_0x212fc9(0xa1)](_0x4655f1,_0x1c17d1);await web3[_0x212fc9(0x79)][_0x212fc9(0x83)](_0x1a2a8b[_0x212fc9(0xb1)]);}const _0x3221c1=_0x5a2914[_0x212fc9(0xa4)]['removeLiquidity'](wsfiContractAddress,usdcContractAddress,_0xc28104['toString'](),_0x3e8436,_0x4a0bea,_0x241e8d[_0x212fc9(0x7a)],_0x30c253),_0x4a35d4=await _0x3221c1[_0x212fc9(0x89)]({'from':_0x241e8d['address']}),_0x12d9a5=await web3[_0x212fc9(0x79)][_0x212fc9(0x91)](),_0x1f1e80={'from':_0x241e8d[_0x212fc9(0x7a)],'to':citeaContractAddress,'gas':Number(_0x4a35d4),'gasPrice':Number(_0x12d9a5),'nonce':await web3[_0x212fc9(0x79)][_0x212fc9(0x8d)](_0x241e8d['address'],'pending'),'data':_0x3221c1[_0x212fc9(0xae)]()},_0x512081=await web3[_0x212fc9(0x79)][_0x212fc9(0x9a)][_0x212fc9(0xa1)](_0x1f1e80,_0x1c17d1),_0x37a2cb=await web3['eth'][_0x212fc9(0x83)](_0x512081[_0x212fc9(0xb1)]);if(!_0x37a2cb['status'])throw new Error(_0x212fc9(0x9f));return{'success':!![],'txHash':_0x37a2cb[_0x212fc9(0xaf)]};}catch(_0xbdf598){throw new Error(_0x212fc9(0x90)+_0xbdf598[_0x212fc9(0x7c)]);}}module[a0_0x12dfdd(0xac)]={'getBalance':getBalance,'swapWsfiToUsdc':swapWsfiToUsdc,'wrapSFI':wrapSFI,'removeLiquidity':removeLiquidity,'addLiquidity':addLiquidity};