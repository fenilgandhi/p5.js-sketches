class Letter {
	constructor(word) {
		this.scale = windowWidth / 64;
		this.word = word;
		this.randomize();
	}

	randomize() {
		this.x = random(0, width);
		this.y = random(-100, -200);
		this.size = random(1, this.scale);
		this.vel = windowHeight / (this.size * this.scale);
		this.sparkle = random(1, this.scale);
		this.text = '.'; //this.word[Math.floor(this.x / (width / 5))];
	}

	draw() {
		this.y += this.vel;
		fill(255 * this.sparkle);
		text(this.text, this.x, this.y);
		this.sparkle++;
		if (this.sparkle > this.size * 2) this.sparkle = 0;
		this.y > height + this.size ? this.randomize() : 0;
	}
}
