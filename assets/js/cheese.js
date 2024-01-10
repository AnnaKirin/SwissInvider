function createPlayer(canvas) {
  return {
    /*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */

    avatar: createPlayerAvatar(),
    x: 0.5 * canvas.clientWidth - 50,
    y: 0.1 * canvas.clientHeight,
    direction: "STOP",

    update: function () {
      if (this.direction == "LEFT") {
        cheese.x = cheese.x - 2;
      } else if (this.direction == "RIGHT") {
        cheese.x = cheese.x + 2;
      }
    },
    draw: function (context) {
      context.drawImage(this.avatar, this.x, this.y, 100, 100);
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
