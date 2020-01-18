const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (botconfig.power == "off") {
        return;
    }
    else if (!message.member.hasPermission("ADMINISTATOR")) {
        return message.reply("Only admins can use this command.");
    }
    else {
        let newAdm = message.mentions.members.first();
        if (newAdm.roles.has('373243163474919434')) {
            return message.reply(message.mentions.members.first() + " is already an admin.");
        } else {
            newAdm.addRole('373243163474919434');
            return message.reply(message.mentions.members.first() + " is now an admin.");
        }
    }
    }
    module.exports.help = {
    name: "giveadm"
}