const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
token: "MTA3MTU5Njg5MzgzMTk3NDkzMg.G4Lexk.PRfQ3KIuNnHVZIeIox5NosJNoy_DSCsRvIsFmI",
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