require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getFile, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos} = require('../libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('../libs/youtube') 
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});

async function descarga(m, command, conn, text, command, args, fkontak, from, buffer, getFile, q, includes, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (command == 'play' || command == 'musica') {
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
if (!text) return m.reply(`*What is looking for?  enter the name of the topic*\n\nExample: *${prefix + command}* ozuna`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `         *⌜Song Found ✅⌟*\n\n◉ *Title:* ${yt_play[0].title}\n◉ *Duration:* ${secondString(yt_play[0].duration.seconds)}\n◉ *Published:* ${yt_play[0].ago}\n◉ *Author:* ${yt_play[0].author.name}\n◉ *Views:* ${MilesNumber(yt_play[0].views)}\n\n*• Downloading audio 🔊, Wait a Moment....*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
let mediaa = await ytMp4(yt_play[0].url)
conn.sendMessage(m.chat, { audio: { url: mediaa.result }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})  
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
m.react(done) 
} catch {
try { 
let search = await yts(text)
let anup3k = search.videos[0]
let anu = search.videos[Math.floor(Math.random() * search.videos.length)] 
eek = await getBuffer(anu.thumbnail) 
const playmp3 = require('../libs/ytdl2')
const pl= await playmp3.mp3(anup3k.url)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(pl.path), fileName: `error.mp3`, mimetype: 'audio/mp4' },  {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done) 
await fs.unlinkSync(pl.path)
} catch (e) {
m.react(error) 
console.log(e)}}}

if (command == 'play2' || command == 'video') {
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
if (!text) return m.reply(`*What is looking for?  enter the name of the topic*\n\nExample: *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `         *⌜Video Found ✅⌟*\n\n◉ *Title:* ${yt_play[0].title}\n◉ *Duration:* ${secondString(yt_play[0].duration.seconds)}\n◉ *Published:* ${yt_play[0].ago}\n◉ *Author:* ${yt_play[0].author.name}\n◉ *Views:* ${MilesNumber(yt_play[0].views)}\n\n*• Downloading Video 🎥, Wait a Moment....*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
let mediaa = await ytMp4(yt_play[0].url)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `*Here are your videos 👌*\n*🔰Title:* ${yt_play[0].title}`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done)}

if (command == 'play3' || command == 'playdoc' || command == 'playaudiodoc' || command == 'ytmp3doc') {
const fetch = require('node-fetch') 
const yts = require('yt-search') 
const ytdl = require('ytdl-core') 
const axios = require('axios') 
const {youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
if (!text) return m.reply(`*What is looking for?  enter the name of the topic*\n\nEjemplo: *${prefix + command}* ozuna`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `          *⌜Audio Found ✅⌟*
◉ *Title* : ${yt_play[0].title}
◉ *Published:* ${yt_play[0].ago}
◉ *Duration:* ${secondString(yt_play[0].duration.seconds)}
◉ *Author:* ${yt_play[0].author.name}
◉ *Views:* ${MilesNumber(yt_play[0].views)}
◉ *Link:* ${yt_play[0].url}

*Please wait by sending your mp3 file ⚠*

*Service provided By 𝘕𝘰𝘷𝘢𝘉𝘰𝘵*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(`${info.error}\n\nCould not download your video please try again`) 
console.log(e)}}}}

if (command == 'play4' || command == 'playdoc2' || command == 'playvideodoc' || command == 'ytmp4doc') {
const fetch = require('node-fetch') 
const yts = require('yt-search') 
const ytdl = require('ytdl-core') 
const axios = require('axios') 
const {youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
if (!text) return m.reply(`*What is looking for?  enter the name of the topic*\n\nExample: *${prefix + command}* ozuna`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `          *⌜Video Found ✅⌟*
◉ *Title* : ${yt_play[0].title}
◉ *Published:* ${yt_play[0].ago}
◉ *Duration:* ${secondString(yt_play[0].duration.seconds)}
◉ *Author:* ${yt_play[0].author.name}
◉ *Views:* ${MilesNumber(yt_play[0].views)}
◉ *Link:* ${yt_play[0].url}
 
*Please wait by sending your Mp4 File ⚠*

*Service provided By 𝘕𝘰𝘷𝘢𝘉𝘰𝘵*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝙻𝙴:* ${ttl}\n┆🔸️ *𝚂𝙸𝚉𝙴:* ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝙻𝙴:* ${n}\n┆🔸️ *𝚂𝙸𝚉𝙴:* ${n3}\n╰─────────────────`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(`${info.error}\n\nCould not download your video please try again`) 
console.log(e)}}}}

