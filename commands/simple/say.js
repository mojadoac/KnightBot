const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Oof, you do not have permissions to do that.");
	let botmessage = args.join(" ");
	message.delete().catch();
	message.channel.send(botmessage);
}

module.exports.help = {
	name: "say",
	description: "Make the bot say what you want to say.",
	usage: ""
}