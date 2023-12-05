const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'menu' || command == 'menucompleto') {
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('Asia/Karachi').format('DD/MM/YYYY')
const time = moment.tz('Asia/Karachi').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
m.react('🙌') 
let menu = `╔══════ ≪ •❈• ≫ ══════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ Hello @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ ᴘʀᴇғɪx: [ ${prefix} ]
║✾ ᴅᴀᴛᴇ: ${date}
║✾ ᴛɪᴍᴇ: ${time}
║✾ ᴜsᴇʀ : ${Object.keys(global.db.data.users).length}
║✾ ᴀᴄᴛɪᴠᴀᴛᴇ : ${runtime(process.uptime())}
║✾ ᴍᴏᴅ : ${conn.public ? 'public' : 'private'}
║✾ ${conn.user.id == global.numBot2 ? 'ʙᴏᴛ ᴏғᴄ' : `Asif king: @${global.numBot.split`@`[0]}`}
║ 
║✾ ʟɪᴍɪᴛ : ${user.limit}
║✾ ʟᴇᴠɪʟ : ${user.level}
║✾ ʀᴏʟᴇ : ${user.role}
║✾ ᴇxᴘ : ${user.exp}
║✾ ᴄᴏɪɴs : ${user.money}
║ 
║✾ ʀᴇɢɪsᴛᴇʀ : ${rtotalreg} de ${totalreg}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚══════ ≪ •❈• ≫ ══════╝

===============================
\`\`\`🎅 ＬＩＳＴ ＯＦ ＣＯＭＡＮＤ 🎅\`\`\`
\`\`\`ꜱɪᴍᴘᴇʟ ʙᴏᴛ ᴡɪᴛʜ ꜰᴇᴡ ᴄᴏᴍᴍᴀɴᴅꜱ\`\`\`
===============================

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}reg 
├❥ᰰຼ _(Register to use the bot)_
├❥ᰰຼ ❏ ${prefix}unreg
├❥ᰰຼ _(To delete your record)_
├❥ᰰຼ ❏ ${prefix}myns
├❥ᰰຼ _(To see your serial number)_
├❥ᰰຼ ❏ ${prefix}estado 
├❥ᰰຼ _(Check the status of the bot)_
├❥ᰰຼ ❏ ${prefix}menu2
├❥ᰰຼ ❏ ${prefix}nuevo 
├❥ᰰຼ _(To inform you about new command)_
├❥ᰰຼ ❏ ${prefix}reglas
├❥ᰰຼ _(Read the rules)_
├❥ᰰຼ ❏ ${prefix}audios
├❥ᰰຼ ❏ ${prefix}ping 
├❥ _(Bot speed)_
├❥ᰰຼ ❏ ${prefix}grupos 
├❥ _(Join the official groups and have fun with the bot 😸)_
├❥ᰰຼ ❏ ${prefix}join _(request a bot for your group)_
├❥ᰰຼ ❏ ${prefix}owner
├❥ᰰຼ ❏ ${prefix}creator
├❥ᰰຼ _(I send you the contacts of my creator)_
├❥ᰰຼ ❏ ${prefix}instalarbot (Installation tutorial)_
├❥ᰰຼ ❏ ${prefix}report 
├❥ᰰຼ _(reports command with failure/errors/spelling, etc.)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ  *(This serbot is in beta mode)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}serbot
├❥ᰰຼ ❏ ${prefix}qr
├❥ _(Generate a qr to become a sub bot)_
├❥ᰰຼ ❏ ${prefix}serbot --code
├❥ᰰຼ ❏ ${prefix}jadibot --code
├❥ _(New way to make yourself a subbot, beta!)_
├❥ᰰຼ ❏ ${prefix}bots
├❥ _(Check if sub bot is connected)_
├❥ᰰຼ ❏ ${prefix}stop
├❥ᰰຼ ❏ ${prefix}deljadibot
├❥ᰰຼ _(Command only for sub bots)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＯＷＮＬＯＡＤ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}play 
├❥ᰰຼ _(Title/name of the song to download the audio)_
├❥ᰰຼ ❏ ${prefix}play2
├❥ᰰຼ _(Title/name of the song to download the video)_
├❥ᰰຼ ❏ ${prefix}playdoc
├❥ᰰຼ ❏ ${prefix}play3
├❥ᰰຼ _(Download audio in document)_
├❥ᰰຼ ❏ ${prefix}play4
├❥ᰰຼ _(Download video in document)_
├❥ᰰຼ ❏ ${prefix}yts
├❥ᰰຼ _(Look for the links to download the video)_
├❥ᰰຼ ❏ ${prefix}ytmp3
├❥ᰰຼ _(Enter the link to download the audio)_
├❥ᰰຼ ❏ ${prefix}ytmp4
├❥ᰰຼ _(Enter the link to download the video)_
├❥ᰰຼ ❏ ${prefix}spotify
├❥ᰰຼ ❏ ${prefix}music
├❥ᰰຼ _(Download music from Spotify)_
├❥ᰰຼ ❏ ${prefix}gitclone
├❥ᰰຼ _(Enter the GitHub link to download the repository)_
├❥ᰰຼ ❏ ${prefix}tiktok
├❥ᰰຼ _(Enter the tiktok link to download the video)_
├❥ᰰຼ ❏ ${prefix}tiktokimg
├❥ᰰຼ ❏ ${prefix}ttimg
├❥ᰰຼ ❏ ${prefix}igstalk
├❥ᰰຼ _(Enter the name of an Instagram user to see their profile)_
├❥ᰰຼ ❏ ${prefix}facebook
├❥ᰰຼ ❏ ${prefix}fb
├❥ᰰຼ _(Download Facebook videos)_
├❥ᰰຼ ❏ ${prefix}instagram
├❥ᰰຼ ❏ ${prefix}ig
├❥ᰰຼ _(Download Instagram videos)_
├❥ᰰຼ ❏ ${prefix}mediafire
├❥ᰰຼ (download mediafire files)_
├❥ᰰຼ ❏ ${prefix}gdrive
├❥ᰰຼ _(Download files from gdrive)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}welcome _(on/off)_
├❥ᰰຼ ❏ ${prefix}antilink _(on/off)_
├❥ᰰຼ ❏ ${prefix}antienlace _(on/off)_
├❥ᰰຼ ❏ ${prefix}antifake _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiarabe _(on/off)_
├❥ᰰຼ ❏ ${prefix}autosticker _(on/off)_
├❥ᰰຼ ❏ ${prefix}detect _(on/off)_
├❥ᰰຼ ❏ ${prefix}autodetect _(on/off)_
├❥ᰰຼ ❏ ${prefix}antinsfw _(on/off)_
├❥ᰰຼ ❏ ${prefix}modocaliente _(on/off)_
├❥ᰰຼ ❏ ${prefix}autosticker _(on/off)_
├❥ᰰຼ ❏ ${prefix}modoadmin _(on/off)_
├❥ᰰຼ ❏ ${prefix}audios _(on/off)_
├❥ᰰຼ ❏ ${prefix}chatbot _(on/off)_
├❥ᰰຼ ❏ ${prefix}autolevelup _(on/off)_
├❥ᰰຼ ❏ ${prefix}autonivel _(on/off)_
├❥ᰰຼ ❏ ${prefix}kick _(@tag)_
├❥ᰰຼ ❏ ${prefix}add _(@tag)_
├❥ᰰຼ ❏ ${prefix}invita _(@tag)_
├❥ᰰຼ ❏ ${prefix}promote _(@tag)_
├❥ᰰຼ ❏ ${prefix}demote _(@tag)_
├❥ᰰຼ ❏ ${prefix}infogrupo
├❥ᰰຼ ❏ ${prefix}groupinfo
├❥ᰰຼ ❏ ${prefix}admins _(call the admins)_
├❥ᰰຼ ❏ ${prefix}group close/open
├❥ᰰຼ ❏ ${prefix}warn _(@tag)_
├❥ᰰຼ ❏ ${prefix}warning _(@tag)_
├❥ᰰຼ ❏ ${prefix}unwarn _(@tag)_
├❥ᰰຼ ❏ ${prefix}removewarning _(@tag)_
├❥ᰰຼ ❏ ${prefix}setppname _(change the group name)_
├❥ᰰຼ ❏ ${prefix}setdesc _(change the Group description)_
├❥ᰰຼ ❏ ${prefix}setppgroup _(change the Group photo)_
├❥ᰰຼ ❏ ${prefix}anularlink
├❥ᰰຼ ❏ ${prefix}resetlink _(resets the group link)_
├❥ᰰຼ ❏ ${prefix}hidetag _(tags everyone in a message)_
├❥ᰰຼ ❏ ${prefix}tagall
├❥ᰰຼ ❏ ${prefix}invoke _(tags everyone in a list)_
├❥ᰰຼ ❏ ${prefix}listonline _(tags users who are active|online)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}google 
├❥ᰰຼ _(Enter the name of what you want to search)_
├❥ᰰຼ ❏ ${prefix}ia
├❥ᰰຼ _(Enter the text of what you want to search with the (AI)_
├❥ᰰຼ ❏ ${prefix}image
├❥ᰰຼ _Enter the text of the image you want to search_
├❥ᰰຼ ❏ ${prefix}translate
├❥ᰰຼ _(Translate some text)_
├❥ᰰຼ ❏ ${prefix}wallpaper
├❥ᰰຼ _(Search wallpaper image)_
├❥ᰰຼ ❏ ${prefix}ss
├❥ᰰຼ _(Enter a link to send a screenshot)_
├❥ᰰຼ ❏ ${prefix}dall-e
├❥ᰰຼ ❏ ${prefix}ia2
├❥ᰰຼ _(Create images with (AI)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}simi 
├❥ᰰຼ _(Talk to the bot)_
├❥ᰰຼ ❏ ${prefix}ppt
├❥ᰰຼ _(You ​​play rock, paper, scissors)_
├❥ᰰຼ ❏ ${prefix}gay @tag
├❥ᰰຼ ❏ ${prefix}couple @tag
├❥ᰰຼ ❏ ${prefix}love @tag
├❥ᰰຼ ❏ ${prefix}follar @tag
├❥ᰰຼ ❏ ${prefix}topgays
├❥ᰰຼ ❏ ${prefix}topotakus
├❥ᰰຼ ❏ ${prefix}top
├❥ᰰຼ ❏ ${prefix}ask
├❥ᰰຼ ❏ ${prefix}verdad
├❥ᰰຼ ❏ ${prefix}reto
├❥ᰰຼ ❏ ${prefix}doxear
├❥ᰰຼ ❏ ${prefix}personalidad
├❥ᰰຼ ❏ ${prefix}racista
├❥ᰰຼ ❏ ${prefix}slot
├❥ᰰຼ ❏ ${prefix}dado
├❥ᰰຼ ❏ ${prefix}piropo
├❥ᰰຼ ❏ ${prefix}ship
├❥ᰰຼ ❏ ${prefix}formartrio
├❥ᰰຼ ❏ ${prefix}formapareja5
├❥ᰰຼ ❏ ${prefix}fake
├❥ᰰຼ _(Enter the text + tag to screw someone with fake chat😹)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 EFECTOS DE AUDIOS*️⃟ᬽ፝֟━*
├❥ᰰຼ *(𝚛𝚎𝚜𝚙𝚘𝚗𝚍 𝚝𝚘 𝚊𝚞𝚍𝚒𝚘)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}bass
├❥ᰰຼ ❏ ${prefix}blown
├❥ᰰຼ ❏ ${prefix}deep
├❥ᰰຼ ❏ ${prefix}earrape
├❥ᰰຼ ❏ ${prefix}fast
├❥ᰰຼ ❏ ${prefix}fat
├❥ᰰຼ ❏ ${prefix}nightcore
├❥ᰰຼ ❏ ${prefix}reverse
├❥ᰰຼ ❏ ${prefix}robot
├❥ᰰຼ ❏ ${prefix}slow
├❥ᰰຼ ❏ ${prefix}smooth
├❥ᰰຼ ❏ ${prefix}squirrel
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧CONVERTING*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}tourl
├❥ᰰຼ ❏ ${prefix}tts
├❥ᰰຼ ❏ ${prefix}tomp3
├❥ᰰຼ ❏ ${prefix}toimg
├❥ᰰຼ ❏ ${prefix}toaudio
├❥ᰰຼ ❏ ${prefix}toanime
├❥ᰰຼ ❏ ${prefix}hd
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵COMANDO +18*️⃟ᬽ፝֟━*
├❥ᰰຼ  *Activate with (antiNsfw on)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}pussy
├❥ᰰຼ ❏ ${prefix}nsfwloli
├❥ᰰຼ ❏ ${prefix}hentai
├❥ᰰຼ ❏ ${prefix}hentai2
├❥ᰰຼ ❏ ${prefix}pack
├❥ᰰຼ ❏ ${prefix}pack2
├❥ᰰຼ ❏ ${prefix}pack3
├❥ᰰຼ ❏ ${prefix}videoxxx
├❥ᰰຼ ❏ ${prefix}videoxxxlesbi
├❥ᰰຼ ❏ ${prefix}pornolesbianavid
├❥ᰰຼ ❏ ${prefix}videolesbixxx
├❥ᰰຼ ❏ ${prefix}porno
├❥ᰰຼ ❏ ${prefix}lewd'
├❥ᰰຼ ❏ ${prefix}feed'
├❥ᰰຼ ❏ ${prefix}gasm
├❥ᰰຼ ❏ ${prefix}anal	    	
├❥ᰰຼ ❏ ${prefix}holo	    	
├❥ᰰຼ ❏ ${prefix}tits	    	
├❥ᰰຼ ❏ ${prefix}kuni
├❥ᰰຼ ❏ ${prefix}kiss
├❥ᰰຼ ❏ ${prefix}erok
├❥ᰰຼ ❏ ${prefix}smug
├❥ᰰຼ ❏ ${prefix}solog
├❥ᰰຼ ❏ ${prefix}feetg
├❥ᰰຼ ❏ ${prefix}lewdk    
├❥ᰰຼ ❏ ${prefix}femdom
├❥ᰰຼ ❏ ${prefix}cuddle
├❥ᰰຼ ❏ ${prefix}eroyuri
├❥ᰰຼ ❏ ${prefix}cum	    
├❥ᰰຼ ❏ ${prefix}blowjob
├❥ᰰຼ ❏ ${prefix}holoero
├❥ᰰຼ ❏ ${prefix}erokemo
├❥ᰰຼ ❏ ${prefix}fox_girl
├❥ᰰຼ ❏ ${prefix}futanari
├❥ᰰຼ ❏ ${prefix}wallpaper	   
├❥ᰰຼ *Note: using it lowers your responsibility*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	
	
╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐RANDOM*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}memes
├❥ᰰຼ ❏ ${prefix}horny
├❥ᰰຼ ❏ ${prefix}simp
├❥ᰰຼ ❏ ${prefix}lolice
├❥ᰰຼ ❏ ${prefix}comentar
├❥ᰰຼ ❏ ${prefix}comment
├❥ᰰຼ ❏ ${prefix}loli
├❥ᰰຼ ❏ ${prefix}lolivid
├❥ᰰຼ ❏ ${prefix}neko
├❥ᰰຼ ❏ ${prefix}waifu	
├❥ᰰຼ ❏ ${prefix}blackpink
├❥ᰰຼ ❏ ${prefix}akira
├❥ᰰຼ ❏ ${prefix}akiyama
├❥ᰰຼ ❏ ${prefix}anna
├❥ᰰຼ ❏ ${prefix}asuna
├❥ᰰຼ ❏ ${prefix}ayuzawa
├❥ᰰຼ ❏ ${prefix}boruto
├❥ᰰຼ ❏ ${prefix}chiho
├❥ᰰຼ ❏ ${prefix}chitoge
├❥ᰰຼ ❏ ${prefix}deidara
├❥ᰰຼ ❏ ${prefix}erza
├❥ᰰຼ ❏ ${prefix}elaina
├❥ᰰຼ ❏ ${prefix}eba
├❥ᰰຼ ❏ ${prefix}emilia
├❥ᰰຼ ❏ ${prefix}hestia
├❥ᰰຼ ❏ ${prefix}hinata
├❥ᰰຼ ❏ ${prefix}inori
├❥ᰰຼ ❏ ${prefix}isuzu
├❥ᰰຼ ❏ ${prefix}itachi
├❥ᰰຼ ❏ ${prefix}itori
├❥ᰰຼ ❏ ${prefix}kaga
├❥ᰰຼ ❏ ${prefix}kagura
├❥ᰰຼ ❏ ${prefix}kaori':
├❥ᰰຼ ❏ ${prefix}keneki
├❥ᰰຼ ❏ ${prefix}kotori
├❥ᰰຼ ❏ ${prefix}kurumi
├❥ᰰຼ ❏ ${prefix}madara
├❥ᰰຼ ❏ ${prefix}mikasa
├❥ᰰຼ ❏ ${prefix}miku
├❥ᰰຼ ❏ ${prefix}minato
├❥ᰰຼ ❏ ${prefix}naruto
├❥ᰰຼ ❏ ${prefix}nezuko
├❥ᰰຼ ❏ ${prefix}sagiri
├❥ᰰຼ ❏ ${prefix}sasuke
├❥ᰰຼ ❏ ${prefix}sakura
├❥ᰰຼ ❏ ${prefix}'cosplay
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*
             
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＹ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}minar _(To Mine Exp)_
├❥ᰰຼ ❏ ${prefix}robar
├❥ᰰຼ ❏ ${prefix}rob _(Robe exp from some users_
├❥ᰰຼ ❏ ${prefix}trabajar
├❥ᰰຼ ❏ ${prefix}work _(Work and earn exp)_
├❥ᰰຼ ❏ ${prefix}buy _(Buy more diamonds (limit)_
├❥ᰰຼ ❏ ${prefix}bal
├❥ᰰຼ ❏ ${prefix}balace _(To know how much diamond/exp you have)_
├❥ᰰຼ ❏ ${prefix}claim
├❥ᰰຼ _(Collect your reward)_
├❥ᰰຼ ❏ ${prefix}lb
├❥ᰰຼ ❏ ${prefix}leaderboard
├❥ᰰຼ ❏ ${prefix}cofre
├❥ᰰຼ ❏ ${prefix}perfil
├❥ᰰຼ ❏ ${prefix}nivel
├❥ᰰຼ ❏ ${prefix}levelup
├❥ᰰຼ ❏ ${prefix}afk 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}s
├❥ᰰຼ ❏ ${prefix}sticker 
├❥ᰰຼ ❏ ${prefix}wm
├❥ᰰຼ ❏ ${prefix}attp
├❥ᰰຼ ❏ ${prefix}emojimix
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(Exclusive command for bot owner)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}anticall _(on/off)_
├❥ᰰຼ ❏ ${prefix}antillamada _(on/off)_
├❥ᰰຼ ❏ ${prefix}antipv _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiprivado _(on/off)_
├❥ᰰຼ ❏ ${prefix}autoread _(on/off)_
├❥ᰰຼ ❏ ${prefix}modojadibot _(on/off)_
├❥ᰰຼ ❏ ${prefix}añadirdiamantes
├❥ᰰຼ ❏ ${prefix}addlimit
├❥ᰰຼ ❏ ${prefix}dardiamantes _(@tag)_
├❥ᰰຼ ❏ ${prefix}añadirxp
├❥ᰰຼ ❏ ${prefix}addxp _(@tag)_
├❥ᰰຼ ❏ ${prefix}banuser _(Ban any user for misuse of the bot)_
├❥ᰰຼ ❏ ${prefix}unbanuser _(Unban the user)_
├❥ᰰຼ ❏ ${prefix}autoadmin
├❥ᰰຼ ❏ ${prefix}bc (Broadcast to all chats)
├❥ᰰຼ ❏ ${prefix}bcgc (Broadcast only to groups)
├❥ᰰຼ ❏ ${prefix}setpp (Change the bot photo)
├❥ᰰຼ ❏ ${prefix}public (Public mode) 
├❥ᰰຼ ❏ ${prefix}privado (Private mode) 
├❥ᰰຼ ❏ ${prefix}getcase
├❥ᰰຼ ❏ ${prefix}addcase
├❥ᰰຼ ❏ ${prefix}update
├❥ᰰຼ ❏ ${prefix}restart
├❥ᰰຼ ❏ ${prefix}reiniciar
├❥ᰰຼ ❏ ${prefix}unbanned
├❥ᰰຼ ❏ ${prefix}sacasupport
├❥ᰰຼ ❏ $
├❥ᰰຼ ❏ >
├❥ᰰຼ ❏ => 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}

if (command == 'menu2' || command == 'audio') {

let menu2 = `*Specific words for the bot to interact with you*

a
Feliz cumpleaños
Pasa pack
Uwu
Siuuu
Vete a la verga
Pasen porno
Hora del sexito
Pongan cuties
Fiesta del admin
Admin party
Viernes
GOOOOD
Alto temazo
Todo bien
Buenos dias
Bot gay
Gracias
Hola
Fua
Corte
Gaspi buenos dias 
Gaspi me saludas
Gaspi y las minitas
Gaspi todo bien
Me quiero suicidar
Gaspi ya no aguanto
Contate algo bot
Sexo
Momento epico
El bot del orto no funciona
Epicardo
Insta de la minita
Una mierda de bot
Ultimo momento
Nefasto
Paraguayo
Bot de mierda
Venezolano
Gaspi corte
Ya me voy a dormir
Calefon
Apurate bot
Un chino
No funciona
Boliviano
Enano
Quien es tu sempai botsito
Me gimes 7u7
Te amo botsito uwu
Onichan
La toca 7w7
autodestruction

_*ᴼʲᶦᵗᵒ ᵉˢᶜʳᶦᵇᵉ ᵗᵃˡ ʸ ᶜᵒᵐᵒ ᵉˢᵗᵃ ᵉⁿ ᵉˡ ᵐᵉⁿˢᵃʲᵉ*_
*ᵠᵘᶦᵉʳᵉ ᵃᵍʳᵉᵍᵃ ᵃˡᵍᵘⁿ ᵃᵘᵈᶦᵒ ⁿᵘᵉᵛᵒ ᵉˢᶜʳᶦᵇᶦʳˡᵉ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ ᵘʷᵘ*`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'new' || command == 'extreno') {
conn.sendMessage(m.chat, { text: `🤔 *What's new* 🤗

*🌐 New version:* [ ${vs} ] 

*New command:*

🟢 Upgrade the image to HD. 
• ${prefix}hd

🚀 Download gdrive file
• ${prefix}gdrive (links) 

🚀 Download tiktok images
• ${prefix}tiktokimg
• ${prefix}ttimg

🌐 (Create images with (AI)
• ${prefix}dall-e
• ${prefix}ia2

👾 More games to entertain your group 

• ${prefix}formartrio
• ${prefix}formapareja5
• ${prefix}ship

🥵 More content +18 for you

• ${prefix}tetas
• ${prefix}pechos
• ${prefix}pack2
• ${prefix}videoxxx
• ${prefix}pornolesbianavid

ᴹᵃˢ ᶜᵒᵐᵃⁿᵈᵒ ᵉˡ ᶠᵘᵗᵘʳᵃ ᵛᵉʳˢᶦᵒⁿᵉˢ ᵠᵘᶦᵉʳᵉ ᵠᵘᵉ ᵃᵍʳᵉᵍᵘᵉ ᵃˡᵍᵘⁿ ᶜᵒᵐᵃⁿᵈᵒ ᵉˡ ᵉˢᵖᵉᶜᶦᵃˡ ᵉˢᶜʳᶦᵇᶦʳˡᵉ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'rule') {
conn.sendMessage(m.chat, { text: `*🌐 BOT RULES 🌐*

*• Don't spam commands*

 Use the commands every 5 seconds, otherwise the bot may become saturated, or the bot number may go to support due to spam.

 *• Do not send the group link to the bot to join*

 Talk to my creator and he will join your group

 *• Do not call the bot or the creator*

If you do, you will be banned from the bot and blocked`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
