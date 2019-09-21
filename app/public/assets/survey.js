// import friends.js data
var friends = require('../../data/friends.js');

// on click of submit button store all selected values
$('.submit').on('click', () => {
    
    var answer1 = $('#question-1 [name=question1]:checked').val();
    var answer2 = $('#question-2 [name=question2]:checked').val();
    var answer3 = $('#question-3 [name=question3]:checked').val();
    var answer4 = $('#question-4 [name=question4]:checked').val();
    var answer5 = $('#question-5 [name=question5]:checked').val();
    var answer6 = $('#question-6 [name=question6]:checked').val();
    var answer7 = $('#question-7 [name=question7]:checked').val();
    var answer8 = $('#question-8 [name=question8]:checked').val();
    var answer9 = $('#question-9 [name=question9]:checked').val();
    var answer10 = $('#question-10 [name=question10]:checked').val();

    // store user answer as a string
    var userAnswerStr = answer1 + ',' + answer2  + ',' + answer3 + ',' + answer4 + ',' + answer5 + ',' + answer6 + ',' + answer7 + ',' + answer8 + ',' + answer9 + ',' + answer10;

    // change the string values into an array of numbers
    var userAnswerArray = userAnswerStr.split(',').map(Number);

    // run calculate score function
    totalDifference(userAnswerArray);
}); 

// create a function to find the total difference between the userArray and the Friends characters
function totalDifference(userAnswerArray) {

    // store friends scores in an array
    var rachelArray = friends[0].scores;
    var monicaArray = friends[1].scores;
    var chandlerArray = friends[2].scores;
    var pheobeArray = friends[3].scores;
    var joeyArray = friends[4].scores;
    var rossArray = friends[5].scores;


    // compare UserArray to rachelArray
        // read through the userArray
        for (let i = 0; i < userAnswerArray.length; i++) {
            const userScore = userAnswerArray[i]
            // read through each friend array
            for (let r = 0; r < rachelArray.length; r++) {
                // if the index # does not match the index # of the friend character find the difference and stores that in an array
                if (!userScore[i] === rachelArray[r]) {
                    var rdifference = Math.abs(userScore[i] - rachelArray[r]);
                } else {
                    return// if the index # matches the index # of the friend character do nothing
                }
                // at the end of it all calculate the sum of the differences, store in a variable or array
            }
            
        }

  

  

    // at the end loop through the entire array and return the lowest number

    var match = ''

    // trigger modal function
    displayModal(match);

}
 

// create modal function that returns the Friends character information
function displayModal() {

    // if the match is = to Rachel trigger the modal 
    if (match === 'rachel') {
        $('matchName').html(friends[0].name)
        $('matchImage').attr('src', friends[0].image)
        // show modal
        $('.modal').show();

    // if the match is = to Monica trigger the modal
    } else if (match === 'monica') {
        $('matchName').html(friends[1].name)
        $('matchImage').attr('src', friends[1].image)
        // show modal
        $('.modal').show();

    // if the match is = to Chandler trigger the modal
    } else if (match === 'chandler') {
        $('matchName').html(friends[2].name)
        $('matchImage').attr('src', friends[2].image)
        // show modal
        $('.modal').show();

    // if the match is = to Pheobe trigger the modal
    } else if (match === 'phoebe') {
        $('matchName').html(friends[3].name)
        $('matchImage').attr('src', friends[3].image)
        // show modal
        $('.modal').show();
    
    // if the match is = to Joey trigger the modal
    } else if (match === 'joey') {
        $('matchName').html(friends[4].name)
        $('matchImage').attr('src', friends[4].image)
        // show modal
        $('.modal').show();
    
    // if the match is = to Ross trigger the modal
    } else if (match === 'ross') {
        $('matchName').html(friends[5].name)
        $('matchImage').attr('src', friends[5].image)
        // show modal
        $('.modal').show();
    }
}