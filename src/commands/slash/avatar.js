const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get avatar URL of the user or your own user')
        .addUserOption(option => option.setName('target').setDescription('the user avatar to show')),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true})}`);
        return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL()}`);
    }
}