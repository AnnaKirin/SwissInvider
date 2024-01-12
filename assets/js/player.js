class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.avatar = this.createPlayerAvatar();
    this.x = 0.5 * this.canvas.clientWidth - 50;
    this.y = 0.1 * this.canvas.clientHeight;
    this.direction = "STOP";
    this.liveLevel = 1.0;
    this.isAlive = true;
    this.velocityX = 0.3;
    this.velocityY = 0.5;
  }
  createPlayerAvatar() {
    let newImage = new Image();
    newImage.src = "assets/images/ufo.png";
    return newImage;
  }
  update() {
    if (this.direction == "LEFT" && this.x > 0) {
      // this.x = this.x - 2;
      this.x = this.x - this.velocityX * deltaTime;
    } else if (this.direction == "RIGHT" && this.x < canvas.clientWidth - 110) {
      this.x = this.x + this.velocityX * deltaTime;
    }
    this.liveLevel -= 0.0005;
    if (this.liveLevel <= 0) {
      this.isAlive = false;
      this.liveLevel = 0;
    }
  }
  draw(context) {
    context.drawImage(this.avatar, this.x, this.y, 100, 100);
    context.fillStyle = "rgba(250, 250, 250, 0.4)";
    context.fillRect(canvas.clientWidth - 270, 25, 250, 15);
    context.fillStyle = "rgba(250, 250, 250, 0.6)";
    context.fillRect(canvas.clientWidth - 268, 27, 250 * this.liveLevel, 11);
  }

  stop() {
    this.direction = "STOP";
  }
  moveRight() {
    this.direction = "RIGHT";
  }
  moveLeft() {
    this.direction = "LEFT";
  }
}
