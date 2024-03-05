const { Admin, User, Course } = require("../db/index");
const jwtPassword = "123456";
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  try {
    const adminData=jwt.verify(token, jwtPassword);
    if(adminData){
      next();
    }
  }
  catch (error) {
    res.send("Invalid Token")
  }
}

module.exports = userMiddleware;