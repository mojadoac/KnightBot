const Discord = require("discord.js");
const recursive = require("recursive-readdir");
const sounds = [];

// Consists of the individual title of sounds
var list;
// Path of each sound
var full;

// Reads the whole sounds directory and saves the path and filenames of each sound
recursive("./sounds/", (err, files) => 
{
    if (err) console.log();

        let jsfile = files.filter(f => f.split(".").pop() === "mp3");
        
        full = jsfile;

        if (jsfile.length <= 0)
        {
            console.log("Could not find any files.");
            return;
        }

        var start = "```";
        jsfile.forEach((f, i) => {
            f = f.split("sounds/").pop();
            sounds.push(f);
            start += "\n" + `${f}`;
        });
        var last = "\n```";
        list = start + last;
        // Full is the filename of each sound (without .mp3)
        list = list.split(".mp3");  
});

module.exports.run = async (bot, message, args, prefix) => 
{
    // A list that shows the result of each checking of the sounds
    var resultList = [];

    // Pushes the condition to the array if the arg is equal to one of the sounds
    function checkList(sound)
    {
        resultList.push(args[0] + ".mp3" === sound);
    }

    // Returns the overall condition (if it is true or false)
    function arrayChecker(currentValue)
    {
        return currentValue === true;
    }

    // Checks if the arg is equal to one of the sounds
    var checkResult = sounds.forEach(checkList);

    // If the user says "sb list"
    if (args[0] === "list")
    {
        // Display the list of available sounds
        message.channel.send(list);
    }
    // If the user says "sb"
    else if(!args[0])
    {
        message.reply("Incomplete command. Need help? Try " + `"${prefix}sb help".`);
    }
    // If the user says "sb help"
    else if(args[0] === "help")
    {
        let sbEmbed = new Discord.RichEmbed()
        .setTitle("Soundboard Commands")
        .setColor("#ff5d9e")
        .addField(`${prefix}sb `+ "list", "Shows the list of available sounds")
        .addField(`${prefix}sb `+ "*<sound>*", "Plays the sound that you picked from the list");
        message.reply(sbEmbed);
    }
    // If the arg is equal to one of the sounds
    else if (resultList.some(arrayChecker))
    {
        // If the bot is in a voice channel, play the sound
        if (message.guild.voiceConnection)
        {
            const dispatcher = cnt.playFile(`./sounds/${args[0]}.mp3`);
            message.reply("Playing " + `${args[0]} now.`).then(msg => msg.delete(8000));
        }
        else
        {
            message.member.voiceChannel.join().then(
                connection => 
                {
                    cnt = connection;
                    const dispatcher = cnt.playFile(`./sounds/${args[0]}.mp3`);
                });
            message.reply("I have successfully joined the voice channel.").then(msg => msg.delete(5000)); 
        }
    }
    else
    {
        message.reply("You must pick a filename from the list. (The list will automatically delete in 15 seconds)")
        message.channel.send(list).then(msg => msg.delete(15000));
    }
}

module.exports.help = {
	name: "sb"
}