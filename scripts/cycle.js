let lines = [
  "Following the loss of our home, most of the noble houses became embittered, content to live the lives of scavengers.",
  "They sought to seize the worlds of others under siege by the Darkness, to expel their inhabitants as we ourselves were expelled, to live in the husks of other civilizations bygone. They were the true Fallen.",
  "But some were not like them. Some retained respect for who they were and did not consign themselves to dwelling on what was lost. They cast aside their enmities with one another and created a new vision of civilization.",
  "Where their former compatriots sought to pillage the carcasses of ruined worlds, these individuals set out to begin anew, to construct greatness from nothingness. They discarded their titles and allegiances to the once-great houses and united under a new house, one of their own creation. They would be known as those who faced the Darkness and did not emerge monsters.",
  "And now you stand before them. The House of Embers welcomes you."
];

let line = document.getElementById("cycle");
var lineIndex = 0;
let timing = 10000;
var cycle;

function cycleText() {
  line.innerHTML = lines[lineIndex];
  fadeIn();
  lineIndex = lineIndex + 1;
   if (lineIndex == lines.length + 1) {
     lineIndex = 0;
     clearInterval(cycle);
     line.innerHTML = "";
   }
}

function fadeIn() {
  line.style.opacity = 1;
  setTimeout(fadeOut, timing - 1500);
}

function fadeOut() {
  line.style.opacity = 0;
}

function startCycle() {
  var btn = document.getElementById("btn");
  btn.parentNode.removeChild(btn);
  cycle = setInterval(cycleText, timing);
  var audio = new Audio("./audio/thanos.mp3");
  audio.play();
}
