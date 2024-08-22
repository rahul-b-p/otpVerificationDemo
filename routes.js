const express =require('express')
const otpMailSetup = require('./otpMiddleware')

const router = new express.Router()

router.post('/send-otp',otpMailSetup)


module.exports=router