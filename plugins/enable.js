require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, isBotAdmins, isGroupAdmins, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'welcome' || command == 'bienvenida') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
m.reply(`*✅ ${command}Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'antilink' || command == 'antienlace') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(`*Attention to all active members of this group 📣*\n\n*The antilink is active*\n\n*And only the admins of this group will be able to pass the link*\n\nIf any participant who is not an admin sends a link from another group will be banned from this group immediately`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'antifake' || command == 'antiFake') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
m.reply(`*Attention to all active members of this group 📣*\n\n*The ${command} is active*\n\n⚠️ *Those in the group who are not allowed to enter fake numbers (virtuals) will be automatically expelled from the Group...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'antiarabe' || command == 'antiArabe') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
m.reply(`*Attention to all active members of this group 📣*\n\n*The ${command} is active*\n\n⚠️ *Which group is not allowed to enter Arabic numbers (+212, +967, +971 , etc), they will be automatically expelled from the Group...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'autodetect' || command == 'detect') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'audios') {
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].audios = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].audios = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'autosticker' || command == 'stickers') {
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autosticker = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autosticker = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'modocaliente' || command == 'antinsfw') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'modoadmin' || command == 'soloadmin' || command == 'modoadmins') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Activated Successfully:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`*✅ ${command} was successfully activated*\n\nThe Bot will only respond to the group admins.`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`*🟢 ${command} is disabled!*\n\nNow the bot works for all group participants 🥳`)}}

if (command == 'antiprivado' || command == 'antipv') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiprivado = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiprivado = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'anticall' || command == 'antillamada') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].anticall = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].anticall = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'modojadibot' || command == 'jadibot') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'autoread' || command == 'autovisto') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.settings[conn.user.jid].autoread = false
//conn.autoread = false
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.settings[conn.user.jid].autoread = true
//conn.autoread = true
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'antispam') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antispam = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antispam = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'chatbot' || command == 'simsimi') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].simi = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].simi = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}

if (command == 'autolevelup' || command == 'autonivel') {
if (!m.isGroup) return m.reply(info.group)
if (!text) return m.reply(`*Use this example:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`*✅ ${command} Activated Successfully*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`*🟢 ${command} Deactivated Successfully!*`)}}}

module.exports = { enable }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})