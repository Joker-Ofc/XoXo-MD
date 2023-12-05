//Bot echo desde 0 por favor deja crédito rata
const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 

//---------[ PROPIETADO/OWNER ]---------
global.owner = [["923474187615", "Owner", true], ["6285787841605", "assistance", true], ["61485957144"]]
global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "XoXo-MD"
global.wm = 'ＸＯＸＯ- Ｍ Ｄ ⛄'
global.vs = '1.0.2 (Beta)'

//---------[ FECHA/IDIOMAS ]---------
global.place = 'Asia/Karachi' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.language = 'en' // Aquí puedes encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
  ApiEmpire: 'https://api.boxmine.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "ｘｏｘｏ-ｍｄ"
global.author = "1.0.2"
 
//---------[ IMAGEN ]---------
global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')

//---------[ ENLACE ]---------
global.md = 'https://wa.me/+923474187615'
global.yt = 'https://wa.me/+923474187615'
global.tiktok = 'https://wa.me/+923474187615'
global.faceb = 'https://wa.me/+923474187615'

global.nna = 'https://wa.me/+923474187615' //Update 
global.nn = 'https://wa.me/+923474187615' //LoliBot
global.nn2 = 'https://wa.me/+923474187615' //Loli & Nova
global.nn3 = 'https://wa.me/+923474187615a' //Grupo de Colaboracion
global.nn4 = 'https://wa.me/+923474187615' // Grupo COL 2
global.nn5 = 'https://wa.me/+923474187615' //Grupo COL 3
global.nn6 = 'https://wa.me/+923474187615' //test
global.nn7 = 'https://wa.me/+923474187615' //Grupo ayuda sobre el bot
global.nn8 = 'https://wa.me/+923474187615' //enlace lolibot
global.multi = 'https://wa.me/+923474187615' //Grupo COL 4
global.nna2 = 'GRugVVr09QOEXnTXvAcAUb'

//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _ＬＯＡＤＩＮＧ..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _ＬＯＡＤＩＮＧ..._ ▬▬▭▭▭*', 
waittt: '*⌛ _ＬＯＡＤＩＮＧ..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _ＬＯＡＤＩＮＧ..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _ＬＯＡＤＩＮＧ..._ ▬▬▬▬▬▬▬*', 
result: '*✅ List*', 
admin: '*[ ⚠️ ] YOU ARE NOT ADMINS 🤡 This Command is only for the admins of the group*',
botAdmin: '[ ⚠️ ] *Hey first the bot (me) need to be admins to use this*',
owner: '*[ ⚠️ ] This Command is for my boss*',
group: '[ ⚠️ ] *This Command can only be used by the group*',
private: '*[ ⚠️ ] This Command can only be used in private chat*',
bot: '*[ ⚠️ ] I can use this Command*',
error: '*[ ⚠️ 𝘌𝘙𝘙𝘖𝘙 ]*', 
advertencia: `[ ⚠️ ＷＡＲＮＩＮＧ ]`, 
registra: `*[ 🔴 HEY STOP YOU ARE NOT REGISTERED 🔴 ]*\n\nYOU DO NOT APPEAR IN MY DATABASE ✋\n\nTo be able to use the bot you need to be registered:\n\n.reg name.age`,  
limit: '*1 Diamond 💎 used*', 
AntiNsfw: `*The +18 command is disabled*\nIf you are an admin and want to activate them, use:\nmodocaliente on`, 
endLimit: 'You have no more limit 💎 you can buy more using the command buy', }
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
