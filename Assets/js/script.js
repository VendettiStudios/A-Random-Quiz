const startScreen = document.getElementById("startScreen");
const startQuiz = document.getElementById("startButton");
const choices = document.getElementById("choices");
const question = document.getElementById("question");
const timer = document.getElementById("seconds");
// const lastQuestion = questions.length - 1
let showTimer;
let seconds = 75;
let questionIndex = 0;
const penalty =15





// Hides Start Screen, Starts Quiz, shows and starts timer
startQuiz.onclick = function () {
  if (startScreen.style.display !== "none") {
    startScreen.style.display = "none";
  } else {
    startScreen.style.display = "block";
  }
//  reveal timer - start countdown
  showTimer = setInterval(startCountdown, 1000);
  timer.textContent = seconds;
  revealQuestion();

//   start countdown function
  function startCountdown() {
    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {
    //   endQuiz();
    }
  }
  // renders first question and choices in array
  function revealQuestion() {
    // renders current question
    let currentQuestion = questions[questionIndex].title;
    let currentChoices = questions[questionIndex].choices;
    question.innerHTML = currentQuestion;
    // renders current choices
    choices.innerHTML = "";
    currentChoices.forEach(function(choice){
        // adds button to each choice
        let choiceList = document.createElement("button");
        choiceList.setAttribute("type", "choice");
        choiceList.textContent = choice;
        choices.appendChild(choiceList);
        choiceList.onclick = choiceClick;
    })
  }
};

// click a choice, checks if answer is correct, -15 if incorrect -> next page 
function choiceClick(){ 
    let answer = questions[questionIndex].answer;
    // checks if chosen answer is correct
//     if(this.textContent === answer) {
//     console.log(true);
    
// }
//     if(this.textContent !== answer) {
//     console.log(false);
//     seconds-=penalty;
//     alert.innerHTML = ("Correct");
// }
let alert = document.getElementById("alert");
if(this.textContent===answer){
    alert.setAttribute("class", "has-text-success is-size-1")
    alert.innerHTML = ("Correct");
    
} else {
    alert.setAttribute("class", "has-text-danger is-size-1")
    alert.innerHTML = ("Wrong");
    seconds-=15;
}

}
console.log(choiceClick)











// 1. Create a Timer for 75 seconds, Timer is Score
// 2. display control for starting the quiz
// 3. once quiz starts, start the countdown, 
// 4. Display first question, choices, 
// 5. Display controls for each choice,
// 6. If the choice was correct, correct message displays, 
//    If the choice was wrong, wrong message
//    If the choice was correct, Display next question and choices, 
//    If the choice was wrong, subtract 15 seconds from the time, 
// 7.   Display next question and choices,
// 8. repeat this for 5 questions
// 9. When the last question is answered, the timer is stopped,
// 10. Display final score page
// 11.Display a input box allowing the user to enter a alias
// 12.Display a control allowing player to submit their score and alias,
// 13.Once submitted, Display scores to player, in a list with highest score at the top
// 14.Display a control for clearing scores
// 15. Display a control for restarting
// 