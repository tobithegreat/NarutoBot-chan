const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', (message) => {

  if (message.content == 'ping') {
    message.channel.sendMessage('pong');
  }
});

bot.login('NTE4MzE0OTU0NjA5MTMxNTIw.DuO_QQ.MN2ygkcWmnjt7efixtEbBZP6KCE')
