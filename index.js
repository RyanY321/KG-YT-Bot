const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
token: "MTA3MTU5Njg5MzgzMTk3NDkzMg.GKBqmR.z_6W4T1G2OOshFN4XS4N9OXtHfUGp01sE421YU",
prefix: "~",
intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"]
});

bot.status({
    text: "Prefix: ~ | DO NOT USE ME!",
    type: "ONLINE",
    status: "dnd",
    time: 12
  });

//Events
bot.onMessage();
bot.onInteractionCreate();

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")