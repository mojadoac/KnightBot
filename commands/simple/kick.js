const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if (!kUser) return message.channel.send("Couldn't find the user.");
	let kReason = args.join(" ").slice(22); 

	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Oof, you do not have permission to do this.");
	if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person cannot be kicked.");

	let kickEmbed = new Discord.RichEmbed()
	.setTitle("Kick")
	.setColor("#e56b00")
	.addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
	.addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
	.addField("Reason", kReason);

	message.guild.member(kUser).kick(kReason);
	message.channel.send(kickEmbed);

	return;
}

module.exports.help = {
	name: "kick",
}