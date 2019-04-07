const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.channel.send(botconfig.nextMeeting);
}
module.exports.help = {
    name: "next"
}
