let totalStars = 500;

let letters = [];
let textString = 'Simmi';

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < totalStars; i++) letters.push(new Letter(textString));
}

function draw() {
	background(0);
	fill(255);
	for (const letter of letters) {
		letter.draw();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	for (const letter of letters) {
		letter.randomize();
		letter.y = random(-10, windowHeight);
	}
}
