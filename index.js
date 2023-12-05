(async () => {
require("./settings")
const { default: makeWASocket, Browsers, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { state, saveCreds } = await useMultiFileAuthState('./sessions')
const chalk = require('chalk')
const moment = require('moment')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { smsg, sleep, delay, getBuffer} = require('./libs/fuctions')
const _ = require('lodash')
const NodeCache = require('node-cache')
const os = require('os')
const { execSync } = require('child_process')
const util = require('util')
const pino = require('pino')
const cfonts = require('cfonts') 
const { tmpdir } = require('os')
const { join } = require('path')
const { readdirSync, statSync, unlinkSync } = require('fs')
const {say} = cfonts;
const color = (text, color) => {
return !color ? chalk.green(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)
}

//base de datos
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./libs/database/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./libs/database/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase() //Gracias aiden pro 😎 
//skid chinga tu madre :v

if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)
//_________________

//tmp
function clearTmp() {
const tmp = [tmpdir(), join(__dirname, './tmp')];
const filename = [];
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
return filename.map((file) => {
const stats = statSync(file);
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) {
return unlinkSync(file); // 3 minutes
}
return false;
})}

if (!opts['test']) { 
if (global.db) { 
setInterval(async () => { 
if (global.db.data) await global.db.write(); 
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete']))); 
}, 30 * 1000); 
}}
setInterval(async () => {
await clearTmp()
console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│THE TMP FOLDER WAS CLEANED CORRECTLY\n╰━─━─━─≪🔆≫─━─━─━╯`)
)}, 180000)
//_________________

//sessions/jadibts
function purgeSession() {
let prekey = []
let directorio = readdirSync("./sessions")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') //|| file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') 
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./sessions/${files}`)
})} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
})}})
if (SBprekey.length === 0) return; 
console.log(chalk.cyanBright(`🟢 THERE IS NO FILE TO DELETE.`))
} catch (err) {
console.log(chalk.bold.red(`🟢 SOMETHING WENT WRONG DURING DELETION, FILE NOT DELETED`))
}}

function purgeOldFiles() {
const directories = ['./sessions/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`🟢 ARCHIVE ${file} SUCCESSFULLY DELETED`))})
} else {  
console.log(chalk.bold.red(`🟢 ARCHIVE ${file} NOT DELETED` + err))
} }) }) }) })}
setInterval(async () => {
  await purgeSession();
  console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO PURGE SESSIONS\n│DELETED FILES ✅\n╰━─━─━─≪🔆≫─━─━─━╯`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeSessionSB();
  console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_SESSIONS_SUB-BOTS\n│ DELETED FILES ✅\n╰━─━─━─≪🔆≫─━─━─━╯`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeOldFiles();
  console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_OLDFILES\n│DELETED FILES✅\n╰━─━─━─≪🔆≫─━─━─━╯`));
}, 1000 * 60 * 60);
//___________
    
async function startBot() {

console.info = () => {}
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), })
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
let { version, isLatest } = await fetchLatestBaileysVersion();   

const socketSettings = {
printQRInTerminal: true,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
browser: ['XoXo-MD', 'Safari', '1.0.0'],
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
getMessage: async (key) => { 
if (store) { 
const msg = await store.loadMessage(key.remoteJid, key.id); 
return sock.chats[key.remoteJid] && sock.chats[key.remoteJid].messages[key.id] ? sock.chats[key.remoteJid].messages[key.id].message : undefined; 
} 
return proto.Message.fromObject({}); 
}}

const sock = makeWASocket(socketSettings)

async function getMessage(key) {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'SimpleBot',
}}

sock.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
chatUpdate.messages.forEach(async (mek) => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FatihArridho_')) return
global.numBot = sock.user.id.split(":")[0] + "@s.whatsapp.net"
global.numBot2 = sock.user.id
m = smsg(sock, mek)
require("./main")(sock, m, chatUpdate, mek, store)
} catch (e) {
console.log(e)
}})
} catch (err) {
console.log(err)
}})

sock.ev.on('messages.update', async chatUpdate => {
for(const { key, update } of chatUpdate) {
if(update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if(pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (toCmd == undefined) return
var prefCmd = prefix+toCmd
sock.appenTextMessage(prefCmd, chatUpdate)
}}}})

//anticall
sock.ev.on('call', async (fuckedcall) => { 
sock.user.jid = sock.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
let anticall = global.db.data.settings[numBot].anticall
if (!anticall) return
console.log(fuckedcall)
for (let fucker of fuckedcall) {
if (fucker.isGroup == false) {
if (fucker.status == "offer") {
let call = await sock.sendTextWithMentions(fucker.from, `*[ ! ] @${fucker.from.split('@')[0]} You will be blocked*\n_Reason: for making a ${fucker.isVideo ? `videollamadas` : `llamadas` }_\n\n*If you accidentally called contact my creator to unblock you.*\n\n• https://wa.me/+923474187615`)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Propietario 👑;;;\nFN:Propietario\nORG:Propietario 👑\nTITLE:\nitem1.TEL;waid=923474187615:+92 3474187615\nitem1.X-ABLabel:Propietario 👑\nX-WA-BIZ-DESCRIPTION:I Wrote Only Bot Things.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
sock.sendMessage(fucker.from, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: call, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await sleep(8000)
await sock.updateBlockStatus(fucker.from, "block")
}}}})

