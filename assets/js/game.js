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
let moon;
let cloud1;
let cloud2;
let laser1;

let currentTime = Date.now();
let previousTime = 0;
let cows = [];
let deltaTime;

window.addEventListener("load", onLoad);

function onLoad() {
  initializeCanvas();
  cloud1 = new Cloud(canvas, getRandomFloat(0, 100));
  cloud2 = new Cloud(canvas, getRandomFloat(0, 10));
  laser1 = new Laser(canvas);
  moon = new Moon(canvas);
  player = new Player(canvas);
  generateCows();

  addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      player.moveRight();
    } else if (event.key === "ArrowLeft") {
      player.moveLeft();
    }
  });

  addEventListener("keydown", (event) => {
    if (event.key === " ") {
      laser1.draw(ctx);
      laser1.move();
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
  ctx.fillStyle = "rgba(11, 7, 60, 0.8)";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function draw() {
  // ctx.fillStyle = "rgba(0, 0, 100, 0.5)";
  moon.draw(ctx);
  cloud1.draw(ctx, 200);
  cloud2.draw(ctx, 40);

  // laser1.draw(ctx);

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

  moon.update();
  cloud1.update1(2);
  cloud2.update2(4);
  player.update();
}

function onKeyUp() {
  player.stop();
}

function generateCows() {
  setTimeout(() => {
    if (cows.length < 5) {
      cows.push(createCow(canvas)); //jako parametr wywolujemy funkcje, ktora zwroci obiekt (mozemy przekazywac funkcje bez wywolania). Przekazujemy wynik wywolania funkcji a nie sama funkcje

      generateCows();
    }
  }, getRandomInt(5000));
}
