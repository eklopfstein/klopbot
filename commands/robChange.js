const Discord = require("discord.js");
var edit = "";

module.exports.run = async (bot, message, args) => {
	{
		if (!message.member.hasPermission("ADMINISTATOR")) {
			return message.reply("Only admins can use this command.");
		}
        else {
            edit = args.join(" ").slice(0);
            message.channel.send(edit);
            message.edit(edit);
		}
	}
}

module.exports.help = {
	name: "robChange"
}
