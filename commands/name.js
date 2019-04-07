const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if (!message.member.hasPermission("ADMINISTATOR")) {
            return message.reply("Only admins can use this command.");
        }
        else {
            message.guild.members.get(bot.user.id).setNickname("some nickname");
        }
    }
}

module.exports.help = {
    name: "name"
}
