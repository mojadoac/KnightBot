const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Oof, you do not have permission to do this.");
	
	let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) );
	if (!rMember) return message.reply("Couldn't find that user.");

	let role = args.join(" ").slice(22);
	if(!role) return message.reply("Specify a role first!");

	let gRole = message.guild.roles.find((r) => r.name === role);
	if (!gRole) return message.reply("Couldn't find that role.");

	if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
	await(rMember.addRole(gRole.id));

	try
	{
		await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
	}
	catch(e)
	{
		message.channel.send(`Congrats to <@${rMember.id}>, he/she have been the role ${gRole.name}.`)
	}
}

module.exports.help = {
	name: "addrole"
}