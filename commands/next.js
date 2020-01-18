const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (botconfig.power == "off") {
        return;
    }
    else {
        message.channel.send(botconfig.nextMeeting);
    }
}
module.exports.help = {
    name: "next"
}