const Config = require('../config.js')
const Discord = require('discord.js');

function Mensaje(client, member) {
  const embed = new Discord.MessageEmbed()
   .setTitle('**Discord Interno PFA**')
   .setDescription(`<@${member.id}> **Salio del servidor**`)
   .setImage('https://cdn.discordapp.com/attachments/827327652535992343/833815949404274708/Rainbow.gif')
   .setFooter('𝗕𝗼𝘁 𝗣𝗙𝗔®️ ', client.user.avatarURL());
  member.guild.channels.cache.get("827327652535992343").send(embed)
}

module.exports = (client, message, member) => {
   Mensaje(client, message, member)
}
