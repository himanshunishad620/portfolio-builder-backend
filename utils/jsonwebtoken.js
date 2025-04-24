require('dotenv').config()
const {sign,verify}=require('jsonwebtoken')
const generateToken=(payload)=>{
        return sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'})
}
const verifyToken=(token)=>{
        const decoded=verify(token,process.env.SECRET_KEY)
        return decoded
}
module.exports={generateToken,verifyToken}