const express =require("express")
const { login,signup, sendOtp } = require("../controllers/authController")
const router=express.Router()
router.post("/login",login)
router.post("/signup",signup)
router.post("/sendOtp",sendOtp)
module.exports=router