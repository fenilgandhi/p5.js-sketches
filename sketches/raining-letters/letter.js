class Letter {
	constructor(word) {
		this.scale = int(windowWidth / 128);
		this.word = word;
		this.randomize();
		this.y = random(-10, windowHeight);
	}

	randomize() {
		this.x = random(0, width);
		this.y = random(-100, -200);
		this.size = random(1, 32);
		this.vel = random(1, 10);
		this.sparkle = random(1, this.scale);
		this.text = this.word[Math.floor(this.x / (width / 5))];
	}

	draw() {
		push();
		if (this.y > height + this.size) {
			this.randomize();
		} else {
			this.y += this.vel;
		}
		this.sparkle = this.sparkle > this.size * 2 ? 0 : this.sparkle + 1;
		fill(255 * this.sparkle);
		textSize(this.size);
		text(this.text, this.x, this.y);
		pop();
	}
}
