const express = require("express")
const app = express()
const router = require("./routes/user.router")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
require('dotenv').config()
app.use(bodyParser.json());

//conncetion of databse
mongoose.connect(process.env.DATABASE_URL)
.then(console.log("database is connected"))

//main page routing
app.get("/" , (req, res)=>{
    res.send("helo this is aman")
})
app.use(router)


//declare the port
app.listen(process.env.PORT , ()=>{
    console.log(`server is running in port ${process.env.PORT}`)
})

