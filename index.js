const Discord = require('discord.js');
const client = new Discord.Client();
let { readdirSync } = require('fs'); 

client.config = require('./config.js'); 
client.comandos = new Discord.Collection();  

for(const file of readdirSync('./comandos/')) { 
  if(file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./comandos/${file}`); 
  client.comandos.set(fileName, fileContents);
  }
}

for(const file of readdirSync('./comandos/privados')) { 
  if(file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./comandos/privados/${file}`); 
  client.comandos.set(fileName, fileContents);
  }
}

for(const file of readdirSync('./eventos/')) { 
    if(file.endsWith(".js")){
    let fileName = file.substring(0, file.length - 3); 
    let fileContents = require(`./eventos/${file}`); 
    client.on(fileName, fileContents.bind(null, client)); 
    delete require.cache[require.resolve(`./eventos/${file}`)]; 
    }
  }

  client.login(client.config.token)
  .then(() => { 
    console.log(``);
    console.log(`${client.user.tag} esta encendido.`);
    console.log(``);
  })
  .catch((err) => {
    console.log(``);
    console.error("Error on login: " + err);
    console.log(``);
  });