const express = require('express');
const jobsRouter = express.Router();

const { getAllJobs } = require('../db')

// GET /jobs
jobsRouter.get('/', async (req, res, next) => {
    try {
        const jobs = await getAllJobs();
        res.send(jobs);
    } catch ({name, message}) {
        next({
            name: 'GetJobsError',
            message: 'Unable to get the jobs'
        })
    }
})

module.exports = jobsRouter