const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pranav073:Lvt87UBGQaKvuwFg@cluster0.ry6yrgj.mongodb.net/Coursell');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },

    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    imageLink:
    {
        type: String
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}