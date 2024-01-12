class Laser {
  constructor() {
    this.canvas = canvas;
    this.avatar = this.createPlayerAvatar();
    this.x = 0.5 * this.canvas.clientWidth - 10;
    this.y = 0.3 * this.canvas.clientHeight;
    this.state = "ACTIVE";
  }
  createPlayerAvatar() {
    let newImage = new Image();
    newImage.src = "assets/images/laser.png";
    return newImage;
  }
  draw(context) {
    context.drawImage(this.avatar, this.x, this.y, 100, 100);
  }
  update() {
    this.y += 5;
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
