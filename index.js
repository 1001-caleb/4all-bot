const { Client, GatewayIntentBits, Collection, Discord } = require("discord.js");
const fs = require('fs');
const { BOT } = require("./config/config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();
client.aliases = new Collection();

// command handler
fs.readdirSync('./handlers').forEach(handler => {
    try {
        require(`./handlers/${handler}`)(client, Discord);
    } catch (e) {
        console.log(`ERROR EN EL HANDLER ${handler}`)
        console.log(e)
    }
});


client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(BOT.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`));