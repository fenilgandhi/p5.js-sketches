let totalStars = 500;

let letters = [];
let textString = 'Fenil';

function setup() {
	totalStars = Math.max(totalStars, windowHeight, windowWidth);
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < 300; i++) letters.push(new Letter(textString));
}

function draw() {
	background(0);
	fill(255);
	for (const letter of letters) {
		letter.draw();
	}
}
