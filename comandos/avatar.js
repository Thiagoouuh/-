const Config = require('../config.js')
const Discord = require('discord.js');

function Mensaje(client, message, args) {
	const { member, mentions } = message
	const target = mentions.users.first()
  if(!target) return message.channel.send('Porfavor, taggea un usuario.')
  const embed = new Discord.MessageEmbed()
   .setTitle('**Imagen de Perfil**')
   .setColor(0x0083FF)
   .setImage(target.avatarURL({ format: 'webp', dynamic: true, size: 1024 }))
   .setFooter('𝕭𝖔𝖙 𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊®️ ', client.user.avatarURL());
  message.channel.send(embed);
}



module.exports = (client, message, args) => {
	Mensaje(client, message, args)
}