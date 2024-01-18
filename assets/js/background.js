class Background {
  constructor(canvas) {
    this.canvas = canvas;
    this.back1 = this.createBackground();
    this.back2 = this.createBackground();

    this.x = 0;
    this.y = 0;
  }
  createBackground() {
    let background = new Image();
    background.src = "assets/images/back.jpg";
    return background;
  }
  draw(context) {
    context.drawImage(
      this.back1,
      this.x,
      this.y,
      this.canvas.clientWidth,
      this.canvas.clientHeight
    );
    context.drawImage(
      this.back2,
      this.x + this.canvas.clientWidth,
      this.y,
      this.canvas.clientWidth,
      this.canvas.clientHeight
    );
  }
  update() {
    this.x = this.x - 1; // this.x -= 1;
    if (this.x + this.canvas.clientWidth * 2 < this.canvas.clientWidth - 10) {
      this.x = this.x + this.canvas.clientWidth;
    }
  }
}
