const mongoose = require('mongoose')

const BrooooSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const BrooooModel = mongoose.model("broski", BrooooSchema)
module.exports = BrooooModel