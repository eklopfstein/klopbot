const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) {
        return message.reply("Only admins can use this command.");
    }
    else {
        bot.user.setActivity("God");
        botconfig.power = "on";
        message.channel.send(bot.user.username + " is ready!");
        
        return;
    }
}
module.exports.help = {
    name: "start"
}