const a0_0x10baf6=a0_0xfbec;(function(_0x16d853,_0x43f036){const _0x2a40e2=a0_0xfbec,_0x369f23=_0x16d853();while(!![]){try{const _0xd1a176=-parseInt(_0x2a40e2(0x1f3))/0x1*(parseInt(_0x2a40e2(0x1e7))/0x2)+parseInt(_0x2a40e2(0x1ec))/0x3+parseInt(_0x2a40e2(0x1e6))/0x4+-parseInt(_0x2a40e2(0x1db))/0x5+parseInt(_0x2a40e2(0x1b9))/0x6*(parseInt(_0x2a40e2(0x1d6))/0x7)+-parseInt(_0x2a40e2(0x1b4))/0x8*(parseInt(_0x2a40e2(0x1d9))/0x9)+parseInt(_0x2a40e2(0x1e5))/0xa;if(_0xd1a176===_0x43f036)break;else _0x369f23['push'](_0x369f23['shift']());}catch(_0xb3bf2a){_0x369f23['push'](_0x369f23['shift']());}}}(a0_0x1d5a,0x40919));const fs=require('fs'),{ethers}=require(a0_0x10baf6(0x1c7)),chalk=require(a0_0x10baf6(0x1f6)),{getBalance,swapWsfiToUsdc,wrapSFI,removeLiquidity,addLiquidity,stake,unstake,claim}=require(a0_0x10baf6(0x1ca)),readline=require('readline'),fullBanner=require(a0_0x10baf6(0x1c8)),provider=new ethers[(a0_0x10baf6(0x1cc))](a0_0x10baf6(0x1e0)),privateKeys=JSON['parse'](fs['readFileSync']('./privateKey.json',a0_0x10baf6(0x1c2))),retryLimit=0x5,taskDelay=0x1388;function clearConsole(){const _0x714faa=a0_0x10baf6;if(process[_0x714faa(0x1ef)][_0x714faa(0x1e2)]){const _0x2817c1='\x0a'[_0x714faa(0x1de)](process[_0x714faa(0x1ef)]['rows']);console[_0x714faa(0x1cb)](_0x2817c1),readline[_0x714faa(0x1f2)](process[_0x714faa(0x1ef)],0x0,0x0),readline[_0x714faa(0x1ce)](process[_0x714faa(0x1ef)]);}}function updateStatus(_0x12e3d1){const _0x5e813c=a0_0x10baf6;readline[_0x5e813c(0x1f2)](process[_0x5e813c(0x1ef)],0x0),readline[_0x5e813c(0x1f5)](process[_0x5e813c(0x1ef)],0x1),process[_0x5e813c(0x1ef)]['write'](_0x12e3d1);}function displayBalanceAndProgress(_0x12a1c8,_0x3bf725,_0x2d55af,_0x1cf76c){const _0x36b160=a0_0x10baf6;console[_0x36b160(0x1cb)](fullBanner),console[_0x36b160(0x1cb)](chalk[_0x36b160(0x1d2)][_0x36b160(0x1b2)]('\x0aAkun\x20ke\x20'+(_0x2d55af+0x1)+_0x36b160(0x1e8)+_0x1cf76c)),console[_0x36b160(0x1cb)](chalk[_0x36b160(0x1da)](_0x36b160(0x1cd))),console['log'](chalk[_0x36b160(0x1ea)]['bold'](_0x36b160(0x1f0))),console['log']('SFI\x20\x20\x20\x20:\x20'+chalk[_0x36b160(0x1d1)](_0x12a1c8['formattedSFI'])),console[_0x36b160(0x1cb)](_0x36b160(0x1e9)+chalk['green'](_0x12a1c8['formattedWSFI'])),console[_0x36b160(0x1cb)](_0x36b160(0x1e3)+chalk[_0x36b160(0x1d1)](_0x12a1c8[_0x36b160(0x1d4)])),console[_0x36b160(0x1cb)](_0x36b160(0x1c6)+chalk[_0x36b160(0x1d1)](_0x12a1c8[_0x36b160(0x1d0)])),console[_0x36b160(0x1cb)](chalk[_0x36b160(0x1da)]('------------------------------------------------------------------------------')),console[_0x36b160(0x1cb)](chalk['blue'][_0x36b160(0x1b2)](_0x36b160(0x1b6))),console[_0x36b160(0x1cb)](_0x36b160(0x1c9)+chalk[_0x36b160(0x1d1)](_0x3bf725[_0x36b160(0x1f4)]['success']+_0x36b160(0x1cf)+_0x3bf725[_0x36b160(0x1f4)][_0x36b160(0x1be)])),console['log'](_0x36b160(0x1eb)+chalk[_0x36b160(0x1d1)](_0x3bf725[_0x36b160(0x1dd)]['success']+_0x36b160(0x1cf)+_0x3bf725['addLiquidity'][_0x36b160(0x1be)])),console[_0x36b160(0x1cb)](_0x36b160(0x1c3)+chalk[_0x36b160(0x1d1)](_0x3bf725[_0x36b160(0x1bc)][_0x36b160(0x1bb)]+_0x36b160(0x1cf)+_0x3bf725[_0x36b160(0x1bc)]['total'])),console['log'](_0x36b160(0x1bd)+chalk[_0x36b160(0x1d1)](_0x3bf725[_0x36b160(0x1c0)][_0x36b160(0x1bb)]+_0x36b160(0x1cf)+_0x3bf725[_0x36b160(0x1c0)][_0x36b160(0x1be)])),console[_0x36b160(0x1cb)](chalk[_0x36b160(0x1da)](_0x36b160(0x1cd)));}function a0_0xfbec(_0x2b0c45,_0x266158){const _0x1d5a96=a0_0x1d5a();return a0_0xfbec=function(_0xfbec,_0x107b5e){_0xfbec=_0xfbec-0x1b2;let _0x5a84d3=_0x1d5a96[_0xfbec];return _0x5a84d3;},a0_0xfbec(_0x2b0c45,_0x266158);}function delay(_0x393dec){return new Promise(_0x4ecc86=>setTimeout(_0x4ecc86,_0x393dec));}async function countdown(_0x26b315,_0x2c16d8){const _0x404c71=a0_0x10baf6;for(let _0xa4bdd6=_0x26b315;_0xa4bdd6>=0x0;_0xa4bdd6--){updateStatus(chalk[_0x404c71(0x1d2)][_0x404c71(0x1b2)](_0x2c16d8+'\x20'+_0xa4bdd6+_0x404c71(0x1ed))),await delay(0x3e8);}updateStatus('');}async function runTasks(_0x374844,_0x195217){const _0x312d39=a0_0x10baf6,_0x2157f={'stake':{'success':0x0,'total':0x2},'unstake':{'success':0x0,'total':0x1},'claim':{'success':0x0,'total':0x2},'swap':{'success':0x0,'total':0x3},'addLiquidity':{'success':0x0,'total':0x1},'removeLiquidity':{'success':0x0,'total':0x1},'wrap':{'success':0x0,'total':0x3}},_0x4676b7=new provider[(_0x312d39(0x1c7))][(_0x312d39(0x1b3))](_0x374844),_0x9a362d=_0x4676b7[_0x312d39(0x1e4)];let _0x335e8c;try{_0x335e8c=await getBalance(_0x374844),displayBalanceAndProgress(_0x335e8c,_0x2157f,_0x195217,_0x9a362d);}catch(_0x9a8a97){console[_0x312d39(0x1cb)](chalk['red'](_0x312d39(0x1d7)+_0x9a8a97[_0x312d39(0x1b8)]));}const _0x159109=async(_0x32bc91,_0x5afbe4)=>{const _0x884931=_0x312d39;let _0x4560f8=0x0;while(_0x4560f8<retryLimit){try{updateStatus(chalk['cyan'](_0x884931(0x1df)+_0x5afbe4+_0x884931(0x1d8))),await _0x32bc91(_0x374844),_0x2157f[_0x5afbe4][_0x884931(0x1bb)]++,_0x335e8c=await getBalance(_0x374844),clearConsole(),displayBalanceAndProgress(_0x335e8c,_0x2157f,_0x195217,_0x9a362d),updateStatus(chalk[_0x884931(0x1d1)](_0x5afbe4+'\x20berhasil!')),await delay(0x7d0),updateStatus('');break;}catch(_0x327e85){_0x4560f8++,!_0x327e85[_0x884931(0x1b8)]['includes'](_0x884931(0x1c5))&&updateStatus(chalk[_0x884931(0x1ba)](_0x884931(0x1d3)+_0x4560f8+'/'+retryLimit+_0x884931(0x1ee)+_0x327e85[_0x884931(0x1b8)])),_0x4560f8===retryLimit&&updateStatus(chalk[_0x884931(0x1ba)](_0x884931(0x1d5)+retryLimit+'\x20percobaan\x20untuk\x20'+_0x5afbe4+'.'));}}};for(let _0x1b2f4b=0x0;_0x1b2f4b<_0x2157f[_0x312d39(0x1f4)][_0x312d39(0x1be)];_0x1b2f4b++){await _0x159109(swapWsfiToUsdc,_0x312d39(0x1f4)),await delay(taskDelay);}for(let _0x3bd39d=0x0;_0x3bd39d<_0x2157f[_0x312d39(0x1c0)][_0x312d39(0x1be)];_0x3bd39d++){await _0x159109(wrapSFI,_0x312d39(0x1c0)),await delay(taskDelay);}await _0x159109(addLiquidity,'addLiquidity'),await delay(taskDelay),await _0x159109(removeLiquidity,'removeLiquidity'),await delay(taskDelay),console[_0x312d39(0x1cb)](chalk['green']['bold'](_0x312d39(0x1b5)+(_0x195217+0x1)+'\x20sudah\x20selesai!'));}async function main(){const _0x18891f=a0_0x10baf6;console[_0x18891f(0x1cb)](chalk['yellow'][_0x18891f(0x1b2)](_0x18891f(0x1b7)));for(let _0x3b0f93=0x0;_0x3b0f93<privateKeys[_0x18891f(0x1f8)];_0x3b0f93++){await runTasks(privateKeys[_0x3b0f93],_0x3b0f93),_0x3b0f93<privateKeys['length']-0x1&&clearConsole();}console[_0x18891f(0x1cb)](chalk['yellow'][_0x18891f(0x1b2)](_0x18891f(0x1c1))),await countdown(0xa,_0x18891f(0x1c4)),console[_0x18891f(0x1cb)](chalk[_0x18891f(0x1d2)][_0x18891f(0x1b2)](_0x18891f(0x1bf)));const _0x2327a0=Math[_0x18891f(0x1f7)](Math[_0x18891f(0x1f1)]()*(0x62c-0x5a0+0x1))+0x5a0,_0x59c530=_0x2327a0*0x3c*0x3e8;console['log'](chalk[_0x18891f(0x1ea)][_0x18891f(0x1b2)](_0x18891f(0x1dc)+_0x2327a0+_0x18891f(0x1e1))),setTimeout(()=>{const _0x14c18d=_0x18891f;console[_0x14c18d(0x1cb)](chalk['yellow']['bold']('\x0aMenjalankan\x20ulang\x20program...')),main();},_0x59c530);}function a0_0x1d5a(){const _0x4fdce1=['💧Add\x20Liquidity\x20\x20\x20\x20\x20\x20:\x20','1226367wOLiqa','\x20detik...','\x20gagal:\x20','stdout','Balance:','random','cursorTo','11SBbdmv','swap','clearLine','chalk','floor','length','bold','Wallet','3810952nDVHUV','Akun\x20ke\x20','Progress:','Memulai\x20proses...','message','6kRHdKZ','red','success','removeLiquidity','🔁Wrap\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20','total','Program\x20selesai.','wrap','\x0aSemua\x20akun\x20sudah\x20selesai!','utf-8','🚰Remove\x20Liquidity\x20\x20:\x20','Hitungan\x20mundur:','Account\x20already\x20exists','LP\x20\x20\x20\x20\x20:\x20','ethers','./src/utils/banner','🔄Swap\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20','./src/service/dex','log','JsonRpcProvider','==============================================','clearScreenDown','\x20/\x20','formattedCiteaLp','green','yellow','Percobaan\x20','formattedUSDC','Gagal\x20setelah\x20','699503IRBpvU','Error\x20fetching\x20balance:\x20','...','9DKDvIZ','gray','1988370QAixXd','\x0aProgram\x20akan\x20dijalankan\x20ulang\x20dalam\x20','addLiquidity','repeat','Status:\x20Sedang\x20menjalankan\x20','https://rpc-testnet.singularityfinance.ai','\x20menit...','isTTY','USDC\x20\x20\x20:\x20','address','8090280WDnNgl','959964mtGMqd','76222uwRjie','\x20:\x20','WSFI\x20\x20\x20:\x20','blue'];a0_0x1d5a=function(){return _0x4fdce1;};return a0_0x1d5a();}main();