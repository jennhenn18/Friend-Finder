// import friends data
let friends = require('../data/friends');

// export data
module.exports = (app) => {
    // create route to post new friend data
    app.post('/api/survey', (req, res) => {
        // create variable to store data from AJAX call
        var newFriend = req.body;
        console.log(friends);

        // push new friend data into the friends array
        friends.push(newFriend);

        // return the json file of the new friend
        res.json(newFriend);
    });
}

