const express = require("express")
const app = express()
const mongoose  = require("mongoose")
const authRoutes = require("./routes/userRouter")

mongoose.connect('mongodb+srv://amankohare:amankohare@cluster0.xgzytya.mongodb.net/?retryWrites=true&w=majority', {
}).then(console.log("databse is connected"))

app.get("/" , (req,res)=>{
    res.send("hello this is aman")
})

app.use("/" , authRoutes)


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})