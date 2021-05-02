const Config = require('../config.js')
const Discord = require('discord.js');

function Mensaje(client, message, args) {
  const embed = new Discord.MessageEmbed()
   .setTitle('**𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊**')
   .setColor(0x0083FF)
   //.setDescription('**[#1] | `ID:`** `Server Pfa`   `Contraseña:` `Server Pfa`')
   .addField('**Invitación**', 'https://discord.gg/E22bkUvtwx')
   //.addField('Nombre del servidor', message.guild.name, true)
   //.addField('Integrantes', message.guild.memberCount, true)
   .setAuthor(message.member.displayName, message.author.avatarURL())
   .setThumbnail('https://cdn.discordapp.com/attachments/833048047168258059/838553115065974834/unknown.png')
   .setFooter('𝕭𝖔𝖙 𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊®️ ', client.user.avatarURL());
  message.channel.send(embed);
}

module.exports = (client, message, args) => {
	Mensaje(client, message, args)
}