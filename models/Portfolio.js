const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    location: {
      type: String,
      default: "",
    },
    socialLinks: {
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
    },
    profileImage: {
      type: String,
      default: "", // You can store the URL of the profile image
    },
    languages:{
      type:Array,
      default:[]
    }
  },
  { timestamps: true }
);

const educationSchema = new mongoose.Schema({
  userId:{
    type:String,
    require:true
  },
  collegeName: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  startDate: {
    type: String,  // Storing both month and year as a string (e.g., "August 2018")
    required: true
  },
  endDate: {
    type: String,  // Storing both month and year as a string (e.g., "May 2022")
    required: true
  },
  cgpa: {
    type: Number,
    required: true,
    min: 0,  // CGPA should be non-negative
    max: 10  // Assuming the CGPA scale is from 0 to 10
  }
});
const Education=mongoose.model('Education', educationSchema);
const About= mongoose.model('About', AboutSchema);
module.exports = {
  Education,
  About,
};

