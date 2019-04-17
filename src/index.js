//import "./styles.css";
import Paddle from "/src/paddle";
import InputHandler from "/src/input";
let canvas = document.getElementById("gameScreen");
let imgBall = document.getElementById("img_ball");
let ctx = canvas.getContext("2d");
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;
ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
let paddle = new Paddle(GAME_HEIGHT, GAME_WIDTH);
//ctx.drawImage(imgBall, 10, 10);
//paddle.draw(ctx);

let lasttime = 0;
new InputHandler(paddle);
function gameloop(timestamp) {
  let deltatime = timestamp - lasttime;
  lasttime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.drawImage(imgBall, 10, 10, 16, 16);
  paddle.update(deltatime);
  paddle.draw(ctx);
  requestAnimationFrame(gameloop);
}
gameloop();
