const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if (power = "off") {
            return;
        }
        else {
            message.channel.send("Commands:\n" +
                "!next                          Show date of next meeting(will be posted in Announcements chat) \n" +
                "!what                         Tells you what this bot is and why it's here\n" +
                "!helpAdm                Show admin commands(admin only)");
        }
    }
}

module.exports.help = {
    name: "help"
}