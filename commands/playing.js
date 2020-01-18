const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");
let game = "";

module.exports.run = async (bot, message, args) => {
	{
        if (botconfig.power == "off") {
			return;
		}
		else if (!message.member.hasPermission("ADMINISTATOR")) {
			return message.reply("Only admins can use this command.");
		}
		else {
			game = args.join(" ").slice(0);
            bot.user.setActivity(game); 
		}
	}
}

module.exports.help = {
	name: "playing"
}