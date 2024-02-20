const express = require("express")
const UserData = require("../data/users.data")
const router = express.Router()


//get all the user
router.get("/users", (req, res) => {
    res.send(UserData)
})

//get user by id
router.get("/users/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const item = UserData.find(item => item.id === id)
        if (!item) {
            res.send("no user found")
        }
        res.json(item)
    } catch (error) {
        res.send(error)
    }

})


//post new user 
router.post("/users", (req, res) => {
    try {
        const NewUser = req.body;
        if (!NewUser || !NewUser.name || !NewUser.age) {
            res.send("user not founf")
        }
        NewUser.id = UserData.length + 1
        UserData.push(NewUser)
        res.send(NewUser)
        console.log(NewUser);
    } catch (error) {
        res.send(error)
    }

})

module.exports = router