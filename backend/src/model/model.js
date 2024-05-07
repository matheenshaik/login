const mongoose = require('mongoose')

const loginSchema = new  mongoose.Schema({
    name: String,
    email:String,
    password:String
}, { timeseries:true })

module.exports = mongoose.model('User', loginSchema )