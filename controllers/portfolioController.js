const {About,Education} = require("./../models/Portfolio");
exports.getAbout = async (req, res) => {
  // console.log(req.params.userId)
  try {
    const result = await About.findOne({ userId: req.params.userId });
    if(!result) return res.status(404).json({ msg: "User not found!" });
    res.status(200).json({ result, msg: "Successfully fetched!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
};
exports.getEducation = async (req, res) => {
  try {
      const result=await Education.findOne({userId:req.params.userId})
      if(!result) return res.status(404).json({ msg: "User not found!" });
      res.status(200).json({ result, msg: "Successfully fetched!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }

};
