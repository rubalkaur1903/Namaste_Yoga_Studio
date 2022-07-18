const { client } = require('./client');

const dropTables = async () => {
    try {
        console.log("Starting to drop the tables.......");

        await client.query(`
            DROP TABLE IF EXISTS jobs;
            DROP TABLE IF EXISTS team_members;
        `);

        console.log("Finishes dropping the tables!")
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createTables = async () => {
    try {
        console.log("Starting to build the tables......");

        await client.query(`
            CREATE TABLE team_members (
                id SERIAL PRIMARY KEY,
                "firstName" VARCHAR(255) NOT NULL,
                "lastName" VARCHAR(255) NOT NULL,
                title TEXT NOT NULL,
                team TEXT NOT NULL,
                "imageURL" TEXT DEFAULT 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg'
            )
        `);
        await client.query(`
            CREATE TABLE jobs (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                "jobURL" TEXT UNIQUE NOT NULL
            )
        `);
        
        console.log("Finishes creating tables!")
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createTables,
    dropTables
}