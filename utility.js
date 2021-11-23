var showBtn = document.getElementById("show-btn"); //start screen
showBtn.addEventListener("click", showGame);
function showGame () {
    startScreen.style.visibility = "hidden";
    grid.style.visibility = "visible";
    playAgainScreen.style.visibility = "hidden";
}

function createRandom (num) { //function to randomly flip grid colors
    let results = Math.floor(Math.random()* num);
    return results;
  }