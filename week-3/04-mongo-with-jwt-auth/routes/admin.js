const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index");
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

// Admin Routes
router.post('/signup', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await Admin.findOne({ username: username });
    if (existingUser) {
        return res.status(400).send("Admin-name already exists");
    }
    const admin = new Admin({
        username: username,
        password: password
    });

    admin.save();
    res.json({
        "msg": "Admin created successfully"
    })
});

router.post('/signin',async function(req,res)
{
    const username=req.body.username;
    const password=req.body.password;
    const existingUser = await Admin.findOne({ username: username, password:password });
    if (existingUser) {
        const token = jwt.sign({ username: username }, jwtPassword);
        res.json({ "Token": token })
    }
    else {
      res.status(401).send("user not found");
    }
    
})

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const adminCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    });
    adminCourse.save().then((doc) => {
        res.json({
            "msg":"Course Added Successfully",
            "courseId": doc._id
        })
      }).catch((error) => {
        console.log("Error occurred while course Creation")
      });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    try{
        const items=await Course.find();
        res.json(items);
    } catch (error)
    {
        res.status(500).json({"msg":"Sorry, An error Occurred"})
    }
});

module.exports = router;

// try if it lets users of same username sign in