// import npm packages and other js files
const express = require('express');
const path = require('path');
const friends = require('../../app/data/friends');

// create get routes that will send the HTML files to the client

// create route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// create route for survey
app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'survey.html'));
});

// create route to send back all friend data
app.get('/api/friends', (req, res) => {
    return res.json(friends);
});

