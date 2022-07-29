const startScreen = document.getElementById("startScreen");
const startQuiz = document.getElementById("startButton");
const choices = document.getElementById("choices")
const question = document.getElementById("question")
// const lastQuestion = questions.length - 1;

let currentQuestionIndex = 0;

// Hides Start Screen, Starts Quiz,
startQuiz.onclick = function () {
    if (startScreen.style.display !== "none") {
        startScreen.style.display = "none";
    } else {
        startScreen.style.display = "block";
    }
    revealQuestion();
};

// edit v


// this function will display the questions
function revealQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    question.innerHTML = currentQuestion.title;
};


// Need timer/score countdown to reveal when click start
function clockTick(){

}
// Need answers to reveal with buttons

// Need answers when clicked to display wrong or right 
// then advance to next question, subtracting 15 seconds 
// from the countdown if incorrect
function answerClick(){

}
// need final screen that triggers when array is finished, 
// with final score/time still displayed
function quizEnd(){

}


// need to store and parse score/time and alias to scores page upon click submit

// need Alias input box
function checkForEnter(event){

}
// need submit button
submitButton.onclick = function saveScore(){

}