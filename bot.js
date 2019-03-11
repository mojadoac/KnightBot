const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const recursive = require("recursive-readdir");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

global.cnt;

// FILE SYSTEM LOADER AND READER
recursive("./commands/", (err, files) =>
{
  if (err) console.log;

  //f.split(".").pop() === "js"
  let jsfile = files.filter(f => f.split(".").pop() === "js");

	if(jsfile.length <= 0)
	{
		console.log("Couldn't find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
    f = `./${f}`;
		let props = require(`${f}`);
		bot.commands.set(props.help.name, props);
		//console.log(`${f} loaded!`);
  });

});

// BOT READY
bot.on("ready", async () => 
{
  console.log(`${bot.user.username} is now online!`);
  bot.user.setActivity("Boom, Boom, Boom, Boom!! by Vengaboys", {type: "LISTENING"});
});

// COMMANDS
bot.on("message", async message => 
{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  // PREFIX
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id])
  {
  	prefixes[message.guild.id] = {
  		prefixes: botconfig.prefix
  	}
  }
  let prefix = prefixes[message.guild.id].prefixes;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  // MESSAGE COMMAND
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args, prefix)

});

// LOGIN WITH TOKEN
bot.login(process.env.BOT_TOKEN);