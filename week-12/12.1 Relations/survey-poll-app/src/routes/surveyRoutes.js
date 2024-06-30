const express = require('express');
const { createSurveyController, fetchSurveyController, fetchSurveyControllerOne, updateSurveyController, deleteSurveyControllerOne } = require('../controllers/surveyController');
const router = express.Router();

router.post('/', createSurveyController);
router.get('/',fetchSurveyController)
router.get('/:id', fetchSurveyControllerOne)
router.put('/:id', updateSurveyController)
router.delete('/:id',deleteSurveyControllerOne)

module.exports = router;
