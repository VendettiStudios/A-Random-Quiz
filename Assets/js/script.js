const startScreen = document.getElementById("startScreen");
const startQuiz = document.getElementById("startButton");
const choices = document.getElementById("choices");
const question = document.getElementById("question");
const timer = document.getElementById("seconds");
const prompt = document.getElementById("prompt");
const aliasLabel = document.getElementById("aliasLabel");

const aliasInput = document.getElementById("aliasInput");
// const lastQuestion = questions.length - 1
let showTimer;
let seconds = 75;
let questionIndex = 0;
const penalty = 10;
const stop = 0;

// Hides Start Screen, Starts Quiz, shows and starts timer
// onclickStartQuiz is optional, naming the function
startQuiz.onclick = function onclickStartquiz() {
  if (startScreen.style.display !== "none") {
    startScreen.style.display = "none";
  } else {
    startScreen.style.display = "block";
  }
  //  reveal timer - start countdown
  showTimer = setInterval(startCountdown, 1000);
  timer.textContent = seconds;
  revealQuestion();
};

//   start countdown function
function startCountdown() {
  seconds--;
  timer.textContent = seconds;

  if (seconds <= 0) {
    endQuiz();
  }
}
// renders first question and choices in array
function revealQuestion() {
  question.innerHTML = "";
  // renders current question
  let currentQuestion = questions[questionIndex].title;
  let currentChoices = questions[questionIndex].choices;
  question.innerHTML = currentQuestion;
  // renders current choices
  choices.innerHTML = "";
  currentChoices.forEach(function (choice) {
    // adds button to each choice
    let choiceList = document.createElement("button");
    choiceList.setAttribute("type", "choice");
    choiceList.setAttribute("class", "button is-focused has-text-weight-bold is-rounded is-inverted is-outlined is-small p-4 ");
    choiceList.textContent = choice;
    choices.appendChild(choiceList);
    choiceList.onclick = choiceClick;
  });
}

// click a choice, checks if answer is correct, -15 if incorrect -> next page
function choiceClick() {
  let answer = questions[questionIndex].answer;
  let alert = document.getElementById("alert");
  if (this.textContent === answer) {
    alert.classList.add("has-text-success");
    alert.innerHTML = "Correct";
    alert.classList.remove("has-text-danger");
  } else {
    alert.classList.remove("has-text-success");
    alert.classList.add("has-text-danger");
    alert.innerHTML = "Wrong";   
    seconds -= penalty;
  }
  setTimeout(function () {
    alert.innerHTML = "";
  }, 2000);
  questionIndex++;
  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    revealQuestion();
  }
}

function endQuiz() {
  clearInterval(showTimer);
  question.innerHTML = "";
  choices.innerHTML = "";
  prompt.textContent = "How did you do?";
  const finalScore = document.getElementById("finalScore");
  finalScore.textContent = "Your Final Score Is: " + seconds;
  aliasLabel.innerHTML = `
    <label class="label">Alias:</label> 
    <div class ="control">
        <input id="aliasInput" class="input" type="text"  placeholder="Enter Alias">
    </div>
    <div class = "has-text-centered pt-2">
    <button id="submitBtn" class="button is-info">Submit</button>
    </div>
    `;
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = onclickSbmtbtn;
}

function onclickSbmtbtn() {
  const currentHighscores =
    JSON.parse(window.localStorage.getItem("highscores")) || [];
  const aliasInput = document.getElementById("aliasInput");
  const alias = aliasInput.value;
  const newScore = {
    alias,
    score: seconds,
  };
  currentHighscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(currentHighscores));
  window.location.href = "scores.html";
};

// 1.  Create a Timer for 75 seconds, Timer is Score
// 2.  display control for starting the quiz
// 3.  once quiz starts, start the countdown,
// 4.  Display first question, choices,
// 5.  Display controls for each choice,
// 6.  If the choice was correct, correct message displays,
//     If the choice was wrong, wrong message
//     If the choice was correct, Display next question and choices,
//     If the choice was wrong, subtract 15 seconds from the time,
// 7.  Display next question and choices,
// 8.  repeat this for 5 questions
// 9.  When the last question is answered, the timer is stopped,
// 10. Display final score page
// 11. Display a input box allowing the user to enter a alias
// 12. Display a control allowing player to submit their score and alias,
// 13. Once submitted, Display scores to player, in a list with highest score at the top
// 14. Display a control for clearing scores
// 15. Display a control for restarting
