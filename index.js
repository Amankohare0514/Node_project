// const express = require('express');
//  const app = express();

//  let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only JavaScript",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       important: true
//     }
//   ]
//  app.get('/' ,(req  , res) =>{
//       res.send('<h1>hello world</h1>')
//  });

//  app.get('/api/notes' , (req , res) =>{
//     res.end(JSON.stringify(notes))
//  })

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     console.log(id)
//     const note = notes.find(note => note.id === id)
//     console.log(note)
//     response.json(note)
//   })
//  const PORT = 8000;
//  app.listen(PORT , ()=>{
//     console.log(`surver is runnig on port ${PORT} `);
//  })


const express = require('express');
const app = express()

const UserData = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }

]
app.get('/' , (req , res ) =>{
  res.send("<h1>hello world</h1>")
})

app.get('/api/data' , (req , res) =>{
  res.end(JSON.stringify(UserData))
})

app.get('/api/data/:id' , (req , res) =>{
  const id = req.params.id ; 
  const userdata = UserData.find(userdata => userdata.id === id)
  console.log(userdata);
  res.json(userdata)
})

const PORT = 5000;
app.listen(PORT , ()=>{
  console.log(`server is running on port ${PORT}`);
})