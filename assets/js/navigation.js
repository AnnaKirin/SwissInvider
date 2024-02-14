let canvas;
let game;

function preLoad() {
  game.preload()
}

function onStart() {
  var gameContainer = document.getElementById("gameContainer");
  //Elements oznacza tablice elementow. Trzeba odwolac sie do konkretnego elementu
  gameContainer.style.visibility = "visible";
  document.getElementById("controlContainer").style.visibility = "hidden";
  game.start();

}

function onGameOver() {
  var gameContainer = document.getElementById("gameContainer");
  gameContainer.style.visibility = "hidden";
  document.getElementById("controlContainer").style.visibility = "visible";
  document.getElementById("gameRating").style.visibility = "visible";
}

function onKeyUp(event) {
  if (!game.isGameActive()) {
    return;
  }
  if (event.key === "ArrowRight") {
    game.onKeyUp();
  } else if (event.key === "ArrowLeft") {
    game.onKeyUp();
  } else if (event.key === " ") {
    game.onKeyUp();
  }
}

function onKeyDown(event) {
  if (!game.isGameActive()) {
    return; //return wychodzi z funkcji i nie kontynuje sprawdzania kolejnych warunkow
  }
  if (event.key === "ArrowRight") {
    game.moveRight();
  } else if (event.key === "ArrowLeft") {
    game.moveLeft();
  } else if (event.key === " ") {
    game.fire();
  }
}
