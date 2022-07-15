const apiRouter = require('express').Router();


// apiRouter.get("/", (req, res, next) => {
//     res.send({
//         message: "API is under construction!"
//     });
// });

const membersRouter = require('./members')
apiRouter.use('/team_members', membersRouter);

apiRouter.use((error, req, res, next) => {
    console.error(error)
    res.status(400)
    res.send(error);
});

module.exports = apiRouter;