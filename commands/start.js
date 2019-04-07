const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) {
        return message.reply("Only admins can use this command.");
    }
    else {
        bot.user.setActivity("God");
        message.channel.send(bot.user.username + " is ready!");
        return;
    }
}
module.exports.help = {
    name: "start"
}