const express =require("express")
const { login,signup, sendOtp, verifyCookie } = require("../controllers/authController")
const router=express.Router()
router.post("/login",login)
router.post("/signup",signup)
router.post("/sendOtp",sendOtp)
router.get("/verifyCookie",verifyCookie)
module.exports=router