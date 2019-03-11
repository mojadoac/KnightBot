const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const pingEmbed = new Discord.RichEmbed()
    .setColor(3447003)
    .addField("Ping:", `${Math.round(bot.ping)}` + "ms")

    message.channel.send({embed: pingEmbed});
}

module.exports.help = {
	name: "ping"
}