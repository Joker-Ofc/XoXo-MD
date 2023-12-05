const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, sendImageAsUrl, getRandom} = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
const translate = require('@vitalets/google-translate-api')

async function game(m, command, text, pickRandom, pushname, conn, participants, sender, who, body, ra) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'simi' || command == 'alexa' || command == 'siri') {
if (!text) return m.reply(`${pickRandom([`Hello 👋 *${pushname}* How are you doing?  Cormigo wants to chat 👀`, '*Hello, Im a bot, can I help?*', 'Hello, lets talk for a little while ☺ what are you telling me?', 'Hello 👋😄 here I am to make you laugh for a while, my friend tell me that Im very funny 😆', 'Whats up dog are you okay?', 'Hey Im bored, can we talk for a while?'])}`)
try {     
await conn.sendPresenceUpdate('composing', m.chat)
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch (e) { 
return m.reply(`*Simsimi api crashed come back later*`)
console.log(e)}}}

if (command == 'ask' || command == 'preg') { 
if (!text) return m.reply(`*Hey and the question?*\n\n*Example:* ${prefix + command} Will it rain tomorrow?`)
m.react('🤔') 
let pr = ['no', 'yes', 'I dont know', 'it could be', 'I dont think so', 'I forget', 'What a stupid question', 'A']
let preg = pr[Math.floor(Math.random() * pr.length)]
m.reply(`*🔸️ Ask:* ${text}
*🔸️ Answer:* ${preg}`)}

if (command == 'gay') {
if (!m.isGroup) return m.reply(info.group) 
let vn = './media/gay2.mp3'
m.react('🏳‍🌈') 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'you are straight 🤪🤙'} else if (gay == 21 ) {ga = 'More or less 🤔'} else if (gay == 23 ) {ga = 'More or less 🤔'} else if (gay == 24 ) {ga = 'More or less 🤔'} else if (gay == 25 ) {ga = 'More or less 🤔'} else if (gay == 26 ) {ga = 'More or less 🤔'} else if (gay == 27 ) {ga = 'More or less 🤔'} else if (gay == 28 ) {ga = 'More or less 🤔'} else if (gay == 29 ) {ga = 'More or less 🤔'} else if (gay == 30 ) {ga = 'More or less 🤔'} else if (gay == 31 ) {ga = 'I have my doubts 😑'} else if (gay == 32 ) {ga = 'I have my doubts 😑'} else if (gay == 33 ) {ga = 'I have my doubts 😑'} else if (gay == 34 ) {ga = 'I have my doubts 😑'} else if (gay == 35 ) {ga = 'I have my doubts 😑'} else if (gay == 36 ) {ga = 'I have my doubts 😑'} else if (gay == 37 ) {ga = 'I have my doubts 😑'} else if (gay == 38 ) {ga = 'I have my doubts 😑'} else if (gay == 39 ) {ga = 'I have my doubts 😑'} else if (gay == 40 ) {ga = 'I have my doubts 😑'} else if (gay == 41 ) {ga = 'I am right? 😏'} else if (gay == 42 ) {ga = 'I am right? 😏'} else if (gay == 43 ) {ga = 'I am right? 😏'} else if (gay == 44 ) {ga = 'I am right? 😏'} else if (gay == 45 ) {ga = 'I am right? 😏'} else if (gay == 46 ) {ga = 'I am right? 😏'} else if (gay == 47 ) {ga = 'I am right? 😏'} else if (gay == 48 ) {ga = 'I am right? 😏'} else if (gay == 49 ) {ga = 'I am right? 😏'} else if (gay == 50 ) {ga = 'You are or not? 🧐'} else if (gay > 51) {ga = 'you are gay 🥸'}
//let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `@${who.split("@")[0]} Es 🏳️‍🌈 ${random}% Gay\n\n${ga}`
let ments = [me, jodoh]
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/gay', { 
avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
   })}, caption: jawab, contextInfo:{ mentionedJid:[who], forwardingScore: 9999999, isForwarded: true, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendAudio(m.chat, vn, m)}

