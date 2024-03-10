import laserImage from "../images/laser.png"


export class Laser {
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.avatar = this.createPlayerAvatar();
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.state = "ACTIVE";
  }
  createPlayerAvatar() {
    let newImage = new Image();
    newImage.src = laserImage;
    return newImage;
  }
  draw(context) {
    context.drawImage(this.avatar, this.x, this.y, this.w, this.h);
  }
  update() {
    this.y += 10;
    if (this.y > this.canvas.clientHeight) {
      this.state = "INACTIVE";
    }
  }

  isActive() {
    // if (this.state == "INACTIVE") {
    //   return false;
    // } else {
    //   return true;
    // }
    return this.state == "ACTIVE";
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
