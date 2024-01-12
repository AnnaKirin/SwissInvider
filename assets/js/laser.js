class Laser {
  constructor() {
    this.canvas = canvas;
    this.avatar = this.createPlayerAvatar();
    this.x = 0.5 * this.canvas.clientWidth - 10;
    this.y = 0.3 * this.canvas.clientHeight;
  }
  createPlayerAvatar() {
    let newImage = new Image();
    newImage.src = "assets/images/laser.png";
    return newImage;
  }
  draw(context) {
    context.drawImage(this.avatar, this.x, this.y, 100, 100);
  }
  move() {
    this.y += 0.0005;
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