if (command == 'couple' || command == 'formarpareja') {
if (!m.isGroup) return m.reply(info.group) 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let love = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `*@${jodoh.split('@')[0]} you should marry @${love.split('@')[0]} They make a nice couple 💕*`,
contextInfo:{
mentionedJid:[jodoh, love],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'follar' || command == 'violar' || command == 'coger') { 
if (!text) return m.reply(`*Ingrese el @ o el nombre de la persona*`) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.sendMessage(m.chat, { text: `🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤

𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚 ${text} 𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!

${text}
🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤`, mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net']}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'formartrio') {
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `Hey!! @${a.split('@')[0]}, @${b.split('@')[0]} y @${c.split('@')[0]} Have you thought about making a trio?  you 3 make a good threesome 😳😏`, contextInfo:{mentionedJid:[a, b, c], forwardingScore: 9999999, isForwarded: true, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'formapareja5') {
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
let f = member[Math.floor(Math.random() * member.length)]
let g = member[Math.floor(Math.random() * member.length)]
let h = member[Math.floor(Math.random() * member.length)]
let i = member[Math.floor(Math.random() * member.length)]
let j = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `*_😍 Las 5 mejores parejas del grupo 😍_*
    
*_1.- @${a.split('@')[0]} y @${b.split('@')[0]}_*
- Esta pareja esta destinada a estar junta 💙

*_2.- @${c.split('@')[0]} y @${d.split('@')[0]}_*
- Esta pareja son dos pequeños tortolitos enamorados ✨

*_3.- @${e.split('@')[0]} y @${f.split('@')[0]}_*
- Ufff y que decir de esta pareja, ya hasta familia deberian tener 🤱🧑‍🍼

*_4.- @${g.split('@')[0]} y @${h.split('@')[0]}_*
- Estos ya se casaron en secreto 💍

*_5.- @${i.split('@')[0]} y @${j.split('@')[0]}_*
- Esta pareja se esta de luna de miel ✨🥵😍❤️`, contextInfo:{mentionedJid:[a, b, c, d, e, f, g, h, i, j]}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'top') { 
if (!text) return m.reply(`*Ejemplo de uso:*\n.top *texto*`) 
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
  const k = Math.floor(Math.random() * 70);
  const x = `${pickRandom(['🤓', '😅', '😂', '😳', '😎', '🥵', '😱', '🤑', '🙄', '💩', '🍑', '🤨', '🥴', '🔥', '👇🏻', '😔', '👀', '🌚'])}`;
const l = Math.floor(Math.random() * x.length);
const vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`;
const top = `*${x} Top 5 ${text} ${x}*
    
*1. @${a.split('@')[0]}*
*2. @${b.split('@')[0]}*
*3. @${c.split('@')[0]}*
*4 @${d.split('@')[0]}*
*5 @${e.split('@')[0]}*`;
conn.sendMessage(m.chat, { text: top, contextInfo:{
mentionedJid:[a, b, c, d, e],
forwardingScore: 9999999,
isForwarded: true, }}, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'topgays') { 
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
let f = member[Math.floor(Math.random() * member.length)]
let g = member[Math.floor(Math.random() * member.length)]
let h = member[Math.floor(Math.random() * member.length)]
let i = member[Math.floor(Math.random() * member.length)]
let j = member[Math.floor(Math.random() * member.length)]
const vn = './media/gay2.mp3';
const top = `*🌈TOP 10 GAYS/LESBIANAS DEL GRUPO🌈*
    
*1. @${a.split('@')[0]}*
*2. @${b.split('@')[0]}*
*3. @${c.split('@')[0]}*
*4 @${d.split('@')[0]}*
*5 @${e.split('@')[0]}*
*6 @${f.split('@')[0]}*
*7 @${g.split('@')[0]}*
*8 @${h.split('@')[0]}*
*9 @${i.split('@')[0]}*
*10 @${j.split('@')[0]}*`;
conn.sendMessage(m.chat, { text: top, contextInfo:{
mentionedJid:[a, b, c, d, e, f, g, h, i, j],
forwardingScore: 9999999,
isForwarded: true, }}, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (command == 'topotakus') {
let member = participants.map(u => u.id)
let me = m.sender
let a = member[Math.floor(Math.random() * member.length)]
let b = member[Math.floor(Math.random() * member.length)]
let c = member[Math.floor(Math.random() * member.length)]
let d = member[Math.floor(Math.random() * member.length)]
let e = member[Math.floor(Math.random() * member.length)]
let f = member[Math.floor(Math.random() * member.length)]
let g = member[Math.floor(Math.random() * member.length)]
let h = member[Math.floor(Math.random() * member.length)]
let i = member[Math.floor(Math.random() * member.length)]
let j = member[Math.floor(Math.random() * member.length)]
const vn = './media/otaku.mp3';
const top = `*🌸 TOP 10 OTAKUS DEL GRUPO 🌸*
    
*1. @${a.split('@')[0]}*
*2. @${b.split('@')[0]}*
*3. @${c.split('@')[0]}*
*4 @${d.split('@')[0]}*
*5 @${e.split('@')[0]}*
*6 @${f.split('@')[0]}*
*7 @${g.split('@')[0]}*
*8 @${h.split('@')[0]}*
*9 @${i.split('@')[0]}*
*10 @${j.split('@')[0]}*`;
conn.sendMessage(m.chat, { text: top, contextInfo:{
mentionedJid:[a, b, c, d, e, f, g, h, i, j],
forwardingScore: 9999999,
isForwarded: true, }}, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'racista') {
rate = body.slice(9)
random = `${Math.floor(Math.random() * 100)}`
racista = random
if (racista < 20 ) {ra = 'Tu no eres racista 👏'} else if (racista == 21 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 23 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 24 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 25 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 26 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 27 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 28 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 29 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 30 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 31 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 32 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 33 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 34 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 35 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 36 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 37 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 38 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 39 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 40 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 41 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 42 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 43 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 44 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 45 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 46 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 47 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 48 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 49 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 50 ) {ra = 'Fuck men alto racista 😡'} else if (racista > 51) {ra = 'UN AUTENTICO RACISTA 🥸'}
hasil = `${rate} Usted es ${random}% racista\n\n${ra}`
m.reply(hasil)}

if (command == 'love') {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*

*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*
`.trim() 
m.react('💞') 
conn.sendMessage(m.chat, { text: love, mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net']}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'ship') {
if (!text) return m.reply(`*[ ⚠️ ] ᥱsᥴrіᑲᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ძ᥆s ⍴ᥱrs᥆ᥒᥲs ⍴ᥲrᥲ ᥴᥲᥣᥴᥙᥣᥲr sᥙ ᥲm᥆r*`) 
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) return m.reply(`*һᥱᥡ ᥱsᥴrіᑲᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ᥣᥲ sᥱgᥙᥒძᥲ ⍴ᥱrs᥆ᥒᥲ*`) 
let lovetext = `❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%*👩🏻‍❤️‍👨🏻`.trim()
m.reply(lovetext, null, { mentions: conn.parseMention(lovetext)})}

if (command == 'personalidad') { 
if (!text) return m.reply('*Ingrese un nombre?*')
let personalidad = `┏━━°❀❬ *PERSONALIDAD* ❭❀°━━┓
*┃*
*┃• Nombre* : ${text}
*┃• Buena Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Mala Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Tipo de persona* : ${pickRandom(['De buen corazón','Arrogante','Tacaño','Generoso','Humilde','Tímido','Cobarde','Entrometido','Cristal','No binarie XD', 'Pendejo'])}
*┃• Siempre* : ${pickRandom(['Pesado','De malas','Distraido','De molestoso','Chismoso','Pasa jalandosela','De compras','Viendo anime','Chatea en WhatsApp porque esta soltero','Acostado bueno para nada','De mujeriego','En el celular'])}
*┃• Inteligencia* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Morosidad* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Coraje* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Miedo* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Fama* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Género* : ${pickRandom(['Hombre', 'Mujer', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminista', 'Heterosexual', 'Macho alfa', 'Mujerzona', 'Marimacha', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
┗━━━━━━━━━━━━━━━━`
m.reply(personalidad)}

if (command == 'doxear' || command == 'doxxeo') { 
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return m.reply("*[ ⚠️ ] INGRESA EL @tag DE ALGUN USUARIO*")
let start = `*😱 ¡¡Empezando Doxxeo!! 😱*`
let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`
let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`
let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`
let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`
const { key } = await conn.sendMessage(m.chat, {text: start, contextInfo: {mentionedJid:[text]}}, {quoted: m});
await conn.sendMessage(m.chat, {text: boost, edit: key});
await conn.sendMessage(m.chat, {text: boost3, edit: key});
await conn.sendMessage(m.chat, {text: boost5, edit: key});
let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `*_🤣 Persona Hackeada/doxxeada con éxito 🤣_*\n\n*_Tiempo: ${speed} segundos!_*

*RESULTADOS:*

*Nombre:* ${text}
*Ip:* 92.28.211.234
*N:* 43 7462
*W:* 12.4893
*SS NUMBER:* 6979191519182016
*IPV6:* fe80::5dcd::ef69::fb22::d9888%12 
*UPNP:* Enabled
*DMZ:* 10.112.42.15
*MAC:* 5A:78:3E:7E:00
*ISP:* Ucom unversal 
*DNS:* 8.8.8.8
*ALT DNS:* 1.1.1.8.1  
*DNS SUFFIX:* Dlink
*WAN:* 100.23.10.15
*WAN TYPE:* private nat
*GATEWAY:* 192.168.0.1
*SUBNET MASK:* 255.255.0.255
*UDP OPEN PORTS:* 8080.80
*TCP OPEN PORTS:* 443
*ROUTER VENDEDOR:* ERICCSON
*DEVICE VENDEDOR:* WIN32-X
*CONNECTION TYPE:* TPLINK COMPANY
*ICMPHOPS:* 192.168.0.1 192.168.1.1 100.73.43.4
host-132.12.32.167.ucom.com
host-132.12.111.ucom.com
36.134.67.189 216.239.78.11
Sof02s32inf14.1e100.net
*HTTP:* 192.168.3.1:433-->92.28.211.234:80
*Http:* 192.168.625-->92.28.211.455:80
*Http:* 192.168.817-->92.28.211.8:971
*Upd:* 192.168452-->92.28.211:7265288
*Tcp:* 192.168.682-->92.28.211:62227.7
*Tcp:* 192.168.725-->92.28.211:67wu2
*Tcp:* 192.168.629-->92.28.211.167:8615
*EXTERNAL MAC:* 6U:77:89:ER:O4
*MODEM JUMPS:* 64`
conn.sendMessage(m.chat, {text: doxeo, edit: key})}}

async function game2(m, command, sendImageAsUrl, pickRandom) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'verdad') { 
sendImageAsUrl('https://telegra.ph/file/2a2a3b03697dd33bfbb95.jpg', `𝘏𝘢𝘴 𝘦𝘴𝘤𝘰𝘨𝘪𝘥𝘰 *𝘝𝘌𝘙𝘋𝘈𝘋*\n\n╱╲❀╱╲╱╲❀╱╲╱╲❀╱╲\n◆ ${pickRandom(global.verdad)}\n╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱`)}

if (command == 'reto') { 
sendImageAsUrl('https://i.ibb.co/gzfDZLv/unnamed.jpg', `𝘏𝘢𝘴 𝘦𝘴𝘤𝘰𝘨𝘪𝘥𝘰 *𝘙𝘌𝘛𝘖*\n\n╱╲❀╱╲╱╲❀╱╲╱╲❀╱╲\n◆ ${pickRandom(global.reto)}\n╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱`)}

if (command == 'piropo') {
m.reply(`╱╲❀╱╲╱╲❀╱╲╱╲❀╱╲\n◆ ${pickRandom(global.piropo)}\n╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱`)}}

async function game3(m, command, conn, args, prefix, msToTime, text, body, from, sender, quoted, target, bot, participant, pushname, astro) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'slot' || command == 'apuesta') { 
if (!args[0]) return m.reply(`*[ ⚠️ ] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*\n\n*📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${prefix + command} 100*`)
if (isNaN(args[0])) return m.reply(`*[ ⚠️ ] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*\n\n*📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${prefix + command} 100*`)
const apuesta = parseInt(args[0]);
const users = global.db.data.users[m.sender];
const time = users.lastslot + 30000;//30 seg
if (new Date - users.lastslot < 30000) return m.reply(`*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*`) 
if (apuesta < 100) return m.reply('✳️ 𝙼𝚒𝚗𝚒𝚖𝚘 𝚍𝚎 𝚕𝚊 𝚊𝚙𝚞𝚎𝚜𝚝𝚊 𝚎𝚜 *100 XP*') 
if (users.exp < apuesta) {
return m.reply(`*✳️ 𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎 𝚇𝙿*`)}
const emojis = ['💎', '🪙', '🌀'];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
const x = [];
const y = [];
const z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*🎁 𝙶𝙰𝙽𝙰𝚂𝚃𝙴 +${apuesta + apuesta} 𝚇𝙿*`;
users.exp += apuesta + apuesta
} else if (a == b || a == c || b == c) {
end = `*🔮 𝙲𝙰𝚂𝙸 𝙻𝙾 𝙻𝙾𝙶𝚁𝙰𝚂!, 𝚂𝙸𝙶𝚄𝙴 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾*\n*𝚃𝙾𝙼𝙰 +10 XP*`;
users.exp += 10;
} else {
end = `*😔 𝙿𝙴𝚁𝙳𝙸𝚂𝚃𝙴 -${apuesta} 𝚇𝙿*`;
users.exp -= apuesta;
}
users.lastslot = new Date * 1;
return await m.reply(`*🎰 | SLOTS | 🎰*
╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
╲╱❀╲╱╲╱❀╲╱╲╱❀╲╱
*🎰 | SLOTS | 🎰*\n\n${end}`)}

if (command == 'fake') { 
var gh = body.slice(11);
var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
if (mentioned && target && bot) {
var quotedMessage = {
key: {
fromMe: false,
participant: mentioned
},
message: {
conversation: target
}};
var sendMessageOptions = {
text: `${bot}`,
quoted: quotedMessage
};
conn.sendMessage(m.chat, sendMessageOptions, { quoted: quotedMessage });
} else {
conn.sendMessage(m.chat, { text: `*Ejemplo:* ${prefix + command} @tag|puto|😯`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}}

if (command == 'ppt' || command == 'suit') { 
if (!text) return m.reply(`🥌ᴘɪᴇᴅʀᴀ 📄ᴘᴀᴘᴇʟ ✂️ᴛɪᴊᴇʀᴀ\n\n• ᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏ:\n🥌${prefix}ppt piedra\n📄${prefix}ppt papel\n✂️${prefix}ppt tijera\n\n• ᴜsᴇ ᴇɴ ᴍɪɴᴜsᴄᴜʟᴀs\n*Ejemplo:* ${prefix}ppt papel`) 
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 EMPATE! 🤝\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIOS +500 XP`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 2000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +2000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO ! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}}}}

