const express = require("express")
const  mongoose = require("mongoose")
const app = express()
const port = 3001

app.use(express.json())
mongoose.connect("mongodb+srv://matheenahamad:9TNGWEhzUB0Ttemi@matheen.vtdepfw.mongodb.net/pre-data")
.then(console.log('mongodb connected'))
.catch((err) => console.log(err))

app.listen(port, ()=> console.log(`server running in ${port}`))