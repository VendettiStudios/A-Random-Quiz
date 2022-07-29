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
    //  timer = setInterval(clockTick, 1000);
    //  timerEl.textContent = sec;
    revealQuestion();
};
// Start Timer




// this function will display the questions
function revealQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    question.innerHTML = currentQuestion.title;
};
