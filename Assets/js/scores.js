window.onload = function () {
  const currentHighscores =
    JSON.parse(window.localStorage.getItem("highscores")) || [];
  const highscoreList = document.getElementById("highscoresList");
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
    highscoreList.appendChild();
  }
};
