const {getAbout, getEducation}=require("./../controllers/portfolioController")
const express=require("express")
const router=express.Router()
router.get("/getProfileDetails/about/:userId",getAbout)
router.get("/getProfileDetails/education/:userId",getEducation)
module.exports=router