const commando = require('discord.js-commando')

class StatusCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'status',
      group: 'status',
      memberName: 'status',
      description: 'Get the current status for your ninja.'
    })
  }

  async run(message, args) {
    message.reply("Your ninja is coming. Just wait on him, before you get bodied.")
  }
}

module.exports = StatusCommand;
