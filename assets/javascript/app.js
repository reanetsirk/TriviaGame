
$(document).ready(function () {

    // variables
    // start time, time remaining, questions, answers, correct answer, wins, losses, restart
    var wins = 0;
    var losses = 0;
    var unanswered = 0;
    var timeRemaining = 30;
    var triviaQuestions = {
        question1 = {
            question: "Sesame Street was first aired on public braodcasting televsion on what date?",
            answerList: ["November 10, 1969","October 5, 1989", "March 27, 1954,"],
            answer: 0,
            answerText: "Sesame Street was first aired on public braodcasting televsion on Novemeber 10, 1969."
        },
        
         question2 = {
         question: "True or False: The cast of Sesame Street consist of puppets and human characters.",
         answerList: ["True","False"],
         answer: 0,
         answerText: "The cast of Sesame Street consist of puppets and human characters. True."
         },
         
         question3 = {
             question: "Who was the main protagonist of the series and the first Muppet to appear on the show?",
             answerList: ["Oscar the gouch","Big Bird","Elmo"],
             answer: 1,
             answerText: "Big Bird was the main protagonist of the series and the first Muppet to appear on the show."
         },
    }

    $("#startBtn").on("click", function () {
    $(this).hide();
    newGame();
    });


    
});





// $(document).ready(function () {
//     $("#start-button").on("click",gameState.startTimer);
// });

// var gameState = {
//     timeRemaining: 30,

//     startTimer: function(){
//         $("#timer").text("Time remaining; " + gameState.timeRemaining);
//         setInterval(gamState.countdown,500);
//         $("#start-page").hide();
//         triviaQuestions.displayQuestions();

//     },
// }
// var triviaQuestions = {
//     question: "Sesame Street was first aired on public braodcasting televsion on what date?",
//     answerList: ["November 10, 1969","October 5, 1989", "March 27, 1954,"],
//     answer: 0,
// }