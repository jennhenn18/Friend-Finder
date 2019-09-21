// capture input data

// on click of submit button store all selected values
$('.submit').on('click', () => {
    var userAnswerArray = [];
    var answer1 = $('question-1').val().trim();
    var answer2 = $('question-2').val().trim();
    var answer3 = $('question-3').val().trim();
    var answer4 = $('question-4').val().trim();
    var answer5 = $('question-5').val().trim();
    var answer6 = $('question-6').val().trim();
    var answer7 = $('question-7').val().trim();
    var answer8 = $('question-8').val().trim();
    var answer9 = $('question-9').val().trim();
    var answer10 = $('question-10').val().trim();

    // push the user inputs into an array
    userAnswerArray.push(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10);
}); 

