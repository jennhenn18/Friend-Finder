// import npm packages and other js files
const express = require('express');
const path = require('path');
const friends = require('../../app/data/friends');
const server = require('../../server');

// create route to post new friend data
server.app.post('/api/survey', (req, res) => {
    // create variable to store data from AJAX call
    var newFriend = req.body;

    // push new friend data into the friends array
    friends.push(newFriend);

    // return the json file of the new friend
    res.json(newFriend);
});