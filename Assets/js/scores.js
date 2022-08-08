const highscoreList = document.getElementById("highscoresList");
const clearScores = document.getElementById("clearScores");
window.onload = function () {
  const currentHighscores =
    JSON.parse(window.localStorage.getItem("highscores")) || [];
  for (let i = 0; i < currentHighscores.length; i++) {
    const highscore = document.createElement("li");
    highscore.innerHTML = `
            <span>
                ${currentHighscores[i].alias}
            </span>
            <span>
                ${currentHighscores[i].score}
            </span>
        `;
    highscoreList.appendChild(highscore);
  }
};


clearScores.onclick=function(){
    window.localStorage.removeItem("highscores");
    highscoreList.innerHTML = "";
}
