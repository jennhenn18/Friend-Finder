// import npm packages and other js files
const express = require('express');
const path = require('path');
const friends = require('./app/data/friends.js');
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

// create an instance of express
const app = express();

// create PORT
const PORT = process.env.PORT || 5000;

// create middleware functions
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// create a listener
app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));

// export data
module.export = app;