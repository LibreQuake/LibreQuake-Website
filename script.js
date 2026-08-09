function randomizeSelectionColor() {
  var $pick=~~(Math.random()*359);
  document.querySelector(":root").style.cssText = "--selection-bg-color: hsl(" + $pick + ", 75%, 50%)"; 
}

function playAudio(audioFile) {
  let audioElement = document.getElementById('audioElement');
  audioElement.src = audioFile;
  audioElement.play();
}

function writeYear() {
  var years = document.getElementsByClassName("currentYear");
  var today = new Date();
  var year = today.getFullYear();
  for (var i = 0; i < years.length; i++) {
    years[i].innerHTML = year;
  }
}

function initPage() {
  randomizeSelectionColor();
  writeYear();
}
