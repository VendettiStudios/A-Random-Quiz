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

// this function will display the questions
function revealQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    question.innerHTML = currentQuestion.title;
};


// Need timer function to reveal

// Need answers to reveal with buttons

// Need answers when clicked to display wrong or right 
// then forward to next question, subtracting 15 seconds 
// if incorrect

// need final screen

// need Alias input box

// need to store and parse score and alias to scores page