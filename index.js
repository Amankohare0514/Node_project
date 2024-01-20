const express = require('express')
const app = express()
const UserData =  require('./Data')
const mongoose = require('mongoose')
require('dotenv').config();
app.get('/' , (req , res) =>{
  res.send("hello world")
})

app.get('/api/data' , (req , res) =>{
  res.end(JSON.stringify(UserData))
})

const URL = process.env.MONGODB_DATABASE

mongoose.connect(URL , console.log("database is connected"))

const PORT = 5000;
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
})