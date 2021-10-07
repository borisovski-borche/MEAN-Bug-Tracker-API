const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const user = require("../models/user.model");

// const auth = async (req,res,next) => {
//     try {
//         const token = req.header("Authorization").replace("Bearer ", "")
//         const decoded = jwt.verify(token,"placeholder_secret")

//         const user = await User.find
//     }
// }
