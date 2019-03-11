const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let sIcon = message.guild.iconURL;
	let serverEmbed = new Discord.RichEmbed()
	.setTitle("Server Information")
	.setColor("#15f153")
	.setThumbnail(sIcon)
	.addField("Server Name", message.guild.name)
	.addField("You Joined", message.member.joinedAt)
	.addField("Total Members", message.guild.memberCount);

	message.channel.send(serverEmbed);
	return;
}

module.exports.help = {
	name: "server-info",
}