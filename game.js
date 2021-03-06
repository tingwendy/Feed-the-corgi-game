var btn = document.getElementById("start-btn");//find input
var gameOverBtn = document.getElementById("game-over-btn"); //find button
var playBtn = document.getElementById("play-btn")
var time = document.getElementById("time");
var score = document.getElementById("score");
var yourScore = document.getElementById("yourScore");
var grid = document.getElementById("grid");
btn.addEventListener("click", gamestart);
playBtn.addEventListener("click", showGame);
var flag = 0; //1 when game starts, 0 when stopped
var sec = 0;
var count = 0;
var yellowbg = new Array();
var corgi = document.getElementsByClassName("square");
const TIMER = 30; //specify time
const LOOP_AMOUNT = 50; //specify amount of times for loop

function gamestart() { 
  flag = 1; count = 0; sec = TIMER;
  score.innerHTML = `Score:0`;
  time.innerHTML = `Time Remaining : ${TIMER} s`;
  btn.removeEventListener("click", gamestart); //prevents clicking again

  var start = setInterval(function () { //start timer, show time left in sec
    if (sec == 0) { 
      clearInterval(start);
      flag = 0;
      btn.addEventListener("click", gamestart);
      grid.style.visibility ="hidden";
      playAgainScreen.style.visibility = "visible";
      yourScore.innerHTML = `Your Score: ${count}`;
    }
    else {
      sec--;
      time.innerHTML = `Time Remaining:${sec}s`;
    }
  }, 1000);

  for (let i = 0; i < LOOP_AMOUNT; i++) { 
    let timeout = createRandom(30000);  
    let table = createRandom(9); //0-8
    let delay= createRandom(3)+1; //change color for 1~3 seconds

    setTimeout(function () { 
      showdog(table, delay, i);
    }, timeout);
  }
}

function showdog(table, delay, id) {
  if (corgi[table].title != "yellow") {
      let next = (table + 1) % 9;
    setTimeout(function () {
      showdog(next, delay, id);
    }, 500);
  }
  else {
    corgi[table].src = "img/corg 2.png";
    corgi[table].title = "corg2";
    corgi[table].alt = id;
    corgi[table].style.backgroundColor = "red";

    yellowbg[id] = setTimeout(function () {
      corgi[table].src = "img/corg.png";
      corgi[table].title = "yellow";
      corgi[table].style.backgroundColor = null;
    }, delay * 1000);
  }
}

function combo(table) {
  if (corgi[table].title == "corg2" && flag ==1) {
    corgi[table].src = "img/corg3.png";
    corgi[table].title = "corg3";
    corgi[table].style.backgroundColor = "blue";
    id = corgi[table].alt;
    clearTimeout(yellowbg[id]); 

    count++; //record score
    score.innerHTML = `Score:${count}`;

    
    setTimeout(function () {
      corgi[table].src = "img/corg.png";
      corgi[table].title = "yellow";
      corgi[table].alt = null;
      corgi[table].style.backgroundColor = null;
    }, 1000);
  }
}

function corgiLoop(corgiArray) {
  console.log("loop")
  for (let i = 0 ; i < corgiArray.length; i++)  {
      const currentCorgi = corgiArray[i]
      currentCorgi.onclick = function(){combo(i)}
      console.log(currentCorgi)
  }
}
corgiLoop(corgi)



