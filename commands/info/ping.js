module.exports = {
    name: 'ping',
    aliases: ['latencia', 'ms'],
    run: async (client, message) => {
        message.reply(`Pong! ${client.ws.ping}ms`);
    }    
}