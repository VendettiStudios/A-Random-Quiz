const startScreen = document.getElementById("startScreen");
const startQuiz = document.getElementById("startButton");
const choices = document.getElementById("choices");
const question = document.getElementById("question");
const timer = document.getElementById("seconds");
const prompt = document.getElementById("prompt");
const aliasLabel = document.getElementById("aliasLabel");
const submitBtn = document.getElementById("submitBtn");
const aliasInput = document.getElementById("aliasInput");
// const lastQuestion = questions.length - 1
let showTimer;
let seconds = 75;
let questionIndex = 0;
const penalty = 10;
const stop = 0;

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
    alert.setAttribute("class", "has-text-success is-size-1");
    alert.innerHTML = "Correct";
  } else {
    alert.setAttribute("class", "has-text-danger is-size-1");
    alert.innerHTML = "Wrong";
    seconds -= 15;
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
  timer.textContent = "";
  prompt.textContent = "How did you do?";
  const finalScore = document.getElementById("finalScore");
  finalScore.textContent = "Your Final Score Is: " + seconds;
  
  aliasLabel.innerHTML = '<label class="label">Alias</label> <div class ="control"><input class="input" type="text" placeholder="Text input"></div><button class="button is-link">Link</button></div>'; 
//   aliasInput.innerHTML = '<div class ="control"><input class="input" type="text" placeholder="Text input"></div>';
  
  
  

    
  
//   let newDiv = document.createElement("div");
//   let label = document.createElement("label");
//   let newLabelContent = document.createTextNode ("Alias")
//   newDiv.appendChild(label);
//   document.body.appendChild('newDiv');
//   label.appendChild(newLabelContent);

  

  
//   var label = document.createElement("label"); //creating element
//   var labelAppend = document.querySelector("label");
//   labelAppend.textContent = "Alias"; //adding text on the element
//   labelAppend.body.appendChild(CreateMenuItem(label));

  //   let newLabel = document.createElement("label");
  //   let newLabelContent = document.createTextNode ("Alias");
  //   newLabel.appendChild(newLabelContent);
  //   let currentLabel = document.getElementById("labelAlias");
  //   document.body.insertBefore(newLabel, currentLabel);

  //   aliasInput.setAttribute("class","input");
}

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
