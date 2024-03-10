import moonImage from "../images/crescent-moon.png"

export class Moon {
  constructor(canvas) {
    this.canvas = canvas;
    this.avatar = this.createMoonAvatar();
    this.x = 50;
    this.y = 0.1 * this.canvas.clientHeight;
    this.size = 50;
    this.direction = "GROW";
  }

  createMoonAvatar() {
    let newImage = new Image();
    newImage.src = moonImage
    return newImage;
  }
  draw(context) {
    context.drawImage(this.avatar, this.x, this.y, this.size, this.size);
  }
  update() {
    if (this.direction == "GROW") {
      this.size += 0.3;
      if (this.size > 60) {
        this.direction = "SHRINK";
      }
    } else {
      this.size -= 0.3;
      if (this.size < 50) {
        this.direction = "GROW";
      }
    }
  }
}
