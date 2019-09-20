// import path npm package
const path = require('path');

// export data to server.js file
module.exports = (app) => {
    // create get routes that will send the HTML files to the client

    // create route for homepage
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // create route for survey
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // create route to send back all friend data
    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });
}


