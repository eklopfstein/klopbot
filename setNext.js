const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTATOR")) {
        return message.reply("Only admins can use this command.");
    }
    else {
        botconfig.nextMeeting = args.join(" ").slice(0);
        message.channel.send(nextMeeting);
        bot.guilds.get('372585004871712779').channels.get('#398235324532129814').send(botconfig.nextMeeting);
        return botconfig.nextMeeting;
    }
}
module.exports.help = {
    name: "setnext"
}