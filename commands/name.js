const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    {
        if (botconfig.power == "off") {
            return;
        }
        else if (!message.member.hasPermission("ADMINISTATOR")) {
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