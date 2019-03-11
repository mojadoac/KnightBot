const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if (!bUser) return message.channel.send("Couldn't find the user.");
	let bReason = args.join(" ").slice(22); 

	if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Oof, you do not have permission to do this.");
	if (bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("That person cannot be kicked.");

	let banEmbed = new Discord.RichEmbed()
	.setTitle("Kick")
	.setColor("#bc0000")
	.addField("Banned User", `${bUser} with ID: ${bUser.id}`)
	.addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
	.addField("Reason", bReason);

	message.guild.member(bUser).ban(bReason);
	message.channel.send(banEmbed);

	return;
}

module.exports.help = {
	name: "ban",
}