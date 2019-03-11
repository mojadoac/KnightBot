const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send({
        file: "./knight.png"
    });
}

module.exports.help = {
	name: "knight"
}