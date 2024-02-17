const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require("dotenv").config()

const isAuthenticated = async (req, res, next) => {
    try {
        const {token} = req.cookies
        if(!token){
            return next("Please login to access the data")
        }
        const verify = await jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(verify.id)
        next()
    } catch (error) {
        console.log(error)
        return next(error)
    }
}

module.exports = isAuthenticated