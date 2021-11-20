var showBtn = document.getElementById("show-btn");
showBtn.addEventListener("click", showGame);
function showGame () {
    startScreen.style.visibility = "hidden";
    grid.style.visibility = "visible";
    playAgainScreen.style.visibility = "hidden";
}

function createRandom (num) {
    let results = Math.floor(Math.random()* num);
    return results;
  }