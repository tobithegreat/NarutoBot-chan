const commando = require('discord.js-commando')
const bot = new commando.Client()

bot.registry.registerGroup('status', 'Status')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + "/commands")
bot.on('message', (message) => {

  if (message.content == '') {
    message.channel.send('pong');
  }
  if (message.content == "Where are the slaves") {
    message.channel.send("You're too late. You'll never find them.")
  }
});

bot.login('NTE4NDY0MTEyNTgyMzI4MzIx.DuRJew.V_q6SGyKMEXedmCjTSkutMEUyI0')
