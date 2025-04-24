const express=require("express")
const cors=require('cors')
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoutes=require("./routes/authRoutes")
const portfolioRoutes=require("./routes/portfolioRoutes")
const app=express()
app.use(cors({
        origin: 'http://localhost:5173', // or wherever your frontend runs
        credentials: true, // 🔥 Allow cookies
      }));
app.use(express.json())
app.use(cookieParser())
connectDB()
app.use("/api/auth",authRoutes)
app.use("/data/portfolio",portfolioRoutes)
app.listen(2000,()=>console.log("Server started on port 2000!"))