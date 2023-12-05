require('../main.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const {googleImage} = require('@bochilteam/scraper') 
const Jimp = require('jimp')
const FormData = require("form-data") 
const os = require('os')

async function buscadores(m, command, conn, text, from, fkontak, prefix, args, q, quoted, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'yts' || command == 'ytsearch') {
if (!text) return m.reply(`*Example:*\n${prefix + command} anime`)
if (global.db.data.users[m.sender].level < 2) return m.reply(`[ ❇️ ] You need Level 2 to gain Use This Command checks YOUR current Level with The Command .level`) 
const yts = require("youtube-yts");
const search = await yts(text);
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = '💫 results of ' + text + '\n\n';
let no = 1;
let themeemoji = "🔶"
for (let i of search.all) {
  teks += `${themeemoji} OPTION : ${no++}\n${themeemoji} TYPE: ${i.type}\n${themeemoji} VIDEO ID : ${i.videoId}\n${themeemoji} TITLE: ${i.title}\n${themeemoji} VIEWS : ${i.views}\n${themeemoji} DURATION : ${i.timestamp}\n${themeemoji} UPLOADED: ${i.ago}\n${themeemoji} URL: ${i.url}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('💫') 
}

if (command == 'acortar') {
if (global.db.data.users[m.sender].level < 2) return m.reply(`[ ❇️ ] you need Level 2 to gain Use This Command checks YOUR current Level with The Command .level`) 
 if (!text) return m.reply(`*Enter a link to shorten!*`)
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`*⚠️ ERROR*`)
let done = `*❇️ SHORT LINK*\n\n*➵ link: ${text}*\n➵ *Shortened Link: ${shortUrl1}*`
m.reply(done)
}

if (command == 'google') {
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} gatito`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `💫 𝘙𝘌𝘚𝘜𝘓𝘛: ${text}\n\n`
for (let g of res) {
teks += `🔶 *Title* : ${g.title}\n`
teks += `🔶 *Description* : ${g.snippet}\n`
teks += `🔶 *Link* : ${g.link}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`
} 
m.reply(teks)})
}

if (command == 'imagen') {
const {googleImage} = require('@bochilteam/scraper') 
if (!text) return m.reply(`*What is searched?*\n*Exemple:*\n${prefix + command} gatito`)
try {  
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛:* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈:* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)
}}}

if (command == 'traducir' || command == 'translate') {
if (!args || !args[0]) return m.reply(`*Exemple:*\n${prefix + command} en hello`)
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'en';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply('*🔶 Translation:* ' + result2)}

if (command == 'tts') {
if (!text) return m.reply("*AND THE TEXT?*")
await conn.sendPresenceUpdate('recording', m.chat)
let texttosay = text
? text
: m.quoted && m.quoted.text
? m.quoted.text
: m.text;
const SpeakEngine = require("google-tts-api"); 
const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('🗣️')}

if (command == 'chatgpt' || command == 'ia') {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply('*ENTER THE TEXT OF THOSE YOU WANT TO SEARCH?*') 
await conn.sendPresenceUpdate('composing', m.chat)
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
db.data.users[m.sender].limit -= 1
}

if (command == 'dalle' || command == 'ia2' || command == 'aimg' || command == 'imagine' || command == 'dall-e') {
if (!text) return m.reply(`*⚠️ ENTER TEXT TO CREATE AN IMAGE AND USE THE DALL-E FUNCTION*\n\n*• EXEMPLE:*\n*${prefix + command} gatitos llorando`) 
m.reply('*WAIT A MOMENT...*') 
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {  
console.log('[ ⚠️ ] Error with api 1, we try with the other api');  
try {
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
console.log('[ ⚠️ ] API error 2 is also down.');
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
 const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
console.log('[ ⚠️ ] Error, API 3 is also down 😢');
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(`*${info.error} *Error, no results were obtained (Api down)*`) 
console.log(e);}}}}}

if (command == 'ss' || command == 'ssweb') {
const scp1 = require('../libs/scraper') 
if (!text) return m.reply(`*Exemple:* ${prefix+command} link`)
conn.fakeReply(m.chat, `⏳ *Wait a moment....*`, '0@s.whatsapp.net', 'Dont spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: info.result}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'wallpaper') {
if (global.db.data.users[m.sender].level < 3) return m.reply(`[ ❇️ ] you need Level 3 to gain Use This Command checks YOUR current Level with The Command .level`) 
if (!text) return m.reply(`*[ ⚠️ ] Exemple: ${prefix + command} anime*`) 
let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
let _img = _res[Math.floor(Math.random() * _res.length)]
conn.sendMessage(m.chat, { image: { url: _img }, caption: `_*ＲＥＳＵＬＴ: ${text}*_`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'hd') {
const FormData = require("form-data") 
const Jimp =  require("jimp") 
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) return m.reply(`*[ ⚠️ ] send/reply to an image with the command : ${prefix + command}*`) 
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`*[ ⚠️ ] The file format (${mime}) is not supported, send/reply to a photo*`) 
m.reply('⏳ *Processing the image, Please wait a moment...*') 
try {
let img = await q.download?.();
let pr = await remini(img, "enhance");
conn.sendMessage(m.chat, {image: pr, caption: `*Here is the HD image*\n\nIf the image does not appear, the HD responds to the image with the command again`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(`${info.error}\n\n*There was an error (API CRASH🤡)*\n\n${e}`) 
console.log(e) 
}}}
 
module.exports = {buscadores}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

async function remini(imageData, operation) {
return new Promise(async (resolve, reject) => {
const availableOperations = ["enhance", "recolor", "dehaze"];
if (availableOperations.includes(operation)) {
operation = operation;
} else {
operation = availableOperations[0];
}
const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
const formData = new FormData();
formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
function (err, res) {
if (err) reject(err);
const chunks = [];
res.on("data", function (chunk) {chunks.push(chunk)});
res.on("end", function () {resolve(Buffer.concat(chunks))});
res.on("error", function (err) {
reject(err);
})},)})}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})