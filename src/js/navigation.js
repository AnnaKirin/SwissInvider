export function onStart() {
  var gameContainer = document.getElementById("gameContainer");
  //Elements oznacza tablice elementow. Trzeba odwolac sie do konkretnego elementu
  gameContainer.style.visibility = "visible";
  document.getElementById("playButton").style.visibility = "hidden";
  document.getElementById("gameRating").style.left = "-9999px";
}

export function onGameOver(gameInstance) {
  var gameContainer = document.getElementById("gameContainer");
  gameContainer.style.visibility = "hidden";
  document.getElementById("playButton").style.cssText = `
  visibility:visible; 
  transform: translate(0px, 50px)`

  document.getElementById("gameRating").style.left = "20%";
  document.getElementById("gameRating").style.right = "20%";
}

export function onKeyUp(event, gameInstance) {
  if (!gameInstance.isGameActive()) {
    return;
  }
  if (event.key === "ArrowRight") {
    gameInstance.onKeyUp();
  } else if (event.key === "ArrowLeft") {
    gameInstance.onKeyUp();
  } else if (event.key === " ") {
    gameInstance.onKeyUp();
  }
}

export function onKeyDown(event, gameInstance) {
  if (!gameInstance.isGameActive()) {
    return; //return wychodzi z funkcji i nie kontynuje sprawdzania kolejnych warunkow
  }
  if (event.key === "ArrowRight") {
    gameInstance.moveRight();
  } else if (event.key === "ArrowLeft") {
    gameInstance.moveLeft();
  } else if (event.key === " ") {
    gameInstance.fire();
  }
}

export function getBestPlayers() {
  return [1, 2, 3, 4, 5, 6];
}

