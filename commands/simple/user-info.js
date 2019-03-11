const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	if (args[0])
	{
		let uIcon = message.author.displayAvatarURL;
		let uEmbed = new Discord.RichEmbed()
		.setTitle("User Information")
		.setColor("#15f153")
		.setThumbnail(uIcon)
		.addField("User Name", message.author.username)

		message.channel.send(uEmbed);
	}
	else
	{
		
	}
	return;
}

module.exports.help = {
	name: "user-info",
}