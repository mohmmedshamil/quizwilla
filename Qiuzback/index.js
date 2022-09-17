const express=require('express')
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")
const quizRoute = require("./routes/quizRoute")
const connection_string="mongodb://localhost:27017/quizwilla"

app.use(express.json())

app.use(cors({ credentials: true,origin: 'http://localhost:3000' }))
// app.use(cors())

mongoose.connect(connection_string)

app.use('/api/v1/quiz',quizRoute)

app.listen(5000,()=>{
    console.log("server connected in the portnumber of 5000")
})
