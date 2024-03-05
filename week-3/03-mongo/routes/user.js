const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index");

// User Routes
router.post('/signup', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        return res.status(400).send("User-name already exists");
    }
    const user = new User({
        username: username,
        password: password
    });

    user.save();
    res.json({
        "msg": "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    try {
        const items = await Course.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ "msg": "Sorry, An error Occurred" })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers["username"];
    const updatedUser = await User.findOneAndUpdate(
        { username: username },
        { $push: { purchasedCourses: courseId } }
    );
    if (updatedUser) {
        res.send('Course added to user successfully.');
    } else {

        res.status(404).send('User not found.');
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers["username"];
    const user = await User.findOne({ username: username });
    try {
        const purchasedCourses = await Course.find({
            '_id': { $in: user.purchasedCourses }
        });
        res.json(purchasedCourses);
    } catch (error) {
        res.status(500).json({ "msg": "Sorry, An error Occurred" })
    }
});

module.exports = router