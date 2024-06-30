const { PrismaClient } = require('@prisma/client');
const config = require('../config');
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: config.databaseUrl,
        },
    },
});

/**
 * @param {Object} surveyData - The survey data to create.
 * @param {string} surveyData.title - The title of the survey.
 * @param {Array} surveyData.questions - The questions for the survey.
 * @returns {Promise<Object>} - The created survey.
 */

const createSurvey = async (surveyData) => {
    const { title, questions } = surveyData;

    return await prisma.surveys.create({
        data: {
            title: title,
            questions: {
                create: questions.map(question => ({
                    text: question.text,
                    options: {
                        create: question.options.map(option => ({
                            text: option.text,
                            votes: option.votes || 0,
                        })),
                    },
                })),
            },
        },
    });
};

const fetchSurvey = async () => {
    return await prisma.surveys.findMany({
        
    });
};

const fetchSurveyOne = async (id) => {
    return await prisma.surveys.findMany({
        where:{id:id}
    });
};

const updateSurvey = async (updateData, id) => {
    const { title, questions } = updateData;

    return await prisma.surveys.update({
        data: {
            title: title,
            questions: {
                create: questions.map(question => ({
                    text: question.text,
                    options: {
                        create: question.options.map(option => ({
                            text: option.text,
                            votes: option.votes || 0,
                        })),
                    },
                })),
            },
        },
        where:{id:id}
    });
};

const deleteSurveyOne = async (id) => {
    return await prisma.surveys.delete({
        where:{id:id}
    });
};

module.exports = {
    createSurvey, fetchSurvey, fetchSurveyOne, updateSurvey, deleteSurveyOne
};
