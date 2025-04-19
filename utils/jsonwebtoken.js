require('dotenv').config()
const {sign}=require('jsonwebtoken')
const generateToken=(payload)=>{
        return sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'})
}
module.exports={generateToken}