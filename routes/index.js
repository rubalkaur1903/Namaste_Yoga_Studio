const apiRouter = require('express').Router();

const { getAllMembers } = require('../db')

const membersRouter = require('express').Router();
apiRouter.use('/team_members', membersRouter);

// GET /team_members
apiRouter.get('/', async (req, res, next) => {
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

module.exports = apiRouter;