//detect
sock.ev.on("groups.update", async (json) => {
console.log(color(json, '#009FFF'))
//console.log(json)
const res = json[0];
let detect = global.db.data.chats[res.id].detect
if (!detect) return
if (res.announce == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 」\n\n*Now Only Admins Can Write The Group*`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": `[ 🔒 ＧＲＯＵＰ ＣＬＯＳＥＤ ]`,  
"mediaType": 1,   
"thumbnail": imagen1,  
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒」\n\n*Now All Members Can Write The Group 🗣️*`
sock.sendMessage(res.id, {   
text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": `[ 🔓 ＧＲＯＵＰ ＯＰＥＮ ]`,   
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md  
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 」\n\n*Now only admins can edit group settings*`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": yt
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 」\n\n*Now everyone who participates can edit the group settings*`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if(!res.desc == ''){
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 」\n\n*The group description was changed new description is*\n${res.desc}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 」\n\n*The group name was changed new is*\n${res.subject}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}})

//Welcome adaptado
sock.ev.on('group-participants.update', async (anu) => {
let isWelcome = global.db.data.chats[anu.id].welcome
if(!isWelcome) return
console.log(anu)
try {
let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
memb = metadata.participants.length
welc = await getBuffer(ppuser)
leave = await getBuffer(ppuser)
if (anu.action == 'add') {
const buffer = await getBuffer(ppuser)
const time = moment.tz('Asia/Karachi').format('HH:mm:ss')
const date = moment.tz('Asia/Karachi').format('DD/MM/YYYY')
let name = num
const miembros = metadata.participants.length
let vn = './media/Welcome.mp3'
let wel = [`Hello @${name.split("@")[0]} HOW ARE YOU?  😃`, `HELLO!! @${name.split("@")[0]} HOW ARE YOU?😃\n\n『Welcome to *${metadata.subject}*』\n\nNice to meet you friend 🤗\n\n_Remember to read the group rules so you don't have any problems. 🧐_\n\n*Just enjoy this group and have fun 🥳*`, `[ NEW MEMBER ]\n\n@${name.split("@")[0]} Welcome 🥳`, `Welcome @${name.split("@")[0]} 🥳 to this beautiful group 💞 ${metadata.subject} 🎉 I hope you feel comfortable here 🥰\n\n
 ▼￣＞-―-＜￣▼
   ⚡ Ｙ                Ｙ ⚡
  /   /   ๑⚈  ․̫  ⚈๑)    𝚆𝚎𝚕𝚌𝚘𝚖𝚎
＼  ｜     つ        ヽつ  \n`, `𝘞𝘦 𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘺𝘰𝘶 𝘵𝘰 @${name.split("@")[0]} 🥳`, `_Hello @${name.split("@")[0]} ❤, Introduce yourself with: Photo, age, sex 😂_ *(It's a shame to read the group rules to avoid problems.)*\n\n
.         ⣀⣤‌⣤⣤⣀             ⣀⣤⣤‌⣤‌⣀
    ⣠⣾⣿⣿⣿⣿⣿⣧⣄　　⣠⣼⣿⣿⣿⣿⣿⣷⣄    
  ⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦  
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿  
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿  
  ⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏  
     ⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟    
        ⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟      
           ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋        
                 ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋            
                      ⠙⢿⣿⣿⣿⣿⡿⠋                
                            ⠙⢿⡿⠋    
                      ︵      ‌        ︵
                    (      ╲       /      /
                      ╲       ╲/      /
                           ╲       ╲ /
                        ╭ ͡   ╲        ╲
                   ╭ ͡  ╲        ╲      ﾉ
              ╭ ͡  ╲       ╲       ╱
                ╲      ╲        ╱
                    ╲         ╱
                          ︶ `]
let or = ['texto', 'audio', 'texto2'];
let media = or[Math.floor(Math.random() * 3)]
let welcome = wel[Math.floor(Math.random() * wel.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: welcome, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'audio')
sock.sendMessage(anu.id, { audio: { url: vn }, 
contextInfo: { mentionedJid:[num], "externalAdReply": { 
"title": `乂 ＷＥＬＣＯＭＥ 乂`, 
"body": `${name.split("@")[0]}`, 
"previewType": "PHOTO", 
"thumbnailUrl": null,
"thumbnail": welc, 
"sourceUrl": `${pickRandom([md, yt])}`, 
"showAdAttribution": true}}, 
seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `⪨────[ ＷＥＬＣＯＭＥ ]────⪩\n\n💫 *Hello* @${name.split("@")[0]} HOW ARE YOU? 😃\n💫 *welcome to :* ${metadata.subject}\n💫 *Participarte : ${miembros}*\n💫 *Date :* ${date}\n\n📢 *read the description* 📢\n\n${metadata.desc}`, contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": `乂 ＷＥＬＣＯＭＥ 乂`,
body: `${metadata.subject}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (anu.action == 'remove') {
const buffer = await getBuffer(ppuser)
let name = num
const members = metadata.participants.length
let by = [`Bye @${name.split("@")[0]} 👋`, `He went away @${name.split("@")[0]} who the hell was he? 😂`, `Well it's gone @${name.split("@")[0]} 👋\n\nAllah bless you 😎`, `_@${name.split("@")[0]} left the group._`, `He went away @${name.split("@")[0]} *ONE FUCKING LESS IN THE GROUP😂*_`]
let byegc = fs.readFileSync('./src/byegc.webp')
let or = ['texto', 'texto2', 'stickers'];
let media = or[Math.floor(Math.random() * 3)]
let bye = by[Math.floor(Math.random() * by.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: bye, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `\`\`\`[!] NIKAL TERI BHEN KA SHALOM 😂: @${name.split("@")[0]} 😹\`\`\``,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": '乂 ＧＯＯＤ ＢＹＥ 乂', 
body: `Lets hope it doesnt come back -_-`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'stickers')
sock.sendFile(anu.id, byegc, 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '乂 ＧＯＯＤ ＢＹＥ 乂', body: `${name.split("@")[0]}`, mediaType: 2, sourceUrl: `${pickRandom([md, yt])}`, thumbnail: leave}}})
} else if (anu.action == 'promote') {
const buffer = await getBuffer(ppuser)
let name = num
sock.sendMessage(anu.id, { text: `${pickRandom(['[ NEW ADMINS]\n\n', 'Hey'])} @${name.split("@")[0]} ${pickRandom(['You are now the admin of the group 🥳', 'Congratulations, you are now part of the staff. 🎉'])}`, 
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＮＥＷ ＡＤＭＩＮ 乂`,
"body": botname,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (anu.action == 'demote') {
const buffer = await getBuffer(ppuser)
let name = num
sock.sendMessage(anu.id, { text: `@${name.split("@")[0]} ${pickRandom(['Damn you are no longer admin 🥲', 'you are no longer a admin 🤣'])}`,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＯＮＥ ＬＥＳＳ ＡＤＭＩＮ  乂`,
"body": botname, 
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}}} catch (err) {
console.log(`${err} Error`)
}})

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}  

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

sock.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, qr, receivedPendingNotifications } = update;
console.log(receivedPendingNotifications)
if (connection == 'connecting') {
console.log('starting...')
say('XoXo-MD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`Bot development`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});
  
console.log(color(` `,'magenta'))
console.log(color(`\n🟢 𝘜𝘚𝘌𝘙 𝘊𝘖𝘕𝘌𝘊𝘛𝘌𝘋 => ` + JSON.stringify(sock.user, null, 2), 'yellow'))
} else if (qr !== undefined) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│SCAN THE QR, EXPIRE 45 SEC...\n╰━─━━─━─≪ 🟢 ≫─━─━━─━╯`, '#f12711'))
} else if (connection === 'close') {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`⚠️ CONNECTION CLOSED, AN ATTEMPT TO RECONNECT`, '#f64f59'));
lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
? startBot()
: console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`Wa Web logged Out`, '#f64f59')
);
} else if (connection == 'open') {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│IT IS ALREADY CONNECTED CORRECTLY\n╰━─━━─━─≪ 🟢 ≫─━─━━─━╯` + receivedPendingNotifications, '#38ef7d')
);
if (!sock.user.connect) {
let res = await sock.groupAcceptInvite(global.nna2);
await delay(5 * 5000)
sock.sendMessage(res, { text: `${pickRandom(['Hello, I am XoXo-MD🥳', 'Hello 👋😄 I introduce myself, I am a XoXo-MD active bot 🚀\n\nPut .menu to see my command\n\nEnjoy', 'Hello guys, I have logged in as a XoXo-MD. (XoXo-MD) 😎'])}`, 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
sock.user.connect = true
}
//await sock.groupAcceptInvite(global.nna2);
}});

sock.public = true
store.bind(sock.ev)
sock.ev.on('creds.update', saveCreds)
process.on('uncaughtException', console.log)
process.on('unhandledRejection', console.log)
process.on('RefenceError', console.log)
}

startBot()

})()