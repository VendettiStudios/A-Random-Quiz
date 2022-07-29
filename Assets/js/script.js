const startScreen = document.getElementById("startScreen");
const startQuiz = document.getElementById("startButton");
let currentQuestionIndex = 0;
// const questions = document.getElementById("questions");

// Hides Start Screen, Starts Quiz,
startQuiz.onclick = function () {
  if (startScreen.style.display !== "none") {
    startScreen.style.display = "none";
  } else {
    startScreen.style.display = "block";
  }

 

};