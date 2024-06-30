const { createSurvey } = require('../models/surveyModel');

const createSurveyController = async (req, res) => {
  try {
    const surveyData = req.body;
    const survey = await createSurvey(surveyData);
    res.status(201).json(survey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create survey' });
  }
};

module.exports = { createSurveyController };
