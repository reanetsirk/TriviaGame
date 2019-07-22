$('#startBtn').on('click', function () {
    game.start()
    console.log ("start*****");
})
$(document).on('click', '#end', function () {
    game.done();
});

var triviaQuestions = [{
        question: "Sesame Street was first aired on public braodcasting televsion on what date?",
        answerList: ["November 10, 1969", "October 5, 1989", "March 27, 1954,"],
        correctAnswer: 0,
        answerText: "Sesame Street was first aired on public braodcasting televsion on Novemeber 10, 1969."
    },
    {
        question: "True or False: The cast of Sesame Street consist of puppets and human characters.",
        answerList: ["True", "False"],
        correctAnswer: 0,
        answerText: "The cast of Sesame Street consist of puppets and human characters. True."
    },

    {
        question: "Who was the main protagonist of the series and the first Muppet to appear on the show?",
        answerList: ["Oscar the gouch", "Big Bird", "Elmo"],
        correctAnswer: 1,
        answerText: "Big Bird was the main protagonist of the series and the first Muppet to appear on the show."
    }
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter
        console.log ("countdown------------------------" + game.counter);
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Your time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subWrapper').prepend('<h2>Time Left: <span id= "counter" >120</span> Seconds</h2>');

        $('#startBtn').remove();
        for (var i = 0; i < triviaQuestions.length; i++) {
            $('#subWrapper').append(triviaQuestions[i].question);
            for (var j = 0; j < triviaQuestions[i].answerList.length; j++) {
                $("#subWrapper").append("<input type='radio' name='question-" + i + " 'value='" + triviaQuestions[i].answerList[j] + "'>" + triviaQuestions[i].answerList[j]);
            }
        }
        $('#subWrapper').append('<br><button id="end">Done</button>');
    },
    done: function () {
        var value = $("input:checked")

        for(var i = 0; i < value.length; i++){
            // get the question index from name attribute
            // split("-") -> question-0 -> ['question', '0']
            // ['question', '0'][1] -> '0'
            var index = $(value[i]).attr("name").split("-")[1];

            // get the value of the html element
            var item = $(value[i]).val();

            // make variable to hold current question
            var question = triviaQuestions[parseInt(index)];

            // make variable holding position of current guess
            var guess = question.answerList.indexOf(item);

            // make variable holding currect answer
            var correct = question.correctAnswer;

            // make variable for answer text
            var response = question.answerText;
    
            if(guess === correct){
                console.log(response)
            } else {
                console.log("You got question " + name + " wrong!")
            }
        }


        // $.each(value, function(){
        //     // get the question index from name attribute
        //     var name = $(this).attr("name").split("-")[1];
        //     // get the value of the html element
        //     var item = $(this).val();
        //     // make variable holding position of current guess
        //     var guess = triviaQuestions[parseInt(name)].answerList.indexOf(item);
        //     // make variable holding currect answer
        //     var correct = triviaQuestions[parseInt(name)].correctAnswer;
        //     // make variable for answer text
        //     var response = triviaQuestions[parseInt(name)].answerText;

        //     if(guess === correct){
        //         console.log(response)
        //     } else {
        //         console.log("You got question " + name + " wrong!")
        //     }
        // })


        // $.each($('input[name="question-0]":checked'), function () {
        //     if ($(this).val() == triviaQuestions[0].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });
        // $.each($('input[name="question-1]":checked'), function () {
        //     if ($(this).val() == triviaQuestions[1].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });
        // $.each($('input[name="question-2]":checked'), function () {
        //     if ($(this).val() == triviaQuestions[2].correctAnswer) {
        //         game.correct++;
        //     } else {
        //         game.incorrect++;
        //     }
        // });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subWrapper h2').remove();

        $('#subWrapper').html("<h2>All Finished</h2>");
        $('#subWrapper').append("<h3>Correct:" + this.correct + "</h3>");
        $('#subWrapper').append("<h3>Incorrect:" + this.incorrect + "</h3>");
        $('#subWrapper').append("<h3>Unanswered:" + triviaQuestions.length - ((this.incorrect + this.correct)) + "</h3>");
        console.log("triviaQuestions.length=" + triviaQuestions.length);
        console.log("this.correct="  + this.correct);
        console.log("this.incorrect="  + this.incorrect);
    }

    
}
// ...........................

// $(document).ready(function () {

//     // variables
//     // start time, time remaining, questions, answers, correct answer, wins, losses, restart
//     var currentQuestion = 0;   
//     var correct = 0;
//     var incorrect = 0;
//     var unanswered = 0;
//     var timeRemaining = 30;
//     var gifArray = ["question1", "question2", "question3"],
//     var message = {
//         correct: "Correct Answer!",
//         incorrect: "Incorrect Answer!",
//         endTime: "Times Up!",
//         finished: "Your Results",
//     }
//     var triviaQuestions = {
//         question1 : {
//             question: "Sesame Street was first aired on public braodcasting televsion on what date?",
//             answerList: ["November 10, 1969","October 5, 1989", "March 27, 1954,"],
//             answer: 0,
//             answerText: "Sesame Street was first aired on public braodcasting televsion on Novemeber 10, 1969."
//         },

//          question2 : {
//          question: "True or False: The cast of Sesame Street consist of puppets and human characters.",
//          answerList: ["True","False"],
//          answer: 0,
//          answerText: "The cast of Sesame Street consist of puppets and human characters. True."
//          },

//          question3 : {
//              question: "Who was the main protagonist of the series and the first Muppet to appear on the show?",
//              answerList: ["Oscar the gouch","Big Bird","Elmo"],
//              answer: 1,
//              answerText: "Big Bird was the main protagonist of the series and the first Muppet to appear on the show."
//          },
//     }

//     $('#startBtn').on('click', function () {
//     $(this).hide();
//     newGame();
//     });


//     $('#startOverBtn').on('click', function (){
//         $(this).hide();
//         newGame();
//     });
// function newGame(){
// $("#game").show();
// $("#correct").empty();
// $("#incorrect").empty();
// $("#unanswered").empty();
// $("#gif").hide();
// $("#gifCaption").hide();
// currentQuestion
// correct
// incorrect
// unanswered
// newQuestion();

// }
// function newQuestion(){
//     $("#message").empty();
//     $("#correct").empty();
//     $("#gif").hide();
//     $("#gifCaption").hide();
//     answer = true;

// }
//     $("#correct").html("Question" + (correct+1) + "of" + triviaQuestions.length);
//   $(".question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");

//   for(var i = 0; i < 2; i++) {
// var choices = $("<div>");
// choices.text(triviaQuestions[currentQuestion].answerList[i]);
// 		choices.attr({'data-index': i });
// 		choices.addClass('thisChoice');
// 		$('.answerList').append(choices);
//   }

// });



//   ........................

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