const { Admin, User, Course } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const username=req.headers["username"];
    const password=req.headers["password"];
    const existingUser = await Admin.findOne({ username: username , password:password});
    if(existingUser)
    {
      next();
    }
    else
    {
        res.status(401).send("user not found");
    }
}

module.exports = adminMiddleware;