if (command == 'ytmp3' || command == 'ytaudio') {
const mp = require('../libs/ytdl2')
const vid = await mp.mp4(text)
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return m.reply(`*What is searched?*\n\n*Example:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.react(rwait) 
conn.sendMessage(m.chat, { text: `         *⌜Audio Found ✅⌟*\n\n• *Title:* ${vid.title}\n• *Published:* ${vid.date}\n\n*WAIT SENDING YOUR MP3 FILE ⚠*` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
try {
let mediaa = await ytplayvid(text)
const audio = await mp.mp3(text)
await conn.sendMessage(m.chat, {audio: fs.readFileSync(audio.path), mimetype: 'audio/mp4',
contextInfo: {
externalAdReply: { title:audio.meta.title,
body: botname,
//await getBuffer(pl.meta.image),
thumbnail: getBuffer(audio.meta.image), 
mediaType:2,
mediaUrl:text,
}}}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
await fs.unlinkSync(audio.path)
m.react(done) 
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.react(error) 
m.reply(info.error)}}

if (command == 'ytmp4' || command == 'ytvideo') {
const mp = require('../libs/ytdl2')
const vid = await mp.mp4(text)
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return m.reply(`*What is looking for?*\n\n*Example:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.react(rwait) 
conn.sendMessage(m.chat, { text: `         *⌜Video Found ✅⌟*\n\n• *Title:* ${vid.title}\n\n*WAIT SENDING YOUR MP4 FILE ⚠*` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});    
try {
const ytc = `*❏ Title:* ${vid.title} 
*❏ Duration :* ${vid.duration}
*❏ Uploaded :* ${vid.date}
*❏ Quality :* ${vid.quality}`
await conn.sendMessage(m.chat, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
m.react(done) 
} catch {
m.react(error) 
m.reply(info.error)}}

if (command == 'music' || command == 'spotify') {
if (!text) return m.reply(`*What is wanted??*\n*Enter the name of any spotify song.*`) 
try { 
m.react(rwait) 
m.reply('*🕔 𝘞𝘈𝘐𝘛 𝘔𝘖𝘔𝘌𝘕𝘛....*') 
const res = await fetch(global.API('ApiEmpire', '/api/spotifysearch?text=' + text))
const data = await res.json()
const linkDL = data.spty.resultado[0].link;
const musics = await fetch(global.API('ApiEmpire', '/api/spotifydl?text=' + linkDL))
const music = await conn.getFile(musics.url)
const infos = await fetch(global.API('ApiEmpire', '/api/spotifyinfo?text=' + linkDL))
const info = await infos.json()
const spty = info.spty.resultado
const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
let spotifyi = `◦  *𝘛𝘐𝘛𝘓𝘌:* ${spty.title}\n`
spotifyi += `◦  *𝘈𝘙𝘛𝘐𝘚𝘛:* ${spty.artist}\n`
spotifyi += `◦  *𝘈𝘓𝘉𝘜𝘔:* ${spty.album}\n`          
spotifyi += `◦  *𝘗𝘜𝘉𝘓𝘐𝘚𝘏𝘐𝘋:* ${spty.year}\n\n`   
spotifyi += `*downloading, please wait a moment...*`
await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (error) {
m.react(error) 
console.error(error);
return m.reply(`${info.error}\nCould not download audio (api crashed 🤡)`)}}

if (command == 'gitclone') {
if (!args[0]) return m.reply(`*Where is the github link?*\n\n*Example :*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
m.react('🕔') 
m.reply('*Wait A Moment...*\n\nFile Coming') 
try {
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).catch((err) => m.reply(info.error))
db.data.users[m.sender].limit -= 1
m.reply(info.limit) 
m.react(done) 
} catch {
m.react(error) 
m.reply(info.error)}}

if (command == 'tiktok' || command == 'tt') {
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
conn.fakeReply(m.chat, `⏳ *Wait a moment....*`, '0@s.whatsapp.net', 'Dont Spam')
try {
require('../libs/tiktok').Tiktok(args).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
db.data.users[m.sender].limit -= 1
m.reply(info.limit) 
} catch {
m.reply(info.error)}}

if (command == 'tiktokimg' || command == 'ttimg') {
if (!text) return m.reply(`⚠️ Enter a link from tiktok images*\n\n*Example:* ${prefix + command} https://vm.tiktok.com/ZMjnPvJuF/`) 
let imagesSent
if (imagesSent) return;
imagesSent = true    
try {   
m.reply('*Calm down Im already looking for your Lost...*') 
let tioShadow = await ttimg(text); 
let result = tioShadow?.data;
for (let d of result) {
await conn.sendMessage(m.chat, {image: {url: d}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})};
imagesSent = false
} catch (e) {
imagesSent = false    
return m.reply(`${info.error} *No response from the page (Api down), try again later..*\n\n${e}`)}}

if (command == 'lyrics' || command == 'letra') {
if (!text) return m.reply(`*What is looking for?  enter the title/name of the song*\n*Example:* ${prefix + command} ozuna`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
conn.editMessage(m.chat, '*Wait a moment....*', `*❏ Title:* ${result.title}\n*❏ Author:* ${result.author}\n*❏ Url :* ${result.link}\n\n*❏ Letter:* ${result.lyrics}`, 3, fkontak)
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

if (command == 'mediafire') {
const { mediafireDl } = require('../libs/mediafire.js') 
if (!text) return m.reply(`*Example:*\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`) 
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 1500) return reply('I cant download the file exceeds the 900 MB limit ' + util.format(baby1))
const result4 = `╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE*
┆——————«•»——————
┆🔸️ *Name:* ${baby1[0].nama} 
┆——————«•»——————
┆🔸️ *Size:* ${baby1[0].size} 
┆——————«•»——————
┆🔸️ *Extension:* ${baby1[0].mime}
╰━─━─━─≪💎≫─━─━─━╯\n\n_I download file, wait a moment..._  ` 
m.reply(`${result4}`) 
 conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : m, contextInfo: { externalAdReply:{ 
   title: botname, 
   body:"💫", 
   showAdAttribution: true, 
   mediaType:2, 
   thumbnail: fs.readFileSync(`./media/menu.jpg`) , 
   mediaUrl: md,  
 sourceUrl: md }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
 db.data.users[m.sender].limit -= 2
m.reply('*2 Diamond 💎 Used*')}

if (command == 'facebook' || command == 'fb') {
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
conn.fakeReply(m.chat, `⏳ *Wait a moment....*`, '0@s.whatsapp.net', 'Dont spam')
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendMessage(m.chat, {video: {url: VIDEO}, caption: `*🎥 HERE IS YOUR FACEBOOK VIDEO*`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.reply(info.error)}}

if (command == 'instagram' || command == 'ig') {
if (!text) return m.reply(`*Example:*\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
conn.fakeReply(m.chat, `⏳ *Wait a moment.....*`, '0@s.whatsapp.net', 'Dont spam')
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, {video: {url: videoig}, caption: `🔗 *Url:* ${shortUrl1}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.reply(info.error)}}

if (command == 'igstalk') {
if (!args[0]) return m.reply(`*Enter the username*\n\n*Example:* ${prefix + command} Emilia`)
const fg = require('api-dylux')
try {
let res = await fg.igStalk(args[0])
let te = `╭━─━─━─≪≫─━─━─━╮
│ ≡  *STALKING* 
│——————«•»——————
│🔸 *🔖Name:* ${res.name} 
│🔸 *🔖Username:* ${res.username}
│🔸 *👥Followers:* ${res.followersH}
│🔸 *🫂Following:* ${res.followingH}
│🔸 *📌Bio:* ${res.description}
│🔸 *🏝️Posts:* ${res.postsH}
│——————«•»——————
│🔸 *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
╰━─━─━─≪≫─━─━─━╯`
await conn.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
m.reply(info.error)}}

if (command == 'apk' || command == 'modoapk') {
let { search, download } = require('aptoide-scraper')
if (!text) return m.reply('*[ ⚠️ ] What apk are you looking for??*') 
try {     
let searchA = await search(text); 
let data5 = await download(searchA[0].id); 
let response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ *Aptoide Downloader* ≡\n│——————«•»——————\n│🔸📌 *Name:* ${data5.name}\n│🔸📦 *Package:* ${data5.package}\n│🔸🕒 *Last update:* ${data5.lastup}\n│🔸📥 *Size:* ${data5.size}\n╰━─━─━─≪≫─━─━─━╯` 
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] The file is too large so it will not be sent.*'}, {quoted: m})} 
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
db.data.users[m.sender].limit -= 3
m.reply('*3 Diamond 💎 Used*')
} catch { 
return m.reply(`*[ ⚠️ ] Error, no results were found for your search.*`)}}

if (command == 'gdrive') {
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!args[0]) return m.reply(`*⚠️ ENTER THE LIINK TO DOWNLOAD YOUR DRIVE FILES*\n*Example:* ${prefix + command} https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*`) 
try {
GDriveDl(args[0]).then(async (res) => {
 m.reply('*DOWNLOADED YOUR FILES, WAIT A MOMENT PLEASE...*\n\nThe waiting time may vary depending on the weight of the file. If the weight is 100 MB, your file may not be sent.');
if (!res) throw res;
conn.sendMessage(m.chat, {document: {url: res.downloadUrl, mimetype: res.mimetype, asDocument: true, fileName: `${res}`}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}) 
db.data.users[m.sender].limit -= 3
m.reply('*3 Diamond 💎 Used*')
} catch (e) {
m.reply('*[ ⚠️ ] ᴇʀʀᴏʀ*');
console.log(e)}}}

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

async function GDriveDl(url) {
  let id;
  if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
  id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
  if (!id) throw 'ID Not Found';
  const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: 'post',
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'content-length': 0,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit!';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
}

async function ttimg(link) {
    try {    
        let url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;    
        let response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
        });
        if (imgSrc.length === 0) {
            return { data: '*[ ⚠️ ] No images found in the link provided..*' };
        }
        return { data: imgSrc }; 
    } catch (error) {
        console.lo (error);
        return { data: '*[ ⚠️ ] No response from the page, try again later..*'};
    };
};

module.exports = { descarga }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})