const express = require("express")
const router = express.Router()
const {GetAllUser , PostUserById , GetUserById,DeleteUserByid , UpdatedById}  = require("../controller/user.controller")


router.get("/users" , GetAllUser)
router.post("/users",PostUserById )
router.get("/users/:id" , GetUserById )
router.delete("/user/:id" , DeleteUserByid)
router.put("/user/:id" , UpdatedById)
module.exports = router