const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.voiceConnection)
    {
        message.guild.voiceConnection.disconnect();
        message.channel.send("Successfully left the room. Good bye.").then(msg => msg.delete(3000));
    }
    else
    {
        message.channel.send("I must be in a voice channel to be banished!");
    }
}

module.exports.help = {
	name: "leave"
}