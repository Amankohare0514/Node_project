const mongoose = require("mongoose")

const connectDb = async () => {
  await  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database is Connected"))
}

module.exports = connectDb