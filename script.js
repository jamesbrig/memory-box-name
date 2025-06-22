let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;

function updateScoreDisplay() {
  document.getElementById("scoreText").textContent = `Wins: ${wins} | Losses: ${losses}`;
}

updateScoreDisplay(); // Initial display


    let count = 0;
    let grades = [];
    let numbers = [];

    function getLevel() {
      return parseInt(document.getElementById("level").value);
    }
function highlight(pick){
    grades.push(pick);
  document.getElementById("num" + pick).style.backgroundImage = "url('images/checkmark.png')";
count++;
if(count === 1){
const audio = new Audio('sounds/one.mp3');
audio.play();
}
else if(count === 2){
const audio = new Audio('sounds/two.mp3');
audio.play();
}
else if(count === 3){
const audio = new Audio('sounds/three.mp3');
audio.play();
}
else if(count === 4){
const audio = new Audio('sounds/four.mp3');
audio.play();
}
else if(count === 5){
const audio = new Audio('sounds/five.mp3');
audio.play();
}
else if(count === 6){
const audio = new Audio('sounds/six.mp3');
audio.play();
}
else if(count === 7){
const audio = new Audio('sounds/seven.mp3');
audio.play();
}
else if(count === 8){
const audio = new Audio('sounds/eight.mp3');
audio.play();
}
else{
const audio = new Audio('sounds/nine.mp3');
audio.play();
}
}


    function getCompare() {
      return grades.length === numbers.length && grades.every((val, i) => val === numbers[i]);
    }

   function getResults() {
  const correct = getCompare();

  if (correct) {
wins++;
localStorage.setItem("wins", wins);
    alert("Great job! You got it right!");

    triggerExplosion();       // Play explosion GIF
    playFireworksSound();     // Play fireworks sound
    playCongrats();           // Play woman saying "Congratulations"
 setTimeout(() => {
    location.reload();
  }, 4000);
  

  } else {
losses++;
	localStorage.setItem("losses", losses);
    alert("Try again! You can do it!!!");
    playTryAgain();
}
updateScoreDisplay();

 setTimeout(() => {
    location.reload();
  }, 4000);
  

}


    async function start() {
      const level = getLevel();
      grades = [];
      numbers = [];
      count = 0;

      while (numbers.length < level) {
        const num = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(num)) numbers.push(num);
      }

      for (let x = 0; x < numbers.length; x++) {
        const val = numbers[x];
        document.getElementById("num" + val).style.backgroundColor = "green";
        const audio = new Audio('sounds/clickingsound.mp3');
        audio.play();
        await sleep(1000);
      }
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function triggerExplosion() {
      const explosion = document.getElementById("explosionImage");
      explosion.style.display = "none";
      explosion.offsetHeight; // force reflow to reset gif
      explosion.style.display = "block";


    }
function playFireworksSound() {
  const sound = new Audio('sounds/fireworks.mp3');
  sound.play();
}
function playCongrats(){
	const happy = new Audio('sounds/congrats.mp3');
	happy.play(); 
}

function playTryAgain() {
  const audio = new Audio('sounds/tryagain.mp3');
  audio.play();

}

