const Config = require('../config.js')
const Discord = require('discord.js');

function Mensaje(client, message, args) {
  const embed = new Discord.MessageEmbed()
   .setColor(0x0083FF)
   .setDescription('El 𝕭𝖔𝖙 𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊 esta diseñado por FacuTino, Thiagoo y ValenPreus, la funcion del bot es ordenar los comandos y ayudar a la faccion.')
   .addField('Comandos', 'Lista de comandos: `!invitacion` `!avatar (Un usuario)` `!kick (Un usuario)` `!ban (Un usuario)`')
   //.addField('Soporte', 'Hace click aca y pone el problema que tengas en el chat asi con nuestro equipo de soporte lo podemos fixear, si tenes alguna sugerencia Hace click aca.')
   //.addField('Nombre del servidor', message.guild.name, true)
   //.addField('Integrantes', message.guild.memberCount, true)
   .setAuthor(message.member.displayName, message.author.avatarURL())
   //.setThumbnail('https://cdn.discordapp.com/attachments/833048047168258059/838553115065974834/unknown.png')
   //.setImage('https://cdn.discordapp.com/attachments/833048047168258059/838547365350211595/680xq9.gif')
   //.setFooter('𝕭𝖔𝖙 𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊®️ ', client.user.avatarURL());
  message.channel.send(embed);
}

module.exports = (client, message, args) => {
	Mensaje(client, message, args)
}