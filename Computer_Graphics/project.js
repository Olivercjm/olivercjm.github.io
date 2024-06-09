let player;
let obstacles = [];
let collectibles = [];
let particles = [];
let bg, r, g, b;
let gameState = 'start';
let spacePressed = false;
let score = 0;
let maxParticles = 30;
let soundPlaying = false;
let vol = 0.5;

let finishLineX = 500;

function preload() {
    gif = loadImage("pix.gif");
    mbg = loadImage("mbg.png");
    bat = loadImage("bat.gif");
    fre = loadImage("frieren.gif");
    ryo = loadImage("ryo.gif");
    sound = loadSound('sound/sad.mp3');
    sound2 = loadSound('sound/marioplant.mp3');
    sound3 = loadSound('sound/fm.mp3');
}

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.position(window.innerWidth / 2 - 400, window.innerHeight / 2 - 200);
    player = new Player();
    bg = new Background();
    r = random(100, 255);
    g = random(100, 255);
    b = random(100, 255);
    frameRate(60);

}

function draw() {
    background(0);

    if (gameState === 'start') {
        showStartScreen();
    } else if (gameState === 'playing') {
        sound3.stop();
        soundPlaying = false;
        bg.update();
        bg.show();

        if (spacePressed) {
            player.up();
            if (particles.length < maxParticles) {
                particles.push(new Particle(player.x + player.size / 2, player.y + player.size));
            }
        }

        player.update();
        player.show();

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].show();
            if (particles[i].isFinished()) {
                particles.splice(i, 1);
            }
        }

        if (frameCount % 60 === 0) {
            obstacles.push(new Obstacle());
        }

        for (let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].update();
            obstacles[i].show();
            if (obstacles[i].hits(player)) {
                gameOver();
            }
            if (obstacles[i].x + obstacles[i].width < 0) {
                obstacles.splice(i, 1);
            }
        }

        if (frameCount % 100 === 0) {
            collectibles.push(new Collectible());
        }

        for (let i = collectibles.length - 1; i >= 0; i--) {
            collectibles[i].update();
            collectibles[i].show();
            if (collectibles[i].hits(player)) {
                collectibles.splice(i, 1);
                score += 100;
            }
            if (collectibles[i].x + collectibles[i].size < 0) {
                collectibles.splice(i, 1);
            }
        }


        if (score >= finishLineX) {
            levelComplete();
        }

        // Display score
        fill(255);
        textSize(16);
        textAlign(RIGHT);
        text(`Score: ${score}`, width - 20, 30);
        fill(255);
        stroke(0);
        strokeWeight(3);
        text(`Target: Score ${finishLineX} to win`, width/2 +100, 30);

    } else if (gameState === 'gameOver') {
        showGameOverScreen();
    } else if (gameState === 'paused') {
        showPausedScreen();
    } else if (gameState === 'levelComplete') {
        showLevelCompleteScreen();
    }
}

function levelComplete() {
    gameState = 'levelComplete';
    sound2.stop();
    soundPlaying = false;
    if (!soundPlaying) {
        sound3.loop();
        sound3.setVolume(vol);
        soundPlaying = true;
    }
    finishLineX +=500;
}

function showStartScreen() {
    sound3.stop();
    soundPlaying = false;
    fill(255);
    bg.update();
    bg.show();
    player.show();
    stroke(0);
    strokeWeight(3);
    textSize(32);
    textAlign(CENTER);
    text('Jetpack Challenge', width / 2, height / 2 - 50);
    textSize(16);
    text('Press S to Start', width / 2, height / 2);
}

function showGameOverScreen() {
    fill(255);
    textSize(60);
    textAlign(CENTER);
    text('Game Over', width / 2 + 150, height/2 - 20);
    image(ryo, 100, 10, 200, 380);
    textSize(16);
    text(`Score: ${score}`, width / 2 + 150, height/2);
    text(`Press R or Click to Retry`, width / 2 + 150, height/2 +20);
    if (!soundPlaying) {
        sound.play();
        soundPlaying = true;
    }
}

function showPausedScreen() {
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text('Paused', width / 2, height / 2 - 50);
    textSize(16);
    text('Press S to Resume', width / 2, height / 2);
}

function showLevelCompleteScreen() {
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text('Level Complete!', width / 2, height / 2);
    textSize(16);
    text('Press R or Click to Play Again', width / 2, height / 2 + 40);
    translate(width/2-125, height/2+100);
    player.show();
}

