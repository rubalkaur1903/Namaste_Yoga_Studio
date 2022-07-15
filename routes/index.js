const apiRouter = require('express').Router();

apiRouter.get("/", (req, res, next) => {
    res.send({
      message: "API is under construction!"
    });
});

const teamMembersRouter = require('./team_members')
apiRouter.use('/team_members', teamMembersRouter);

module.exports = apiRouter;