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

// const express = require("express");
// const app = express();

// let data = [
//     { id: 1, name: 'aman' , num: 6268518514 },
//     { id: 2, name: 'sumit' , num: 8085640735 },
//     { id: 3, name: 'piyush' , num: 7247220015},
//   ];

// //simple Home page 
// app.get("/" , (req, res)=>{
//     res.send("hello world")
// })

// //get all data
// app.get("/items" , (req, res)=>{
//     res.json(data)
// })

// //get data by id
// app.get("/items/:id" , (req, res)=>{
//     const itemId = parseInt(req.params.id);
//     const item = data.find((item)=> item.id === itemId)
//     if (item) {
//         res.send(item)
//     } else {
//           console.log("error founs");
//     }
// })


// //post data 
// app.post('/items', (req, res) => {
//     const newItem = req.body;
//     newItem.id = data.length + 1;
//     data.push(newItem);
//     res.status(201).json(newItem);
//   });

  
// //delete by id
// app.delete('/items/:id', (req, res) => {
//     const itemId = parseInt(req.params.id);
//     data = data.filter((item) => item.id !== itemId);
//     res.json({ message: 'Item deleted successfully' });
//   });

// const PORT = 3000;
//  app.listen(PORT, ()=>{
//     console.log(`server is running on port ${PORT}`);
//  })



const express = require("express");
const app = express();

app.get("/" , (req, res , next)=>{
    //create own header
    //res.setHeader("x-creater" , "aman kohare")
    res.send("hello my dear friends");
    next()
})

app.use((req, res, next)=>{
    next()
})

app.get("/new" , (req, res)=>{
    res.send("hello")
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})