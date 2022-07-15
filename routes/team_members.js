const express = require('express');
const membersRouter = express.Router();

const { getAllMembers } = require('../db')

// GET /team_members
membersRouter.get('/', async (req, res, next) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    try {
        const members = await getAllMembers();
        console.log("All members in get request: ", members)
        res.send(members);
    } catch ({name, message}) {
        next({
            name: "GetTeamMembersError",
            message: "Unable to get team members!"
        })
    }
})

module.exports = membersRouter;