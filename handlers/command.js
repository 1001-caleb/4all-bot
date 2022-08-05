const fs = require('fs');

module.exports = (client) => {
    try {
        let comandos = 0;
        fs.readdirSync('./commands').forEach(folder => {
            const commands = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));
            for (let file of commands) {
                const command = require(`../commands/${folder}/${file}`);
                if(command.name){
                    client.commands.set(command.name, command);
                    comandos++;
                } else {
                    console.log(`comando [/${folder}/${file}] no esta configurado correctamente`);
                }
                if(command.aliases && Array.isArray(command.aliases)) command.aliases.forEach((alias) => client.aliases.set(alias, command.name));
              
            }
        });
        console.log(`${comandos} comandos cargados`);
    } catch (err) {
        console.log(`Error loading commands`);
        console.log(err);
    }
}