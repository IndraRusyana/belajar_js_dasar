import Paddle from "./Paddle.js";

let canvas = document.getElementById('gamescreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

//**** player paddle ****// 

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let LastTime = 0;

function gameLoop(timestamp) {
	let deltaTime = timestamp - LastTime;
	LastTime = timestamp;

	ctx.clearRect(0, 0, 800, 600);
	paddle.update(deltaTime);
	paddle.draw(ctx);

	requestAnimationFrame(gameLoop);
}

gameLoop();

