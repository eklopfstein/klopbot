const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");
let alert = "";

module.exports.run = async (bot, message, args) => {
    {
        if (botconfig.power == "off") {
            return;
        }
        else if (!message.member.hasPermission("ADMINISTATOR")) {
            return message.reply("Only admins can use this command.");
        }
        else {
            alert = args.join(" ").slice(0);
            message.channel.send(nextMeeting);
            bot.guilds.get('372585004871712779').channels.get('#398235324532129814').send(alert);
        }
    }
}

module.exports.help = {
    name: "robalert"
}