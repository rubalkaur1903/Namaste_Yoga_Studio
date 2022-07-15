const express = require('express');
const teamMembersRouter = express.Router();

const { getAllMembers } = require('../db')

// GET /team_members
teamMembersRouter.get('/', async (req, res, next) => {
    try {
        const members = await getAllMembers();
        res.send(members);
    } catch ({name, message}) {
        next({
            name: "GetTeamMembersError",
            message: "Unable to get team members!"
        })
    }
})

module.exports = teamMembersRouter;