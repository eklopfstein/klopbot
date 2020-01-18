const Discord = require("discord.js");
const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    {
        if (botconfig.power == "off") {
            return;
        }
        else {
            let xdy = args[0];
            let x = "";
            let y = "";
            let i = 0;
            let total = 0;
            for (;; i++) {
                if (xdy.charAt(i) == 'D' || xdy.charAt(i) == 'd')
                {
                    i++;
                    break;
                }
                else {
                    x += xdy.charAt(i);
                }
            }
            for (; i < xdy.length; i++) {
                y += xdy.charAt(i);
            }
            for (i = 0; i < x; i++) {
                let roll = Math.floor((Math.random() * y) + 1);
                total += roll;
            }
            message.channel.send(total);
        }
    }
}

module.exports.help = {
    name: "roll"
}