const Discord = require("discord.js");
var game = "";

module.exports.run = async (bot, message, args) => {
	{
		if (power = "off") {
			return;
		}
		else if (!message.member.hasPermission("ADMINISTATOR")) {
			return message.reply("Only admins can use this command.");
		}
		else {
			game = args.join(" ").slice(0);
			message.channel.send(game);
		}
	}
}

module.exports.help = {
	name: "playing"
}