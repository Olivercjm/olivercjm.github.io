let angle = 0;
let kuru1 = 30;
let kuru2 = 20;
let kuru3 = 40;
let circleSizes = [19, 18, 17, 20, 19.5, 18, 20, 16];
let circleSizes2 = [];
let circleSizes3 = [];
let sound;
let vol = 0.5;
let soundPlaying = false;

function preload() {
    sound = loadSound('sound/marioplant.mp3');
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

    for (let i = 0; i < 8; i++) {
        circleSizes2.push(10);
        circleSizes3.push(15);
    }
}

function draw() {
    background(203, 203, 223);
    fill(0);
    text("Sound volume : ",100,20);
    text(vol.toFixed(1),200,20);
    text("click = play/pause\n1 = play\n+ = increase volume\n- = decrease volume",280,20);
    fill("red");
    noStroke();
    text("Pause the song then adjust the volume",60,40);
    stroke(0);
    line(0, height / 2, width, height / 2);
    translate(width / 2, (height + 180) / 4);
    fill("pink");
    circle(0, 0, 30);

    for (let i = 0; i < 8; i++) {
        push();
        stroke(0);
        rotate((angle * 0.5) + 360 / 8 * i);
        if (i === 0) {
            fill("orange");
        } else {
            fill(255);
        }
        circle(kuru1, 0, circleSizes[i]);
        pop();
    }

    for (let i = 0; i < 8; i++) {
        push();
        stroke(0);
        rotate(((angle + 45) * 0.5) + 360 / 8 * i);
        if (i === 0) {
            fill("cyan");
        } else {
            noFill();
        }
        circle(kuru2, 0, circleSizes2[i]);
        pop();
    }

    for (let i = 0; i < 8; i++) {
        push();
        stroke(0);
        rotate(((angle + 45) * 0.5) + 360 / 8 * i);
        if (i === 0) {
            fill("lime");
        } else {
            noFill();
        }
        circle(kuru3, 0, circleSizes3[i]);
        pop();
    }

    // Reflect the drawing
    scale(1, -1);
    translate(0, (-height + 180) / 2);
    stroke(0);
    fill("pink");
    circle(0, 0, 30);

    for (let i = 0; i < 8; i++) {
        push();
        stroke(0);
        rotate((angle * 0.5) + 360 / 8 * i);
        if (i === 0) {
            fill("orange");
        } else {
            fill(255);
        }
        circle(kuru1, 0, circleSizes[i]);
        pop();
    }

    for (let i = 0; i < 8; i++) {
        push();
        stroke(0);
        rotate(((angle + 45) * 0.5) + 360 / 8 * i);
        if (i === 0) {
            fill("cyan");
        } else {
            noFill();
        }
        circle(kuru2, 0, circleSizes2[i]);
        pop();
    }

    for (let i = 0; i < 8; i++) {
        push();
        stroke(0);
        rotate(((angle + 45) * 0.5) + 360 / 8 * i);
        if (i === 0) {
            fill("lime");
        } else {
            noFill();
        }
        circle(kuru3, 0, circleSizes3[i]);
        pop();
    }

    angle += 1;
}

function mousePressed() {
    if (!soundPlaying) {
        sound.loop();
        sound.setVolume(vol);
        soundPlaying = true;
    }
    else if (soundPlaying == true) {
        sound.pause();
        soundPlaying = false;
    }
}

function keyPressed() {
    if (!soundPlaying && key === '1') {
        sound.loop();
        sound.setVolume(vol);
        soundPlaying = true;
    }
    else if (soundPlaying == true && key ==='p') {
        sound.pause();
        soundPlaying = false;
    }

    else if (soundPlaying == true && key ==='s') {
        sound.stop();
        soundPlaying = false;
    }

    else if (key ==='-') {
        vol-=0.1;
        if (vol <= 0)
            {
                vol = 0;
            }
    }
    else if (key ==='=') {
        vol+=0.1;
    }
}
