const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) {
        message.channel.send("Only admins can use this command.");
        return;
    }
    else {
        bot.user.setActivity("Dead");
        botconfig.power = "off";
        message.channel.send(bot.user.username + " is done!");
        return;
    }
}
module.exports.help = {
    name: "stop"
}