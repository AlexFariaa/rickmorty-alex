const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true //nenhum outro campo tem o mesmo valor
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true //deixa tudo minusculo
    },
    password: {
        type: String,
        required: true,
        //select: false //não mostra o que foi escrito
    },
    photo: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User 