function startGame() {
    gameState = 'playing';
    soundPlaying = false;
    if (!soundPlaying) {
        sound2.loop();
        sound2.setVolume(vol);
        soundPlaying = true;
    }
}

function pauseGame() {
    sound2.pause();
    soundPlaying = false;
    if (gameState === 'playing') {
        gameState = 'paused';
    } else if (gameState === 'paused') {
        gameState = 'playing';
    }
}

function retryGame() {
    gameState = 'start';
    obstacles = [];
    collectibles = [];
    particles = [];
    player = new Player();
    score = 0;
    sound.stop();
    soundPlaying = false;
}

function gameOver() {
    sound2.stop();
    soundPlaying = false;
    gameState = 'gameOver';
}

class Player {
    constructor() {
        this.x = 100;
        this.y = height / 2;
        this.size = 60;
        this.ySpeed = 0;
        this.gravity = 0.3;
        this.lift = -5;
    }

    update() {
        this.ySpeed += this.gravity;
        this.y += this.ySpeed;

        if (this.y > height - this.size) {
            this.y = height - this.size;
            this.ySpeed = 0;
        } else if (this.y < 0) {
            this.y = 0;
            this.ySpeed = 0;
        }
    }

    show() {
        image(gif, this.x - 50, this.y - 100, this.size + 100, this.size + 100);
    }

    up() {
        this.ySpeed = this.lift;
    }
}

function keyPressed() {
    if (key === ' ') {
        spacePressed = true;
    } else if (key === 's' || key === 'S') {
        if (gameState === 'start' || gameState === 'paused') {
            startGame();
        }
    } else if (key === 'r' || key === 'R') {
        if (gameState === 'gameOver' || gameState === 'levelComplete') {
            retryGame();
        }
    }
    else if (key === 'p' || key === 'P') {
        if (gameState === 'playing' || gameState === 'paused') {
            pauseGame();
        }
    }
}

function keyReleased() {
    if (key === ' ') {
        spacePressed = false;
    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        if (gameState === 'start' || gameState === 'paused') {
            startGame();
        } else if (gameState === 'gameOver' || gameState === 'levelComplete') {
            retryGame();
        } else {
            spacePressed = true;
        }
    }
}

function mouseReleased() {
    if (mouseButton === LEFT) {
        spacePressed = false;
    }
}


class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(1, 3);
        this.alpha = 255;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        r = random(100, 255);
        g = random(100, 255);
        b = random(100, 255);
        push();
        fill(r, g, b, this.alpha);
        rect(this.x, this.y, 5, 40);
        pop();
    }

    isFinished() {
        return this.alpha < 0;
    }
}

class Obstacle {
    constructor() {
        this.x = width;
        this.y = random(height - 100);
        this.width = random(50, 100);
        this.height = this.width;
        this.speed = 6;
    }

    update() {
        this.x -= this.speed;
    }

    show() {
        tint("red");
        image(bat, this.x, this.y, this.width + 10, this.height + 10);
        noTint();
        image(bat, this.x, this.y, this.width, this.height);
    }
    hits(player) {
        if (player.x + player.size - 50 > this.x && player.x < this.x + this.width - 25) {
            if (player.y + player.size - 50 > this.y && player.y < this.y + this.height - 25) {
                return true;
            }
        }
        return false;
    }
}
class Collectible {
    constructor() {
        this.x = width;
        this.y = random(height - 50);
        this.size = 20;
        this.speed = 6;
        this.ran = random(1) < 0.5 ? 'ellipse' : 'rect'; // random make circle / rect
    }
    update() {
        this.x -= this.speed;
    }
    show() {
        fill(0, 255, 0);
        stroke(0);
        strokeWeight(5);
        if (this.ran === 'ellipse')
            {
                ellipse(this.x, this.y, this.size, this.size);
            }

        else
        {
            rect(this.x, this.y, this.size, this.size);
        }
    }
    hits(player) {
        let d = dist(this.x, this.y, player.x + player.size / 2, player.y + player.size / 2);
        return d < this.size / 2 + player.size / 2;
    }
}
class Background {
    constructor() {
        this.x1 = 0;
        this.x2 = width;
        this.speed = 3;
    }
    update() {
        this.x1 -= this.speed;
        this.x2 -= this.speed;

        if (this.x1 <= -width) {
            this.x1 = width;
        }

        if (this.x2 <= -width) {
            this.x2 = width;
        }
    }
    show() {
        fill(200);
        image(mbg, this.x1, 0, width+1, height);
        image(mbg, this.x2, 0, width+1, height);
    }
}
