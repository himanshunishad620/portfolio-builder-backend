const {profileDetails}=require("./../controllers/portfolioController")
const express=require("express")
const router=express.Router()
router.post("/getProfileDetails",profileDetails)
module.exports=router