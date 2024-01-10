/* Wypisalismy wszystkie funkcje osobno, zadeklarowalismy zmienne, ktore pozniej beda zainicjalizowane w funkcjach 
Zmienna jest pojemnjkiem na obiekt, przechowuje obiekt

{} obiekt
()=> {} funkcja
finction () {} - funkcja
functon dupa() {} - funkcja

*/

let canvas;
let ctx;

let player;
let cloud;

let currentTime = Date.now();
let previousTime = 0;
let cows = [];
let deltaTime;

window.addEventListener("load", onLoad);

function onLoad() {
  initializeCanvas();
  cloud = createCloud(canvas);
  console.log("cloud was drawn");
  player = createPlayer(canvas);
  generateCows();

  addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      player.moveRight();
    } else if (event.key === "ArrowLeft") {
      player.moveLeft();
    }
  });

  addEventListener("keyup", onKeyUp);

  setInterval(() => {
    update();
    clean();
    draw();
  }, 16);
}

function initializeCanvas() {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  let sizeWidth = (80 * window.innerWidth) / 100,
    sizeHeight = (60 * window.innerHeight) / 100;

  canvas.width = sizeWidth;
  canvas.height = sizeHeight;
  canvas.style.width = sizeWidth;
  canvas.style.height = sizeHeight;
}

function clean() {
  ctx.fillStyle = "rgba(11, 7, 106, 0.8)";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function draw() {
  // ctx.fillStyle = "rgba(0, 0, 100, 0.5)";
  cloud.draw(ctx);

  player.draw(ctx);

  cows.forEach((cow) => {
    cow.draw(ctx);
  });
}

function update() {
  previousTime = currentTime;
  currentTime = Date.now();
  deltaTime = currentTime - previousTime;

  cows.forEach((cow) => {
    cow.update();
  });

  cloud.update();
  player.update();
}

function onKeyUp() {
  player.stop();
}

function generateCows() {
  setTimeout(() => {
    if (cows.length < 10) {
      cows.push(createCow(canvas)); //jako parametr wywolujemy funkcje, ktora zwroci obiekt (mozemy przekazywac funkcje bez wywolania). Przekazujemy wynik wywolania funkcji a nie sama funkcje

      generateCows();
    }
  }, getRandomInt(5000));
}
