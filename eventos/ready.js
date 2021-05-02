module.exports = (client) => {
   client.user.setPresence({
       status:"online",
       activity: {
          name: "𝕿𝖍𝖊 𝕻𝖆𝖗𝖆𝖉𝖎𝖘𝖊",
          type: "PLAYING"
       }
   })
}
