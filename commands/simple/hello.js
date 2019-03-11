const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	return message.reply("Hello");
	
}

module.exports.help = {
	name: "hello"
}