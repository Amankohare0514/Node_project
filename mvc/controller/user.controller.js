const model = require("../model/user.model")

function PostUser (req, res){
  const {id, name} = req.body
  const newUser = {
    id:id,
    name:name
  }
 model.push(newUser)
 res.send(newUser)
}

function GetUser (req, res){
    res.send(model)
}

function GetUserById (req, res){
    const {id}  = req.params
    const user = model[id]
    if (user) {
        res.json(user)
    }
    else {
        res.status(500).send("user not found")
    }
}

module.exports = {
    PostUser , 
    GetUser,
    GetUserById
}