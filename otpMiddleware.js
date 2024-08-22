const nodeMailer = require('nodemailer')
const crypto = require('crypto');
const { error, info } = require('console');



const otpMailSetup=(req,res)=>{
    // console.log(process.env);
    
    const toAdress=req.body.mailid
    // console.log(toAdress);
    
    try {
        const transporter = nodeMailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.EMAILID,
                pass: process.env.EMAILPSWD
            }
        })
        const otp = crypto.randomInt(100000,999999).toString()

        const mailOptions = {
            from: process.env.EMAILID,
            to: toAdress,
            subject: 'Your OTP for Logging in EduTrak',
            text: `Your OTP code is ${otp}. Please do not share your OTP with anyone`
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if (error) {
                // console.log(error);
                res.status(406).json(error)
            }
            else{
                res.status(200).json(otp)
            }
        })


        
    } catch (error) {
        res.status(400).json('Server cant transport now')
    }
}



module.exports = otpMailSetup