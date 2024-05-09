const userModel = require('../model/model')
const jwt = require('jsonwebtoken')
const  mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isValidRequestBody, isValidName, isValidMail, isValidPassword} = require('../validator/validation')

const register = async (req, res)=>{
    try {
    const data = req.body
    if(!isValidRequestBody(data)) return res.status(400).send({status:false, message:'Provide some data'})
    
    const {name, email, password} = data

    if(!isValidName.test(name)) return res.status(400).send({status:false, message:'Provide valid name only on Alphabets[A-Z]'})

    if(!isValidMail.test(email)) return res.status(400).send({status: false, message:'Provide valid email'})   
    
    if(!isValidPassword.test(password)) return res.status(400).send({status:false, message:'Provide valid password'})

    const userInDB = await userModel.findOne({email:email})
    if(userInDB) return res.status(200).send({status:false, message: 'email already exist'})
    
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)
    let obj = { name, email, password :hashedPassword}
    const userCreated = await userModel.create(obj)
    return res.status(200).send({status:true, message:'User created successfull', data:userCreated})   
    } 
    catch (err) {
        res.status(500).send({status:false, message: err.message})
    }
    

}

module.exports = {register}