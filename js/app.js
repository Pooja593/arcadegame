var score = 0;
let collision = 0;
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.speed = speed;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x = this.x + this.speed * dt;
	if (this.x == 0) {
		this.speed = 100 + Math.floor(Math.random() * 400);
	}
	if (this.x > 500) {
		this.speed = 100 + Math.floor(Math.random() * 400);
		this.x = 0;
	}
	if (player.x + 70 > this.x && player.x < this.x + 70 && player.y + 70 > this.y && player.y < this.y + 70) {
		collision = collision + 1;
		player.x = 200;
		player.y = 400;
	}
	if (collision == 1) {
		document.getElementById('image1').style.visibility = "hidden";
	} else if (collision == 2) {
		document.getElementById('image2').style.visibility = "hidden";
	} else if (collision == 3) {
		document.getElementById('image3').style.visibility = "hidden";
	} else if (collision == 4) {
		document.getElementById('image4').style.visibility = "hidden";
	} else if (collision == 5) {
		document.getElementById('image5').style.visibility = "hidden";
	} else if (collision > 5) {
		alert("gameOver startAgain!!!");
		window.location.reload();
		collision = 0;
		score = 0;
		document.getElementById('points').innerHTML = score;
	}
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Warrior {
	constructor(x, y, sprite) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/char-horn-girl.png';
	}
}
Warrior.prototype.update = function(dt) {}
Warrior.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPlaces = [61, 144, 227];
enemyPlaces.map((positionY) => {
	var enemyBug = new Enemy(0, positionY, 150);
	allEnemies.push(enemyBug);
})
var player = new Warrior(200, 400);
Warrior.prototype.handleInput = function(key) {
	if (key == 'left') {
		this.x = this.x - 101;
		if (this.x < 0) {
			this.x = 0;
		}
	} else if (key == 'right') {
		this.x = this.x + 101;
		if (this.x > 404) this.x = 404;
	} else if (key == 'up') {
		this.y = this.y - 82;
		if (this.y < 60) {
			this.sprite = 'images/char-pink-girl.png';
			document.body.style.backgroundColor = "#d7f9d7";
			score = score + 100;
			document.getElementById('points').innerHTML = score;
			setTimeout(() => {
				this.x = this.x;
				this.y = 400;
				document.body.style.backgroundColor = "#fff";
				this.sprite = 'images/char-horn-girl.png';
			}, 110)
		}
	} else if (key == 'down') {
		this.y = this.y + 82;
		if (this.y > 400) this.y = 400;
	}
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});