module.exports = {game, game2, game3}

global.verdad = ["Have you ever liked someone?  How long?", "What is your biggest fear?", "Have you ever liked someone and felt that person like you too?", "What is the name of your friend's ex-boyfriend that you Did you ever secretly like him?", "Have you ever stolen your mother/father's money?  The reason?", "What makes you happy when you are sad", "Have you ever been unrequited love?  If you have been with who?  How does brou feel?", "Have you ever had an affair with someone?", "the most feared thing", "who is the most influential person in your life", "how proud are you this year", "who is the person who can make you sick", "who is the person who ever made you horny", "(for Muslims) have you never prayed all day?", "Who is the closest to your ideal type of partner here", "Who do you like to play with?", "Have you ever rejected someone?  Why?", "Mention the incident that hurt you and that you still remember", "What achievements have you made this year?", "What is your worst habit at school?", "What TV show do you hate more?  Be right!", "What is the ugliest dress (in your opinion) you have ever worn and when did you wear it?", "What is the worst (gossip) thing you have ever said about your friend?","What is the most embarrassing thing about yourself?", "What is the first thing you see when you look at another person (of the opposite sex)?", "What is the first thing that comes to mind when you look in the mirror?" ,"What is the dumbest thing you have ever done?", "What is the worst dream you have ever had?", "What is the craziest dream you can remember so far?", "What is your worst trait in your opinion?", "What trait would you like to change about yourself?", "What trait would you like to change in your friend?", "What would you do if your boyfriend told you that you had a bad nose or fingers?" , "What do you think about before you go to sleep?  ex: fantasizing about a partner, etc.", "What do you think stands out the most about you?", "What part of your friend's body do you like the most and wish you had?", "What part of your body do you hate more?","Of all the classes in school, which class would you like to enter and which class would you like to avoid?", "Describe your closest friend!","Describe yourself in one word!"," What movies and songs have made you cry?", "What is something that you have kept secret until now and no one has found out?", "What is the most romantic thing that someone (of the opposite sex) has done to you or given away?", "What is the most unpleasant thing you have experienced?", "If you were born again and had to be one of your friends, who would you choose to be?", "If you have a superpower, what do you want to do?" , "If the apocalypse comes soon, what do you do?", "If you were asked to undergo plastic surgery on a sample of your classmate's face, who would you imitate?", "Have you ever stolen anything? ", "When was the last time you cried and why?", "What are your special abilities?", "How can you like the person you like?", "What do you think is a good trait of your closest friend that he or she doesnt know?", "What kind of person would you like to marry one day?", "In your opinion, what is the most attractive job for the friend sitting next to you?  And why?", "Who do you want to exchange with for a day?  (closest friends you both know) and why", "Have you ever secretly hoped that someones relationship with his girlfriend would break up? Who?", "Do you prefer FRIENDS or FRIENDS?  Why?", "Which quote do you remember the most and like?", "What secrets have you never told your friends until now?", "Who are your real role models?", "Which of Do your friends think hes a matre?", "Which of your friends do you think has the least haircut?", "Which of your friends is the most photogenic?", "Who is your best ex?  And why did you break up?!", "What is the name of the artist you talked to secretly?", "What was the name of the teacher you liked?", "What is the name of your ex-girlfriend?","friend youve secretly liked?", "Whats the name of the person (of the opposite sex) you think would be fun to be a girlfriend?", "Whats the name of the person you hate, but think you like?","Do you like that person (not necessarily of the opposite sex)?", "What is the name of the person you have been secretly singling out?", "Who is the person (of the opposite sex) that you most miss by the head?", "Who is the most annoying person among your friends?  the reason!", "Which of your friends do you think should be renewed?", " Who is closer to your ideal partner here?", "Father or mother", "The body part you dont like","Have you ever cheated?", "Have you ever been kissed?", "What is the first thing you would do if you woke up as the opposite sex?", "Have you ever let someone else get in trouble for something you did?", "What is the most embarrassing thing you have ever done? life?", "What is the most ridiculous reason you have broken up with someone?", "What is the worst habit you have?", "What do you think is your best characteristic?  And whats the worst?", "Whats the bravest thing youve ever done?", "When was the last time you wet the bed?", "What do you dream about most when sleeping?", "Yes is going to earn money illegally, how does he do it?", "What childish things do you keep doing?", "What impresses you the most?", "If you were allowed to use only 3 words for the rest of the night From now on, which one would it be?", "If you were a dictator, which law would you enact first?", "If you lived during the Nazi era, who would you be?", "What was the most embarrassing experience in school?","or last year?", "What is the biggest mistake of your life?", "What would you never do, even if you knew you only had 12 hours to live?", "What crimes have you committed?", "Tell me a secret from your childhood.", "What is your greatest representative (secret)?", "What do you want to do with (x person) if you can later erase his memory (him...)?", " Whats the worst thing youve done to someone?", "Who do you like the most?", "Have you ever fallen in love with anyone here?", "If you were a vampire, which one of us would you bite next?", "Have you ever defecated in public?", "What is your darkest fantasy?", "What is the best thing you have ever had with someone else?", "What is the biggest turn-off for you? ", "What do you like most about your body and what is the ugliest?", "Who would you like to see naked?", "Who in this round can make you fall in love with you?", "Have you ever Had an erotic dream where someone from this group happened?", "If you are going to get a tattoo in the genital area, what will be there?", "What is more important in a relationship: sex or love?", " Do you think sex is great, good, good, fun sometimes, or do you really not care?", "What makes you really love?", "How many times a week/month do you have sex and how often","Do you want to have sexual relations?", "How many sexual partners have you slept with?", "Which part of the body do you like the most?", "How, where and who were you with first?", "How important are they to you?","Have you ever had sex with a good friend?", "Have you ever had sex with any of these groups?", "What should a man or woman do to seduce you?", "Have you ever had sex with a good friend?" ,"except with your partner?", "Which animal suits you best and why?", "What is your worst date?", "Who do you want to kiss now?", "What is your dark fantasy? secret?", "Would you rather get your ass tattooed or get your tongue pierced?", "Are you always loyal?", "Do you have a teenage crush?", "Which person did you fall in love with?", "Which celebrity did you date?" "Would you like to go out?", "What was the most embarrassing moment of your life?", "Which player has the most beautiful hand?", "Where was your first kiss?", "Who in the group would you like to kiss? most?", "Who at the table is perhaps the funniest?", "What is the biggest mistake of your life?", "Did something embarrassing happen to you on a date?", "Have you ever been to contact with drugs?", "Which person do you want to kiss now?", "When was the last time you were drunk?", "Have you ever cheated on a school test?", "Have you stolen something in the past?", "Do you snore at night?", "What is your favorite song?", "Which players will you trade with for 1 week and why?", "You moved to a desert island, who do you trade with?","What are you most afraid of?", "Where do you shave everywhere?", "Do you have a nickname?", "Do you look in the bathroom before you wash?", "Who gave the worst anguish?", "How many times have you kissed?", "What is the most embarrassing thing that has happened to you?", "How many girls have you kissed?", "Who are you in love with? ", "What star do you like", "Did you start something with XY (insert name)?", "Have you ever stolen something?"] 

