const { client } = require('./client');
const { dropTables, createTables } = require('./seed')
const { getAllMembers, createTeamMembers } = require('./members');
const { teamMembers } = require('./seed_data_members');


const createInitialTeamMembers = async () => {
    try {
        console.log("Creating the initial members data......");
        const initialTeamMembers = await teamMembers();
        await Promise.all(initialTeamMembers.map(createTeamMembers))
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const rebuildDB = async () => {
    try {
        client.connect()
        await dropTables();
        await createTables();
        await createInitialTeamMembers();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const testDB = async () => {
    try {
        console.log("Starting to run the db......");

        console.log("calling getAllMembers");
        const allMembers = await getAllMembers();
        console.log("getAllMembers in testDB: ", allMembers);

        console.log("Finishes Database test!")  
    } catch (error) {
        console.error(error);
        throw error;
    }
}

rebuildDB()
    .then(testDB)
    .catch(console.error)
    .finally(() => client.end())

