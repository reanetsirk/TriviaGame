$(document).ready(function () {
    $("#start-button").on("click",gameState.startTimer);
});

var gameState = {
    timeRemaining: 30,

    startTimer: function(){
        $("#timer").text("Time remaining; " + gameState.timeRemaining);
        setInterval(gamState.countdown,500);
        $("#start-page").hide();
        triviaQuestions.displayQuestions();

    },
}
var triviaQuestions = {
    question: "Sesame Street was first aired on public braodcasting televsion on what date?",
    answerList: ["November 10, 1969","October 5, 1989", "March 27, 1954,"],
    answer: 0,
}