const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if (!message.member.hasPermission("ADMINISTATOR")) {
            return message.reply("Only admins can use this command.");
        }
        else {
            bot.guilds.get('372585004871712779').channels.get('#398235324532129814').send("The upcoming robotics meeting has been cancelled.");
        }
    }
}

module.exports.help = {
    name: "canRob"
}
