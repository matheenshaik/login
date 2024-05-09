const express = require("express")
const router = express.Router()

const {register} = require('../controller/controller')
router.post('/register', register )

router.all('/*', async (req,res) => {
    res.status(400).send({status:false, message:'Error path'})
})
module.exports = router