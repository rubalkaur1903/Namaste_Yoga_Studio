const { client } = require('./client')

const createTeamMembers = async ({
    firstName,
    lastName,
    title,
    team,
    imageURL
}) => {
    try {
        const { rows: [member] } = await client.query(`
            INSERT INTO team_members("firstName", "lastName", title, team, "imageURL")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `, [firstName, lastName, title, team, imageURL]);
        return member;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAllMembers = async () => {
    console.log("Enter getAllMembers....")
    try {
        const { rows: members } = await client.query(`
            SELECT *
            FROM team_members;
        `);
        console.log("members in getAllMembers: ", members)
        return members;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createTeamMembers,
    getAllMembers
}