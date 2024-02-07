const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://amankohare:amankohare@cluster0.xgzytya.mongodb.net/?retryWrites=true&w=majority', {
}).then(console.log("databse is connected"))

//define user schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

//model
const User = mongoose.model('User', UserSchema)

//routes
//create a user
app.post('/user', async (req, res) => {
    try {
        // const user = new User(req.body);
        const {name , email , age} = req.body;
        const user = new User({name , email , age})
        await user.save();
        res.send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//get all users
app.get("/users" , async (req, res)=>{
    try {
        const users = await User.find()
        res.send(users)
        console.log(users);
    } catch (error) {
        res.status(500).send(error)
    }
})

//get users by id
app.get("/users/:id" , async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(402).send("user not found")
        }
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

//delete user by id
app.delete("/users/:id" , async (req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(402).send("user not found")
        }
        res.send("user deleted sucessfully")
    } catch (error) {
        res.status(500).send(error)
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})