// import friends data
let friends = require('../data/friends');

// export data
module.exports = (app) => {
    // create route to post new friend data
    app.post('/api/survey', (req, res) => {
        console.log(typeof req.body.userinput)
        // var currentTotalDifferenceMatch = 0;
        // var bestMatch;

        // // iterate over friends
        // for (let i = 0; i < friends.length; i++) {
        //     const currentFriend = friends[i];
        //     var totalDifference = 0;

        //     // nested loop - iterate over existing friends score
        //     for (let j = 0; j < currentFriend.scores.length; j++) {
        //         // calcuate the total difference
        //         totalDifference += Math.abs(currentFriend.scores[j] - req.body.userinput[j]);
        //     }
        //     // check this calcuated total diffrence against the temp total difference for best match
        //     if (totalDifference < currentTotalDifferenceMatch) {
        //         currentTotalDifferenceMatch = totalDifference
        //         bestMatch = currentFriend;
        //     }
        // }
        // // return bestMatch
        // console.log(bestMatch)
    });
}
