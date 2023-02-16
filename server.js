require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
token: "process.env.TOKEN",
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