const { Admin, User, Course } = require("../db/index");

async function userMiddleware(req, res, next) {
    const username=req.headers["username"];
    const password=req.headers["password"];
    const existingUser = await User.findOne({ username: username , password:password});
    if(existingUser)
    {
      next();
    }
    else
    {
        res.status(401).send("User not found");
    }
}

module.exports = userMiddleware;