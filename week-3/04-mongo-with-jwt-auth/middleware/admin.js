const { Admin, User, Course } = require("../db/index");
const jwtPassword = "123456";
const jwt = require('jsonwebtoken');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  try {
    const userData=jwt.verify(token, jwtPassword);
    if(userData){
      next();
    }
  }
  catch (error) {
    res.send("Invalid Token")
  }
}

module.exports = adminMiddleware;