global.reto = ["eat 2 tablespoons of rice without garnishes, if it is dragging you can drink", "it spills people that makes you pause", "call crush now and send him I want to finish now and send cartura to the groups", "release only emoticon every time you write in a group for 1 day.", "say Welcome to Who Wants to Be a Millionaire!  to all the groups you have", "sing the chorus of the last song you played", "Hit the table (which is at home) until you get scolded for making noise", "Tell random people _They just told me that first I was your twin, we separated, then I had plastic surgery.  And this is the most ciyusss_", "mention your ex's name", "make 1 rhyme with (boob, ass) for the group members 😂!", "send your girlfriend's contact to the group"," Chat with random people with Cheto language and then send here", "tell your own version of embarrassing things", "tag the person you hate", "Pretend to be possessed, for example: possessed by dog, possessed by grasshopper, possessed by refrigerator, etc.","change name to *I AM DONKEY* for 24 hours", "scream *I AM GAY* in front of your house", "tell me your type of boyfriend!", "Say *I'm in love with you , do you want to be my girlfriend?* to the opposite sex, the last time you chatted (send screenshot), wait for me to respond, if so, leave it here", "Send an audio of the crazy cow singing", "joke with your ex and say *I love you, please come back* without saying dare!", "change your name to *I'm gay* for 5 hours", "put your profile picture on the first one that appears in your gallery, for 3 days" , "send a voice note saying can I call you baby?", "Say *YOU ARE SO BEAUTIFUL, THEY DON'T LIE* to the boys!", "tell a group member randow (I LOVE YOU)", "Act like a chicken in front of your parents", "Pick up a random book and read a page out loud, and send it here", "Open the door to your house and howl like a wolf for 10 seconds", "Take an embarrassing selfie and post it in your profile photo", "Let the group choose a known word and song.  You have to sing that song and send it as a voice note", "Tell me the saddest story you know", "make a dancing video (give me your little thing) and put it in status for 5 minutes", "Show the last five people to whom you who sent text messages and what the messages said", "put his full name in the status for 5 hours", "make a short dance video without any filter with just music and put it in your status for 5 hours", " Call your best friend, bitch", "put your unfiltered photo on your status for 10 minutes", "say I love LoliBot in voice note 😂", "Message your ex and tell him I still like you" , "Call Crush/girlfriend now and take a screenshot here", "Go to the personal chat of one of the group members and say (fucking) 😂", "say YOU ARE BEAUTIFUL/HANDsome to one of the people who is at the top of your favorites list or the first person in your chat list", "put the photo of your lover in the status with the title: He has a short dick 😂", "name change to I AM GAY during 5 hours", "chat with any contact on whatsapp and say I will be your boyfriend/girlfriend for 5 hours", "send a voice note saying I am in love with you, do you want to be my girlfriend/boyfriend or not?  to any random person in the group (if you are a girl, choose a boy, if a boy choose a girl", "Slap your butt as soon as send the sound of a slap through the voice note 🤣", "indicate your type of girlfriend/girlfriend and send the photo here with the title, the ugliest girl/boy in the world", "shout bravooooooooo and send here via voice note", "take your face and send it here", "Send your photo with a caption, I'm a lesbian", "scream bastard in front of your mom/dad", "change the name to I'm an idiot for 3 hours", "say love to the owner of the elrebelde bot by audio 😆", "send the photo from your girlfriend/girlfriend here", "make any tiktok dance challenge video and put it on status, you can delete it after 5 hours", "break up with your best friend for 5 hours without telling him it's a challenge", "tell one of your friends that you love him/her and that you want to marry him/her, without telling him/her that it is a challenge", "Type I feel horny and set it to status, you can delete it only after 5 hours", "type I am a lesbian and set it to status, you can delete it only after 5 hours", "put your father's name in the status for 5 hours", "send abusive words in any group except this group, and send a screenshot proof here"]
     
global.piropo = ['I would like to be paper so I could wrap that chocolate.', 'You are like wifi without a password, everyone is looking for you', 'Who would be a bus to walk through the curves of your heart.', 'I want to fly without wings and get out of this universe, enter yours and love you in silence.', 'I would like to be butter to melt in your arepa.', 'If beauty were a sin you would already be in hell.', 'I would like to be a cat to spend 7 lives.','By your side.', 'Stealing is wrong but a kiss from your mouth would steal it from me.', 'How beautiful the sky is when its clear but love is more beautiful when I have you by my side.', 'Pretty, Walk in the shade, the sun melts the chocolates. Whats your name when I ask Santa Claus for a gift?', 'There are many stars in the sky, but the brightest one is on Earth and its you.','Has the sun just risen or is it the smile youre giving me? today?', 'Its not the rum or the beer, its you who has gone to my head', 'If we talk about mathematics you are the sum of all my desires.', 'You look like Google because you have everything Im looking for.', 'My favorite coffee is the one in your eyes.', 'I want to be Photoshop to touch up your whole body.', 'I wish you were cereal, to spoon in the morning.', 'Whoever was hungry, to give you three times a day.'];
     
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})