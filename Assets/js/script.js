const quiz = document.getElementsById('quiz'); 
const results = document.getElementById('results');
const startBtn = document.getElementById('startBtn');
const timer = document.getElementById('timer');
const seconds = document.getElementById('seconds')

function clockTick() {
    // time updates
    sec--;
    timerEl.textContent = sec;
    // checks time remaining
    if (sec <= 0) {
        quizEnd();
    }
}

// Start Page

// Click Start button and first 
// question displays and 75 second 
// timer begins counting down, 

// When answer is chosen, displays
// whether correct or incorrect. 

// If answer is incorrect, - 15 seconds/score

// when quiz is finished, time left = score
