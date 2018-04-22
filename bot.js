
const commando = require('discord.js-commando');
const bot = new commando.Client({
  commandPrefix: '//',
  unknownCommandResponse: false
});
bot.registry.registerDefaultTypes();
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('everyone', 'Everyone');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerCommands(require("./commands/everyone/radiocommands.js"));
bot.login(process.env.BOT_TOKEN);

