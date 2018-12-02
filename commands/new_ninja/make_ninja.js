const commando = require('discord.js-commando')
const Ninja = require('../../data/models/ninja.js')
const mongoose = require('mongoose')

class MakeNinjaCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'ninja',
      group: 'ninja',
      memberName: 'ninja',
      description: 'Create a new academy-level ninja. You will lose your existing ninja if you do so.',
      examples: ['new ninja Tulyne Uzumaki'],

    })
  }

  async run(message, args) {
    let input = message.content.split(" ")
    if (input.length != 3) {
      message.reply("To create a new ninja, please enter 'ninja [first name] [clan name]'")
    } else {

      const ninja = new Ninja({
        _id: mongoose.Types.ObjectId(),
        username: message.author.username,
        ninjaName: input[1],
        clanName: input[2],
        ninjaID: message.author.id,
        ninjaRank: "Genin",
        time: new Date(),
      })

      ninja.save()
      .then(result => console.log(result))
      .catch(err => console.log(error))

      message.reply("Your new ninja has been created!")
    }
  }

}

module.exports = MakeNinjaCommand;
