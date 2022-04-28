const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Characters = mongoose.model("Characters", characterSchema)

module.exports = Characters