const Config = require('../config.js')
const Discord = require('discord.js');

function Mensaje(client, message, args) {
  const embed = new Discord.MessageEmbed()
   .setTitle('**Normativas del Discord**')
   .setColor(0x0083FF)
   //.setDescription('**[#1] | `ID:`** `Server Pfa`   `Contraseña:` `Server Pfa`')
   .addField('**[1]**', 'Siempre debes ser amable y educado en todo momento.')
   .addField('**[2]**', 'No compartir pornografía y/o contenido NSFW.')
   .addField('**[3]**', 'Si escribes, piensa antes de hacerlo.')
   .addField('**[4]**', 'No compartas información privada de otros usuarios.')
   .addField('**[5]**', 'No discutir temas politicos.')
   .addField('**[6]**', 'No compartir información privada de otra persona.')
   .addField('**[7]**', 'No ponerse apodos trolls.')
   
   .addField('**:white_check_mark: |**', '𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊 se rige a las normas y directivas de Discord, incumplirlas (según su gravedad) llevaría a la finalidad de la expulsión permanente del Discord al usuario.')
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