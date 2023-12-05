 const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const chalk = require('chalk')
 const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'estado' || command == 'infobot') {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
let getGroups = conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `┏━━━━❰･𝐁𝐎𝐓 𝐒𝐓𝐀𝐓𝐔𝐒･❱━━━━
┃
┃웃 Hello @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
┃
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃
┃➢ 𝚂𝙴𝚁𝚅𝙴𝚁 𝚁𝙰𝙼 : ${usedMemory} GB / ${totalMemory} GB
┃➢ 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 : ${os.platform()}
┃➢ 𝙷𝙾𝚃𝚂 : ${os.hostname()}
┃➢ 𝙲𝙿𝚄 𝚄𝚂𝙰𝙶𝙴 : ${cpuUsage.toFixed(2)}%
┃➢ 𝚃𝙾𝚃𝙰𝙻 𝙼𝙴𝙼𝙾𝚁𝚈 : ${totalMemory} GB
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃➢ 𝚄𝚂𝙴𝚁 : ${Object.keys(global.db.data.users).length}
┃➢ 𝚃𝙾𝚃𝙰𝙻𝚂 𝙲𝙷𝙰𝚃 : ${anu.length} 
┃➢ 𝙰𝙲𝚃𝙸𝚅𝙴 : ${runtime(process.uptime())} 
┃➢ 𝙼𝙾𝙳𝙴 : ${conn.public ? 'Público' : `Privado`}
┃➢ 𝚂𝙴𝙲𝙾𝙽𝙳𝙰𝚁𝚈 𝙱𝙾𝚃𝚂 : ${user.length}
┗━━━━━━━━━━━━━ ${conn.user.id == global.numBot2 ? '' : `\n\n➢ 𝐢𝐦 𝐚 𝐬𝐮𝐛𝐛𝐨𝐭 : wa.me/${global.numBot.split`@`[0]}`}`.trim()
let ments = [me]      
conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'owner' || command == 'creator' || command == 'contacto') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;OWNER/OWNER OF THE BOT 👑;;;\nFN:OWNER\nORG:OWNER/OWNER OF THE BOT\nTITLE:\nitem1.TEL;waid=923474187615:+92 347-4187615\nitem1.X-ABLabel:OWNER/OWNER OF THE BOT\nX-WA-BIZ-Ꮖ ᏔᎡϴͲᎬ ϴΝᏞᎽ ᏴϴͲ ͲᎻᏆΝᏀՏ.\nX-WA-BIZ-NAME:OWNER/OWNER OF THE BOT 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `Hello @${sender.split("@")[0]}, This bot is under development if you want, contact my creator here I leave you their number\n\n𝐃𝐨𝐧𝐭 𝐒𝐩𝐚𝐦`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'grupos' || command == 'grupoficiales') {
//const grupp = Math.floor(Math.random() * 70);
let a = `${pickRandom([nn, nn2, nn3, nn4, nn5, nn6, nna, nn7, nn8, multi])}`;
let imagen = `${pickRandom([imagen1, imagen2, imagen3])}`;
let amix = 'https://chat.whatsapp.com/GRugVVr09QOEXnTXvAcAUb'
conn.sendMessage(m.chat, { text: `*𝐇𝐞𝐥𝐥𝐨 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐎𝐮𝐫 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐆𝐫𝐨𝐮𝐩`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: a}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'instalarbot' || command == 'crearbot') {
conn.sendMessage(m.chat, { text: `
╭─────────────┈⊷
│ \`\`\`HOW TO INSTALL THIS BOT?\`\`\`
╰┬────────────┈⊷
┌┤\`\`\`📌 INSTALLATION REQUIREMENTS \`\`\`
┌┤❇️ _Doubts: wa.me/923474187615_
┌┤❇️ _Tutorial: Soon I'll make_
┌┤❇️ _1 GB of storage_
┌┤❇️ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤❇️ _GitHub: https://github.com/Joker-Ofc_
┌┤❇️ _an immune WhatsApp (secondary)_
┌┤❇️ _a virtual number (another number)_
┌┤❇️ _2 device or a PC to scan
╰────────────┈⊷

 \`\`\`📌 TERMUX INSTALLATION COMMAND\`\`\`

> termux-setup-storage

> apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn

> git clone https://github.com/Joker-Ofc/XoXo-MD && cd XoXo-MD && yarn && npm install

> npm start

(Scan the QR, Quick)

🚀 --------[ host ]--------- 🚀
💞 Supported In Panels so Find panel by your self`,
contextInfo:{
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${wm}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'ping') {
var timestamp = speed();  
var latensi = speed() - timestamp  
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'report') {
if (!text) return m.reply(`*Wrong*\n\n*example:*\n${prefix + command} sticker no funciona`)
conn.sendMessage(`923474187615@s.whatsapp.net`, {text: `╭━━〔 * 𝚁𝙴𝙿𝙾𝚁𝚃 * 〕━━⬣\n┃\n┃✿ *N𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *T𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`*The Report was sent to my creator, we will contact you if necessary, if it is false it will be ignored and blocked from the bot*`)
}

if (command == '923474187615') {
if (!args.join(" ")) return m.reply(`┗❴ ⚠ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ⚠ ❵┛\n\nIt is prohibited to tag the creator/development if you have any suggestions regarding the bot, write to their private.`)
teks = `*|  |*`
teks1 = `\n\nN`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

if (command == 'sc') {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let res = await fetch('https://api.github.com/repos/Joker-Ofc/XoXo-MD')
let json = await res.json()
let txt = `			 *乂 B O T  -  S C R I P T 乂*\n\n`
txt += `◦  *Name* : ${json.name}\n`
txt += `◦  *Watchers* : ${json.watchers_count}\n`
txt += `◦  *Size* : ${(json.size / 1024).toFixed(2)} MB\n`
txt += `◦  *Update* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
txt += `◦  *Url* : ${json.html_url}\n\n`
txt += `${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n`
txt += res
await conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'INR', amount1000: '1000000000000', requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: txt, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true }}}}}}, {})}}

module.exports = { info }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
