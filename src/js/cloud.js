/*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */
//odwolywanie przez this tylko do pol w objekcie albo klasie
import cloudImage from "../images/clouds.png"

export class Cloud {
  constructor(canvas, y, size) {
    this.canvas = canvas;
    this.avatar = this.createCloudAvatar();
    this.x = this.canvas.clientWidth;
    this.y = y;
    this.size = size;
  }

  createCloudAvatar() {
    let newImage = new Image();
    newImage.src = cloudImage;
    return newImage;
  }
  update(x) {
    this.x -= x;
    if (this.size < 100) {
      this.x -= x / 2;
    }
    if (this.x < -300) {
      this.x = this.canvas.clientWidth + 100;
    }
  }

  draw(context) {
    context.globalAlpha = 0.3;
    context.drawImage(this.avatar, this.x, this.y, this.size, this.size);
    context.globalAlpha = 1;
  }
}

// class Dog {
//   constructor(nnn) {
//     this.name = nnn;
//   }

//   bark() {
//     console.log(this.name + " is barking");
//   }
// }

// var azor = new Dog("azor");
// azor.name = "AZOR";
// azor.bark();

// var pluto = new Dog("pluto");
// pluto.bark();
