const express = require("express")
const connectDb = require("./db/conn")
const userRouter = require("./routes/user.route")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"]
}))
app.use(cookieParser())
app.use("/", userRouter)

app.listen(process.env.PORT, () => {
    connectDb()
    console.log(`Server is running on PORT ${process.env.PORT}`)
})