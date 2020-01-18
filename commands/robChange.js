const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");
let edit = "";

module.exports.run = async (bot, message, args) => {
	{
        if (botconfig.power == "off") {
			return;
		}
		else if (!message.member.hasPermission("ADMINISTATOR")) {
			return message.reply("Only admins can use this command.");
		}
        else {
            botconfig.nextMeeting = args.join(" ").slice(0);
            message.channel.send(nextMeeting);
            message.edit(edit);
		}
	}
}

module.exports.help = {
	name: "robchange"
}