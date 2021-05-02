const Config = require('../../config.js')
const Discord = require('discord.js');

function Mensaje(client, message, args) {
	const { member, mentions } = message
	const target = mentions.users.first()
	const tag = `<@${member.id}>`
	const embed1 = new Discord.MessageEmbed()
		.setTitle('Error.')
		.setDescription(`${tag} Menciona al usuario que quieres banear`)
	const noperms = new Discord.MessageEmbed()
		.setTitle('Error.')
		.setDescription(`${tag} No tenes permiso para ejecutar este comandos.`)
	
   if (
     member.hasPermission('ADMINISTRATOR') || 
     member.hasPermission('BAN_MEMBERS')
   ) { 
     const target = mentions.users.first()
     if (target) {
       const targetMember = message.guild.members.cache.get(target.id)
       targetMember.ban()
		const embed2 = new Discord.MessageEmbed()
			.setTitle('Baneo')
			.setDescription(`El usuario ${targetMember} fue baneado por ${tag}.`)
       message.channel.send(embed2)
     } else {
        message.channel.send(embed1)
     }
   } else {
     message.channel.send(noperms)
   }
}

module.exports = (client, message, args) => {
	Mensaje(client, message, args)
}