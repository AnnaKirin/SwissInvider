const COW_SiZE = 100;
const MAX_COW_SPEED = 1.0;

import { getRandomInt, getRandomFloat } from "./random";
import cowImage0 from "../images/cow0.png"
import cowImage1 from "../images/cow1.png"


export function createCow(canvas) {
  //poczatek funkcji
  return {
    //zaczyna sie obiekt

    // pola
    velocityX: 0.5,
    velocityY: 0.5,
    avatar: createCowAvatar(),
    y: canvas.clientHeight + COW_SiZE,
    x: getRandomInt(canvas.clientWidth),
    w: COW_SiZE,
    h: COW_SiZE,

    // funkcje
    update: function (deltaTime) {
      this.velocityY += 0.0015 * deltaTime;
      this.x = this.x + this.velocityX * deltaTime;
      this.y = this.y + this.velocityY * deltaTime;

      const cowUnderScreen = this.y > canvas.clientHeight + COW_SiZE;

      if (cowUnderScreen) {
        this.onUnderScreen();
      }
      //uderza sie w sciany
      if (this.x + COW_SiZE > canvas.clientWidth) {
        this.velocityX *= -1;
      } else if (this.x < 0) {
        this.velocityX *= -1;
      }
    },

    draw: function (context) {
      //kiedy uzywamy pol w obiekcie korzystamy z takiego zapisu funkcji anonimowej. Uzywamy rowniez slowa this zeby funkcja korzystala ze zmiennych wewnatrz obiektu
      //liczy sie tylko kolejnosc parametrow, nie nazwy. dlatego mozemy uzywac dowolnych nazw parametrow
      context.drawImage(this.avatar, this.x, this.y, COW_SiZE, COW_SiZE);
    },

    onUnderScreen: function () {
      this.x = getRandomInt(canvas.clientWidth - COW_SiZE - 10);
      this.velocityY = -1 * MAX_COW_SPEED;
      this.velocityX = getRandomFloat(-0.25, 0.25);
    },
  }; //konczy sie obiekt
} //koniec funkcji

function createCowAvatar() {
  let newImage = new Image();
  let cowTable = [cowImage0, cowImage1]
  newImage.src = cowTable[getRandomInt(2)];
  return newImage;
}
