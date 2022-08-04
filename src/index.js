const { Client, GatewayIntentBits } = require("discord.js");

const { BOT } = require("./config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
    console.log(`${client.user.username} is ready!`);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
        await interaction.reply("Pong!");
    } else if (commandName === "server") {
        await interaction.reply(
            `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
        );
    } else if (commandName === "user") {
        await interaction.reply(
            `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
        );
    }
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith(".ping")) {
        message.channel.send("Pong");
    }
});

client.login(BOT.token);
