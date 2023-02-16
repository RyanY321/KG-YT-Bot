require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
token: "MTA3MTU5Njg5MzgzMTk3NDkzMg.GWrWFI.V5mP3eD5LuD5HZeBIMfWwMBY9Eb9UhNWcsGgMA",
prefix: "~",
intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"]
});

bot.status({
    text: "Prefix: ~ | Almost Finished",
    type: "ONLINE",
    status: "online",
    time: 12
  });

//Events
bot.onMessage();
bot.onInteractionCreate();

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")