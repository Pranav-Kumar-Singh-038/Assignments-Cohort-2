const express = require('express');
const { createSurveyController } = require('../controllers/surveyController');
const router = express.Router();

router.post('/', createSurveyController);

module.exports = router;
