const _0x4451db=_0x2c41;function _0x759c(){const _0x48770d=['8154620NuPfpE','3jSGtyN','plugininstaller','unlinkSync','from','existsSync','Error:','_*External\x20Plugins*_\x0a\x0a','30tzvNXH','pluginlist','writeFileSync','1480524NimQlk','Please\x20provide\x20a\x20plugin\x20name\x20!\x0a\x0aExample:\x20*','*\x20plugin\x20is\x20already\x20Present\x20Locally\x20!','path','No\x20additional\x20plugins\x20installed\x20!','../lib/MongoDB/MONGO_VEDI.js','basename','Install,\x20Uninstall,\x20List\x20plugins','sender','Plugin\x20saved\x20successfully!','uninstall*\x20mention.js','/raw','1823460LpWueA','523208BsZkyV','*\x20plugin\x20is\x20not\x20installed\x20!','./Plugins/','toString','207NcIjdj','length','*\x20plugin\x20uninstalled\x20successfully\x20!\x0a\x0aPlease\x20restart\x20the\x20bot\x20to\x20clear\x20cache\x20!','sendMessage','42425740IlGiLM','gist.githubusercontent.com','reply','*...\x20','join','*\x20Installed\x20Successfully\x20!','uninstall','121093WPtzaX','673040qysuEK','*\x0a\x0a','Installing\x20*','*\x20plugin\x20is\x20already\x20Installed\x20!','*\x20:\x20*','log','plugins','Invalid\x20URL\x20!','plugin','got'];_0x759c=function(){return _0x48770d;};return _0x759c();}(function(_0x1088d7,_0x3e0a56){const _0x9d5fd5=_0x2c41,_0xa6a619=_0x1088d7();while(!![]){try{const _0x287040=-parseInt(_0x9d5fd5(0x16f))/0x1+parseInt(_0x9d5fd5(0x15e))/0x2+-parseInt(_0x9d5fd5(0x148))/0x3*(parseInt(_0x9d5fd5(0x152))/0x4)+-parseInt(_0x9d5fd5(0x147))/0x5+-parseInt(_0x9d5fd5(0x14f))/0x6*(parseInt(_0x9d5fd5(0x16e))/0x7)+parseInt(_0x9d5fd5(0x15f))/0x8*(-parseInt(_0x9d5fd5(0x163))/0x9)+parseInt(_0x9d5fd5(0x167))/0xa;if(_0x287040===_0x3e0a56)break;else _0xa6a619['push'](_0xa6a619['shift']());}catch(_0x25360e){_0xa6a619['push'](_0xa6a619['shift']());}}}(_0x759c,0xd9293));function _0x2c41(_0x45fa90,_0x4bec7d){const _0x759c38=_0x759c();return _0x2c41=function(_0x2c4131,_0x2580bb){_0x2c4131=_0x2c4131-0x145;let _0x2d4d94=_0x759c38[_0x2c4131];return _0x2d4d94;},_0x2c41(_0x45fa90,_0x4bec7d);}const got=require(_0x4451db(0x146)),fs=require('fs'),path=require(_0x4451db(0x155)),{readcommands}=require('../lib/Plugins.js'),{pushPlugin,isPluginPresent,delPlugin,getAllPlugins,checkMod}=require(_0x4451db(0x157));let mergedCommands=['install',_0x4451db(0x16d),'plugins',_0x4451db(0x150)];module['exports']={'name':_0x4451db(0x149),'alias':[...mergedCommands],'uniquecommands':['install','uninstall',_0x4451db(0x175),'pluginlist'],'description':_0x4451db(0x159),'start':async(_0x31fa5b,_0x2bb2da,{text:_0x1d423b,args:_0x5b8a36,pushName:_0x52de8d,prefix:_0x25667d,inputCMD:_0x49693c,isCreator:_0x3b61a8,isintegrated:_0x894c26,doReact:_0x16392e})=>{const _0x948bf8=_0x4451db;switch(_0x49693c){case'install':chechSenderModStatus=await checkMod(_0x2bb2da[_0x948bf8(0x15a)]);if(!chechSenderModStatus&&!_0x3b61a8&&!_0x894c26)return await _0x16392e('❌'),_0x31fa5b['sendMessage'](_0x2bb2da[_0x948bf8(0x14b)],{'text':'_*This\x20is\x20an\x20owner\x20command\x20😒*_','quoted':_0x2bb2da});try{var _0x2d748b=new URL(_0x1d423b);}catch(_0x1eeca7){return console[_0x948bf8(0x174)](_0x1eeca7),await client[_0x948bf8(0x166)](_0x2bb2da[_0x948bf8(0x14b)],{'text':_0x948bf8(0x176)},{'quoted':_0x2bb2da});}_0x2d748b['host']==='gist.github.com'?(_0x2d748b['host']=_0x948bf8(0x168),_0x2d748b=_0x2d748b[_0x948bf8(0x162)]()+_0x948bf8(0x15d)):_0x2d748b=_0x2d748b[_0x948bf8(0x162)]();var {body:_0x20ce56,statusCode:_0x2c2fc2}=await got(_0x2d748b);if(_0x2c2fc2==0xc8){try{var _0x204be8='Plugins';fileName=path[_0x948bf8(0x158)](_0x2d748b),plugin=await isPluginPresent(fileName);if(plugin)return _0x2bb2da[_0x948bf8(0x169)]('*'+fileName+_0x948bf8(0x172));if(fs[_0x948bf8(0x14c)](_0x948bf8(0x161)+fileName))return _0x2bb2da[_0x948bf8(0x169)]('*'+fileName+_0x948bf8(0x154));var _0x2022b4=path[_0x948bf8(0x16b)](_0x204be8,fileName);fs[_0x948bf8(0x151)](_0x2022b4,_0x20ce56),console[_0x948bf8(0x174)](_0x948bf8(0x15b));}catch(_0x5defd2){console['log'](_0x948bf8(0x14d),_0x5defd2);}await _0x2bb2da[_0x948bf8(0x169)](_0x948bf8(0x171)+fileName+_0x948bf8(0x16a)),await readcommands(),await pushPlugin(fileName,_0x1d423b),await _0x2bb2da[_0x948bf8(0x169)]('*'+fileName+_0x948bf8(0x16c));}break;case _0x948bf8(0x175):await _0x16392e('🧩');const _0x2a8af0=await getAllPlugins();if(!_0x2a8af0[_0x948bf8(0x164)])await _0x31fa5b[_0x948bf8(0x166)](_0x2bb2da[_0x948bf8(0x14b)],{'text':_0x948bf8(0x156)},{'quoted':_0x2bb2da});else{txt=_0x948bf8(0x14e);for(var _0x54dcfa=0x0;_0x54dcfa<_0x2a8af0[_0x948bf8(0x164)];_0x54dcfa++){txt+='*'+_0x2a8af0[_0x54dcfa][_0x948bf8(0x145)]+_0x948bf8(0x173)+_0x2a8af0[_0x54dcfa]['url']+_0x948bf8(0x170);}txt+='',await _0x31fa5b[_0x948bf8(0x166)](_0x2bb2da[_0x948bf8(0x14b)],{'text':txt},{'quoted':_0x2bb2da});}break;case _0x948bf8(0x16d):chechSenderModStatus=await checkMod(_0x2bb2da[_0x948bf8(0x15a)]);if(!chechSenderModStatus&&!_0x3b61a8&&!_0x894c26)return await _0x16392e('❌'),_0x31fa5b['sendMessage'](_0x2bb2da[_0x948bf8(0x14b)],{'text':'_*This\x20is\x20an\x20owner\x20command\x20😒*_','quoted':_0x2bb2da});if(!_0x1d423b)return await _0x2bb2da[_0x948bf8(0x169)](_0x948bf8(0x153)+_0x25667d+_0x948bf8(0x15c));await _0x16392e('🧩'),fileName=_0x1d423b,plugin=isPluginPresent(fileName);if(!plugin)return await _0x16392e('❌'),await _0x2bb2da['reply']('*'+fileName+_0x948bf8(0x160));if(fs['existsSync']('./Plugins/'+fileName))fs[_0x948bf8(0x14a)]('./Plugins/'+fileName),await delPlugin(fileName),await readcommands(),await _0x2bb2da[_0x948bf8(0x169)]('*'+fileName+_0x948bf8(0x165));else return await _0x16392e('❌'),_0x2bb2da[_0x948bf8(0x169)]('*'+fileName+_0x948bf8(0x160));break;case _0x948bf8(0x150):await _0x16392e('🧩'),textssf='_*EXTERNAL\x20PLUGINS*_\x20\x0a\x0a\x0aHow\x20to\x20install\x20a\x20*PLUGIN*\x20\x0a\x0a.install\x20_*plugin_url*_\x20\x0a\x0a\x0aHow\x20to\x20Unistall/Remove\x20a\x20*Plugin*\x20\x0a\x0a.unistall\x20plugin_name.js\x20(extention\x20needed\x20eg:\x20.js)\x0a\x0a\x0a\x0a*_AVALABLE\x20PLUGINS_*\x20\x0a\x0aCheck\x20:\x20*https://github.com/A-S-W-I-N-S-P-A-R-K-Y/X-BOT-MD/wiki/EXTERNAL-PLUGINS*',await _0x31fa5b[_0x948bf8(0x166)](_0x2bb2da[_0x948bf8(0x14b)],{'image':{'url':botImage1},'caption':textssf},{'quoted':_0x2bb2da});break;default:break;}}};