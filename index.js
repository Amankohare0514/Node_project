//simple server with express
// const express = require('express')
// const app = express()

// app.get('/' , (req, res) =>{
//   res.send("hello world")
// })


// const PORT = 3000;
// app.listen( PORT , ()=>{
//   console.log(`server is running on port {$PORT}`)
// })

//file handling
// const {sub , add} = require("./math")
// console.log("the values are " , sub(2,5))
// console.log("the value of addition is" , add(3,5));

//htttp server
// const http = require("http")


// const server = http.createServer((req, res )=>{
//   res.end("this is aman")
// })

// server.listen(5000 , ()=>{
//   console.log("server is runing on 5000");
// })

const express = require("express")
const UserData = require("./Data")
const app = express();
app.get("/" , (req, res)=>{
    res.send("hello this is aman")
})

app.get('/api/data', (request, response) => {
    response.json(UserData)
  })
  
const PORT= 4000;
app.listen(PORT,()=>{
    console.log(`server is runnign on ${PORT}`);
})