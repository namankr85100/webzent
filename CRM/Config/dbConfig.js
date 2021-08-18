const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL
        console.log(url)
     const conn = await mongoose.connect( process.env.MONGO_URL , {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true,
     })
     console.log("connecting db")
     console.log(`Mongodb Connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error : ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB