const express = require('express');
const server = express();

// here's the API
server.use('/api', require('./routes'))

//create logs for everything
const morgan = require('morgan');
server.use(morgan('dev'));

//handle application/JSON requests
const bodyParser = require('body-parser');
server.use(bodyParser.json());

const cors = require('cors');
server.use(cors());

// here's our static files
const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

// here's the API
server.use('/api', require('./routes'))

// by default serve up the react app if we don't recognize the route
server.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


// bring in the DB connection
const { client } = require('./db/client')

//connect to the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}!`);

    try {
        await client.connect();
        console.log("Database is open for business!!")
    } catch (error) {
        console.error("Database is closed for repairs!\n", error)
    }
})