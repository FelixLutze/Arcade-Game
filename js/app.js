const lives = document.querySelector('.lives');
const score = document.querySelector('.score');

// enemies our player must avoid
var Enemy = function(x, y, speed) {
    
    // position and speed
    this.x = x;
    this.y = y;
    this.speed = speed;

    // loading enemy image
    this.sprite = 'images/enemy-bug.png';
};

// updates the enemy's position
Enemy.prototype.update = function(dt) {
    // dt parameter ensures that the game runs at the same speed for all computers.
    this.x += this.speed * dt;

    // resets the enemy position
    if(this.x > 530) {
        this.x = -120;
    }

    // checking for collision
    if (player.x < this.x + 50 && player.x + 35 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};

// draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player class
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

// draws the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//reads in the keyCodes from line 103
Player.prototype.handleInput = function(keyCode) {
    console.log(keyCode);

    // checks for player reaching top of canvas and winning the game
    if (this.y > 0) {   
        if(keyCode == 'up') {
            this.y -= 85;
            console.log('y: ' + this.y);
            
        }
    }
    // checks for player reaching bottom of canvas
    if(this.y < 375) {
        if(keyCode == 'down') {
            this.y += 85;
            console.log('y: ' + this.y);
        }
    }
    // checks for player reaching left side of canvas
    if(this.x > 0) {
        if(keyCode == 'left') {
            this.x -= 100;
            console.log('x: ' + this.x);
        }
    }
    // checks for player reaching right side of canvas
    if(this.x < 400) {
        if(keyCode == 'right') {
            this.x += 100;
            console.log('x: ' + this.x);
        }
    }
};

// places all enemy objects in an array
var allEnemies = [];
// enemys y position
var enemyPosition = [60, 140, 220];

var enemy;

// initializing the player
var player = new Player(200, 375);

enemyPosition.forEach(function(y) {
    // initializing the player with randmon coordinates
    enemy = new Enemy(0, y, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to the Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
