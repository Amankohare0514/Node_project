const express = require("express")
const userRouter = require("./router/user.router")
const app = express()


app.use(express.json())

app.use("/users" , userRouter)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT }`);
})