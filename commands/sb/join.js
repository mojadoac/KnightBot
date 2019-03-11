const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => 
{
    // If the user is inside a voice channel
    if (message.member.voiceChannel)
    {
        //  If the bot is not inside a voice channel, connect to the user's voice channel
        if (!message.guild.voiceConnection)
        {
            message.member.voiceChannel.join()
            .then(connection => {
                cnt = connection;
            })
            message.reply("I have successfully joined the voice channel.").then(msg => msg.delete(5000));
        }
    }
    else
    {
        message.reply("You must be in a voice channel to make me join the voice channel!");
    }
}

module.exports.help = {
	name: "join"
}