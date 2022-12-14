require ('dotenv').config();

module.exports = {
	BOT:{
		token: process.env.BOT_TOKEN,
		prefix: process.env.BOT_PREFIX,
		owner: process.env.BOT_OWNER,
		clientId: process.env.CLIENT_ID,
		guildId: process.env.GUILD_ID
	},
};
