function createPlayer(canvas) {
  return {
    /*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */

    avatar: createPlayerAvatar(),
    x: 0.5 * canvas.clientWidth - 50,
    y: 0.1 * canvas.clientHeight,
    direction: "STOP",
    liveLevel: 1.0,
    isAlive: true,

    update: function () {
      if (this.direction == "LEFT") {
        player.x = player.x - 2;
      } else if (this.direction == "RIGHT") {
        player.x = player.x + 2;
      }
      this.liveLevel -= 0.0005;
      if (this.liveLevel <= 0) {
        this.isAlive = false;
        this.liveLevel = 0;
      }
    },
    draw: function (context) {
      context.drawImage(this.avatar, this.x, this.y, 100, 100);
      ctx.fillStyle = "rgba(250, 250, 250, 0.4)";
      context.fillRect(canvas.clientWidth - 270, 25, 250, 15);
      ctx.fillStyle = "rgba(250, 250, 250, 0.6)";
      context.fillRect(canvas.clientWidth - 268, 27, 250 * this.liveLevel, 11);
    },
    stop: function () {
      this.direction = "STOP";
    },
    moveRight: function () {
      this.direction = "RIGHT";
    },
    moveLeft: function () {
      this.direction = "LEFT";
    },
  };
}

function createPlayerAvatar() {
  let newImage = new Image();
  newImage.src = "assets/images/ufo.png";
  return newImage;
}
