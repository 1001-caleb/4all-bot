const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");

const { BOT } = require("./config.js");

const commands = [
    new SlashCommandBuilder().setName("ping").setDescription("replies with pong"),
    new SlashCommandBuilder()
        .setName("server")
        .setDescription("replies with server info"),
    new SlashCommandBuilder()
        .setName("user")
        .setDescription("replies with user info! "),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(BOT.token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(BOT.clientId, BOT.guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
