const commando = require('discord.js-commando')
const Ninja = require('../../data/models/ninja.js')
const mongoose = require('mongoose')

class ShowNinjasCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'show_ninjas',
      group: 'ninja',
      memberName: 'show ninjas',
      description: 'Show all the ninjas on the server.'
    })
  }

  async run(message, args) {
    Ninja.find({}, function (err, ninjas) {
      if (!err) {
        ninjas.map(ninja => {
          let ninjaName = ninja['ninjaName']
          let clanName = ninja['clanName']
          let ninjaRank = ninja['ninjaRank']

          message.reply('Name: ' + ninjaName + '\nClan: ' + clanName + '\nShinobi Rank: ' + ninjaRank + '\n\n\n')
        })
      }

    })
  }
}

module.exports = ShowNinjasCommand;
