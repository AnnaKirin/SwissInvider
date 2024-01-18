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
let clouds = [];

let currentTime = Date.now();
let previousTime = 0;
let cows = [];
let deltaTime;
let lasers = [];
let background;

window.addEventListener("load", onLoad);
console.log("page is fully loaded");

function onLoad() {
  initializeCanvas();
  // cloud1 = new Cloud(canvas, getRandomFloat(0, 100));
  // cloud2 = new Cloud(canvas, getRandomFloat(0, 10));
  moon = new Moon(canvas);
  player = new Player(canvas);
  background = new Background(canvas, 0, 0);
  generateCows();
  debugger;
  generateClouds();

  addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      player.moveRight();
    } else if (event.key === "ArrowLeft") {
      player.moveLeft();
    } else if (event.key === " ") {
      const laser = new Laser(canvas, player.x, player.y);
      lasers.push(laser); //tworze obiekt lasera, przekazuje jako parametr do metody push, ktora dodaje element do tablicy
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
  background.draw(ctx);
  moon.draw(ctx);
  player.draw(ctx);

  // cloud1.draw(ctx, 200);
  // cloud2.draw(ctx, 40);

  lasers.forEach((laser) => {
    laser.draw(ctx);
  });

  clouds.forEach((cloud) => {
    cloud.draw(ctx, 200);
  });

  cows.forEach((cow) => {
    cow.draw(ctx);
  });
}

function update() {
  previousTime = currentTime;
  currentTime = Date.now();
  deltaTime = currentTime - previousTime;

  background.update();
  cows.forEach((cow) => {
    cow.update();
  });

  moon.update();
  // cloud1.update1(2);
  // cloud2.update2(4);
  player.update();

  clouds.forEach((cloud) => {
    cloud.update(2);
  });

  lasers.forEach((laser) => {
    laser.update();
  });
  lasers = lasers.filter((laser) => {
    //
    return laser.isActive();
  });
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

function generateClouds() {
  setTimeout(() => {
    if (clouds.length < 4) {
      const cloud = new Cloud(canvas, getRandomFloat(0, 100));
      clouds.push(cloud);
    }
  });
}
