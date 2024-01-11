// function createCloud(canvas) {
//   return {
//     /*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */

//     // avatar: createCloudAvatar(),
//     // x: canvas.clientWidth - 200,
//     // y: 30,
//     // direction: "STOP",

//     // update: function () {
//     //   this.x -= 0.4;
//     //   if (this.x < 0) {
//     //     this.x = canvas.clientWidth + 100;
//     //   }
//     },

//     draw: function (context) {
//       ctx.globalAlpha = 0.5;
//       context.drawImage(this.avatar, this.x, this.y, 100, 100);
//       ctx.globalAlpha = 1;
//     },
//   };
// }

// function createCloudAvatar() {
//   let newImage = new Image();
//   newImage.src = "assets/images/clouds.png";
//   return newImage;
// }

//odwolywanie przez this tylko do pol w objekcie albo klasie

class Cloud {
  constructor(canvas) {
    this.canvas = canvas;
    this.avatar = this.createCloudAvatar();
    this.x = this.canvas.clientWidth - 200;
    this.y = 30;
  }

  createCloudAvatar() {
    let newImage = new Image();
    newImage.src = "assets/images/clouds.png";
    return newImage;
  }
  update() {
    this.x -= 0.4;
    if (this.x < 0) {
      this.x = this.canvas.clientWidth + 100;
    }
  }
  draw(context) {
    context.globalAlpha = 0.5;
    context.drawImage(this.avatar, this.x, this.y, 100, 100);
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
