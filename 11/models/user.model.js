const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, "Name should be min of 4 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [5, "password should be min of 5 characters"]
    },
    token: {
        type: String
    }
})

 const User = mongoose.model("user", userSchema)

 module.exports = User