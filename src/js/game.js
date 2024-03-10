/* Wypisalismy wszystkie funkcje osobno, zadeklarowalismy zmienne, ktore pozniej beda zainicjalizowane w funkcjach 
Zmienna jest pojemnjkiem na obiekt, przechowuje obiekt

{} obiekt
()=> {} funkcja
finction () {} - funkcja
functon dupa() {} - funkcja

*/
import { Background } from "./background";
import { Moon } from "./moon";
import { Player } from "./player";
import { getRandomInt, getRandomFloat } from "./random";
import { createCow } from "./cow"
import { Laser } from "./laser";
import { Cloud } from "./cloud";


export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.background = new Background(this.canvas, 0, 0);
    this.gameActive = false;
  }

  preload() {
    console.log('preload');
    this.initializeCanvas();
    this.moon = new Moon(this.canvas);
    this.clouds = [];
    this.generateClouds();

    this.intervalID = setInterval(() => {
      this.update();
      // this.clean();
      this.draw();
    }, 16);
  }

  start() {
    this.player = new Player(this.canvas);
    this.cows = [];
    this.generateCows();

    this.lasers = [];
    this.currentTime = Date.now();
    this.previousTime = 0;
    this.deltaTime = 0;
    this.gameActive = true;
  }

  executeOnGameOver(callback) {
    this.gameOverCallback = callback;
  }

  initializeCanvas() {
    let sizeWidth = (80 * window.innerWidth) / 100,
      sizeHeight = (60 * window.innerHeight) / 100;

    this.canvas.width = sizeWidth;
    this.canvas.height = sizeHeight;
    this.canvas.style.width = sizeWidth;
    this.canvas.style.height = sizeHeight;
  }
  generateCows() {
    setTimeout(() => {
      if (this.cows.length < 9) {
        this.cows.push(createCow(this.canvas));
        //jako parametr wywolujemy funkcje, ktora zwroci obiekt (mozemy przekazywac funkcje bez wywolania). Przekazujemy wynik wywolania funkcji a nie sama funkcje
      }

      this.generateCows();
    }, getRandomInt(1000));
  }
  generateClouds() {
    setTimeout(() => {
      if (this.clouds.length < 4) {
        const cloud = new Cloud(
          this.canvas,
          getRandomFloat(0, 200),
          getRandomFloat(50, 200)
        );
        this.clouds.push(cloud);
        this.generateClouds();
      }
    }, getRandomInt(4000));
  }
  clean() {
    this.ctx.fillStyle = "rgba(11, 7, 60, 0.8)";
    this.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
  }


  draw() {
    this.background.draw(this.ctx);
    this.clouds.forEach((cloud) => {
      cloud.draw(this.ctx);
    });
    this.moon.draw(this.ctx);
    if (this.gameActive) {
      this.player.draw(this.ctx);
      this.lasers.forEach((laser) => {
        laser.draw(this.ctx);
      });
      this.cows.forEach((cow) => {
        cow.draw(this.ctx);
      });
    }

  }

  update() {
    this.previousTime = this.currentTime;
    this.currentTime = Date.now();
    this.deltaTime = this.currentTime - this.previousTime;

    this.background.update();
    this.moon.update();
    this.clouds.forEach((cloud) => {
      cloud.update(2);
    });

    if (!this.gameActive) {
      return
    }

    this.player.update(this.deltaTime);

    this.cows.forEach((cow) => {
      cow.update(this.deltaTime);
    });

    this.lasers = this.lasers.filter((laser) => {
      return laser.isActive();
    });

    this.lasers.forEach((laser, index) => {
      laser.update();
      let collisionDetected = false;

      // // // Tablica krowy jest filtrowana czy jest spelniony warunek. Funkcja zwraca true. Filter tworzy nowa
      // // //tablice z krowami dla ktorych isCollision jest false
      this.cows = this.cows.filter((cow) => {
        if (isCollision(laser, cow) && !collisionDetected) {
          this.lasers.splice(index, 1);
          this.player.addPoints(10);
          collisionDetected = true;
          return false;
        } else {
          return true;
        }
      });
    });

    if (!this.player.playerAlive()) {
      this.gameOverCallback();
      clearInterval(this.intervalID);
    }

  }
  moveRight() {
    this.player.moveRight();
  }
  moveLeft() {
    this.player.moveLeft();
  }
  fire() {
    const laser = new Laser(this.canvas, this.player.x, this.player.y + 90);
    this.lasers.push(laser);
    //tworze obiekt lasera, przekazuje jako parametr do metody push, ktora dodaje element do tablicy
  }
  onKeyUp() {
    this.player.stop();
  }
  isGameActive() {
    return this.gameActive;
  }

  getPoints() {
    return this.player.points
  }

} //koniec klasy

function isCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  );
}
