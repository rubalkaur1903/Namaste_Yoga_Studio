const apiRouter = require('express').Router();


apiRouter.get("/", (req, res, next) => {
    res.send({
        message: "API is under construction!"
    });
});

const membersRouter = require('./members')
apiRouter.use('/team_members', membersRouter);

module.exports = apiRouter;