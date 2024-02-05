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
const fs = require("fs")
const app = express();

//this is home page
app.get("/" , (req, res)=>{
    res.send("hello this is aman")
})


//thhi is data page
app.get('/api/data', (request, response) => {
    response.json(UserData)
  })


//get user by id
app.get("/api/users/:id" , (req, res) => {
    const id = Number(req.params.id)
    const user = UserData.find((user) => user.id === id);
    return res.json(user)
})

app.use(express.urlencoded({extended : false}));

//post user
app.post("/api/users" , (req, res)=>{
    const body = req.body;
    Data.push({...body , id: UserData.length + 1});
    fs.writeFile("./Data.js" , JSON.stringify(UserData) , (err , data)=>{
        return res.json({status : "success" , id:UserData.length });
    });
});
const PORT= 4000;
app.listen(PORT,()=>{
    console.log(`server is runnign on ${PORT}`);
})