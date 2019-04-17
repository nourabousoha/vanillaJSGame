export default class Paddle {
  constructor(gameHeight, gameWidth) {
    this.height = 30;
    this.width = 150;
    this.maxspeed = 5;
    this.speed = 0;
    this.gameWidth = gameWidth;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - 10 - this.height
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  moveLeft() {
    this.speed = -this.maxspeed;
  }
  moveRight() {
    this.speed = this.maxspeed;
  }
  stop() {
    this.speed = 0;
  }

  update(deltatime) {
    // if (!deltatime) return;
    this.position.x += this.speed;
    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
