const mongoose = require('mongoose')

const ninjaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  ninjaName: String,
  clanName: String,
  ninjaID: String,
  ninjaRank: String,
  time: String,
})

module.exports = mongoose.model("Ninja", ninjaSchema)
