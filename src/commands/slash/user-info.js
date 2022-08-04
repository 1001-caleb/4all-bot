const { SlashCommandBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('Displat info about yourself')
        .addUserOption(option => option.setName('usuario').setDescription('the user info to show')),
    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        if (user) return interaction.reply(`User name: ${interaction.user.username} and ID: ${interaction.user.id}`)
        return interaction.reply(`Your username: ${interaction.user.username} and your ID: ${interaction.user.id}`)
    },
}