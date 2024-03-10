import playerImage from "../images/ufo.png"

export class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.avatar = this.createPlayerAvatar();
    this.x = 0.5 * this.canvas.clientWidth - 50;
    this.y = 0.1 * this.canvas.clientHeight;
    this.direction = "STOP";
    this.liveLevel = 1.0;
    this.isAlive = true;
    this.points = 0;
    this.velocityX = 0.5;
    this.velocityY = 0.5;
  }
  createPlayerAvatar() {
    let newImage = new Image();
    newImage.src = playerImage;
    return newImage;
  }
  update(deltaTime) {
    if (this.direction == "LEFT" && this.x > 0) {
      // this.x = this.x - 2;
      this.x = this.x - this.velocityX * deltaTime;
    } else if (
      this.direction == "RIGHT" &&
      this.x < this.canvas.clientWidth - 110
    ) {
      this.x = this.x + this.velocityX * deltaTime;
    }
    this.liveLevel -= 0.003;
    if (this.liveLevel <= 0) {
      this.isAlive = false;
      this.liveLevel = 0;
    }
  }
  draw(context) {
    context.drawImage(this.avatar, this.x, this.y, 100, 100);
    context.fillStyle = "rgba(250, 250, 250, 0.4)";
    context.fillRect(this.canvas.clientWidth - 270, 25, 250, 15);
    context.fillStyle = "rgba(250, 250, 250, 0.6)";
    context.fillRect(
      this.canvas.clientWidth - 268,
      27,
      250 * this.liveLevel,
      11
    );
    context.font = "20px serif";
    context.fillText(this.points, 30, 30);
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
  addPoints(gainedPoints) {
    this.points += gainedPoints;
    this.liveLevel += 0.1;
    if (this.liveLevel > 1) {
      this.liveLevel = 1;
    }
  }
  playerAlive() {
    return this.isAlive;
  }
}
