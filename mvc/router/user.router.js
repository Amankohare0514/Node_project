const express = require("express")
const router = express.Router()
const {PostUser , GetUser , GetUserById} = require("../controller/user.controller")


router.post("/" , PostUser )
router.get("/" , GetUser)
router.get("/:id" , GetUserById )

module.exports = router