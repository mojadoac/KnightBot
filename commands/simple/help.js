const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
	let helpembed = new Discord.RichEmbed()
	.setTitle("Member Commands")
	.setColor("#ff5d9e")
	.addField(`${prefix}join`, "Make Knight join your voice channel")
	.addField(`${prefix}leave`, "Make Knight leave your voice channel")
	.addField(`${prefix}sb`, "Soundboard Commands")
	.addField(`${prefix}knight`, "Unleash the Knight!")
	.addField(`${prefix}say`, "Let Knight say what you want to say")
	.addField(`${prefix}report *<member>*`, "Reports a member")
	.addField(`${prefix}ping`, "Shows the ping of the bot")
	.addField(`${prefix}server-info`, "Shows the server information")
	.addField(`${prefix}bot-info`, "Shows the bot information");
	//.addField(`${prefix}user-info *[optional member]*`, "Shows either your basic information or another member");

	message.channel.send(helpembed);

	if(message.member.hasPermission("MANAGE_MESSAGES"))
	{
		message.author.send("Since you are a moderator of the server, here are some of the moderator commands.");
		let modEmbed = new Discord.RichEmbed()
		.setTitle("Moderator Commands")
		.setColor("#ff5d9e")
		.addField(`${prefix}prefix`, "Change the prefix of the bot")
		.addField(`${prefix}clear *<number of messages>*`, "Clears messages in a particular channel")
		.addField(`${prefix}kick`, "Kicks a member from the server")
		.addField(`${prefix}ban`, "Bans a member from the server")
		.addField(`${prefix}addrole`, "Adds an already created role to a user.")
		.addField(`${prefix}removerole`, "Removes a role from a user.")
		.addField(`${prefix}unban *<member>*`, "--");

		try
		{
			await message.author.send(modEmbed);
		}
		catch(e){
			message.reply(`<@${message.author.id}>, your DMs are locked. I cannot send you the mod commands.`)
		}
	}
}

module.exports.help = {
	name: "help"
}