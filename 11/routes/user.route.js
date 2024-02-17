const { getUsers, login, register} =  require("../controllers/user.controller")

const express = require("express")
const isAuthenticated = require("../middleware/auth.middleware")

const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/user", isAuthenticated, getUsers)

module.exports = userRouter