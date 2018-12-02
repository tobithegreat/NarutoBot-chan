const commando = require('discord.js-commando')
const bot = new commando.Client()

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Tulyne33:Omega100@narutochanbotcluster-7aqhq.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })

bot.registry.registerGroup('status', 'Status')
bot.registry.registerGroup('ninja', 'Ninja')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + "/commands")
bot.on('message', (message) => {

  if (message.content == '') {
    message.channel.send('The more pics you post, the more I learn.')
  }

  if (message.content.includes('suck')) {
    message.channel.send('Ninjas do not condone negativity.')
  }

  if (message.content.includes('love')) {
    message.channel.send('Ninjas are sometimes capable of love.')
  }
  if (message.content == "Where are the slaves") {
    message.channel.send("You're too late. You'll never find them.")
  }
});

bot.login('DONT_HACK_PLEASE')
