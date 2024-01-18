/*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */
//odwolywanie przez this tylko do pol w objekcie albo klasie

class Cloud {
  constructor(canvas, y) {
    this.canvas = canvas;
    this.avatar = this.createCloudAvatar();
    this.x = this.canvas.clientWidth;
    this.y = y;
    this.size;
  }

  createCloudAvatar() {
    let newImage = new Image();
    newImage.src = "assets/images/clouds.png";
    return newImage;
  }
  update(x) {
    this.x -= x;
    if (this.x < -200) {
      this.x = this.canvas.clientWidth + 100;
    }
  }

  update2(x) {
    this.x -= x;
    if (this.x < -200) {
      this.x = this.canvas.clientWidth + 100;
    }
  }
  draw(context, size) {
    context.globalAlpha = 0.3;
    context.drawImage(this.avatar, this.x, this.y, size, size);
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
