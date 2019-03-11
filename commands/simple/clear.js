const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Oof, you cannot clear messages.");
	if (!args[0]) return message.channel.send("Oof, you did not indicate how many.");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000))
	})
}

module.exports.help = {
	name: "clear",
	description: "Clears messages in a particular channel",
	usage: ""
}