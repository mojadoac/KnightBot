const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let bIcon = bot.user.displayAvatarURL;
	let botEmbed = new Discord.RichEmbed()
	.setTitle("Bot Information")
	.setColor("#ff1500")
	.setThumbnail(bIcon)
	.addField("Bot Name", bot.user.username);

	message.channel.send(botEmbed);
	return;
}

module.exports.help = {
	name: "bot-info",
}