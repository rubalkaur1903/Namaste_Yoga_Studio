const { client } = require('./client');

const createJobs = async ({ title, jobURL}) => {
    try {
        const { rows: [job] } = await client.query(`
            INSERT INTO jobs(title, "jobURL")
            VALUES ($1, $2)
            RETURNING *;
        `, [title, jobURL]);
        return job;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAllJobs = async () => {
    try {
        const { rows: jobs } = await client.query(`
            SELECT *
            FROM jobs;
        `);
        return jobs;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getJobById = async (id) => {
    try {
        const { rows: [job] } = await client.query(`
            SELECT *
            FROM jobs
            WHERE id=$1
        `, [id]);
        return job;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createJobs,
    getAllJobs,
    getJobById
}