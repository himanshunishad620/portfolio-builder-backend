const User=require('../models/User')
const {generateToken, verifyToken}=require('../utils/jsonwebtoken');
const { storeOTP, verifyOTP } = require('../utils/otp');
exports.login=async(req,res)=>{
        const {email,password}=req.body
        const user = await User.findOne({email});
        const isMatch=user?.password===password
        if(!user || !isMatch) return res.status(404).json({msg:"Invalid Credentials!"})
        const token=generateToken(user.toObject())
        res.cookie('token', token, {
                httpOnly: true,      // Prevents JS access (helps prevent XSS)
                secure: process.env.NODE_ENV === 'production', // true in production (HTTPS only)
                sameSite: 'strict',  // Helps mitigate CSRF
                maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
              });
        res.status(200).json({msg:"Logged in Successfully!",user})
}
exports.signup=async(req,res)=>{
        const {name,email,password,otp}=req.body
        const isValid=await verifyOTP(email,otp)
        if(!isValid) return res.status(404).json({msg:"Invalid OTP!"})
        try{
                const result=await User.insertOne({name,email,password})
                res.status(200).json({result,msg:"Registered Successfully!"})
        } catch (err){
                res.status(404).json({msg:"Something went wrong!"})
        }
}
exports.sendOtp=async(req,res)=>{
        const {email}=req.body
        const user=await User.findOne({email})
        if(user) return  res.status(404).json({msg:"Email is already registered!"})
        const otp=await storeOTP(email)
        if(!otp) return  res.status(404).json({msg:"Unable to sendOtp!"})
        res.status(200).json({msg:"OTP sent successfully!",otp})
}
exports.verifyCookie=(req,res)=>{
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: 'Not logged in'});
      
        try {
          const decoded = verifyToken(token);
        //   console.log(decoded)
          res.status(200).json({decoded})
        } catch (err) {
          res.status(401).json({ message: 'Invalid token' });
        }
}