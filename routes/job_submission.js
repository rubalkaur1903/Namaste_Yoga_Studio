const express = require('express');
const jobSubmissionRouter = express.Router();

const { getJobById, createJobSubmission } = require('../db');

// POST /job/:jobId
jobSubmissionRouter.post('/:jobId', async (req, res, next) => {
    try {
        const { jobId } = req.params;
        const { name, email, linkedInURL } = req.body;
        const jobById = await getJobById(jobId);
        const jobSubmission = await createJobSubmission({name, email, linkedInURL})
        console.log("jobSubmission: ")
        res.send(jobSubmission)
    } catch ({name, message}) {
        next({
            name: 'JobSubmissionError',
            message: 'Unable to submit the job.'
        })
    }
})

module.exports = jobSubmissionRouter