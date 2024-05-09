const mongoose = require('mongoose')

const loginSchema = new  mongoose.Schema({
    name: {type: String, requried: true, trim:true},
    email:{type: String, requried: true, trim:true},
    password:{type: String, requried: true, trim:true}
}, { timeseries:true })

module.exports = mongoose.model('User', loginSchema )