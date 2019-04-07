const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if (power = "off") {
            return;
        }
        else if (!message.member.hasPermission("ADMINISTATOR")) {
            return message.reply("Only admins can use this command.");
        }
        else {
            message.channel.send("Commands:\n" +
                "!start                             Start bot\n" +
                "!stop                             Stop bot\n" +
                "!setNext \"text\"           Set next robotics meeting to the given text\n" +
                "!canRob                      Cancel next robotics meeting\n" +
                "!robAlert \"text\"          Send given text as a message in announcements channel\n" +
                "!robChange \"text\"     Edit last message sent by bot to given text\n");
        }
    }
}

module.exports.help = {
    name: "helpadm"
}