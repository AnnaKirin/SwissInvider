function createCloud(canvas) {
  return {
    /*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */

    avatar: createCloudAvatar(),
    x: canvas.clientWidth - 200,
    y: canvas.clientHeight - 600,
    direction: "STOP",

    update: function () {
      this.x -= 0.4;
      if (this.x < 0) {
        this.x = canvas.clientWidth + 100;
      }
    },

    draw: function (context) {
      context.drawImage(this.avatar, this.x, this.y, 100, 100);
    },
    // stop: function () {
    //   this.direction = "STOP";
    // },
    // moveRight: function () {
    //   this.direction = "RIGHT";
    // },
    // moveLeft: function () {
    //   this.direction = "LEFT";
    // },
  };
}

function createCloudAvatar() {
  let newImage = new Image();
  newImage.src = "assets/images/clouds.png";
  return newImage;
}
