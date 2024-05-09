const express = require("express")
const  mongoose = require("mongoose")
const app = express()
const port = 3001
const route = require('./src/routes/route')

app.use(express.json())
mongoose.connect("mongodb+srv://matheenahamad:9TNGWEhzUB0Ttemi@matheen.vtdepfw.mongodb.net/register")
.then(console.log('mongodb connected'))
.catch((err) => console.log(err))

app.use('/',route)
app.listen(port, ()=> console.log(`server running in ${port}`))