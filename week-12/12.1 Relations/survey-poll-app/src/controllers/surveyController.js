const { createSurvey, fetchSurvey, fetchSurveyOne, deleteSurveyOne, updateSurvey} = require('../models/surveyModel');

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

const fetchSurveyController = async (req, res) => {
  try {
    const surveyData = await fetchSurvey();
    res.status(201).json(surveyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve Surveys' });
  }
};

const fetchSurveyControllerOne = async (req, res) => {
  try {
    const surveyData = await fetchSurveyOne(parseInt(req.params.id));
    res.status(201).json(surveyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve Survey' });
  }
};

const updateSurveyController = async (req, res) => {
  try {
    const updateData = req.body;
    const id = parseInt(req.params.id);
    const survey = await updateSurvey(updateData, id);
    res.status(201).json(survey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update survey' });
  }
};

const deleteSurveyControllerOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const surveyData = await deleteSurveyOne(id);
    res.status(201).json(surveyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to Delete Survey' });
  }
};


module.exports = { createSurveyController, fetchSurveyController, fetchSurveyControllerOne, updateSurveyController, deleteSurveyControllerOne };
