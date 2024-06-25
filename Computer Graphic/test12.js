let posX = 0;
let posY = -100;
let posZ = 0;
let speed = 5;
let jumpSpeed = 0;
let gravity = 0.5;
let isJumping = false;
let groundY = 0;
let x = 0;
let xs = 2;
let movex = false;
let angle = 0;

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  canvas.position(0, 0);
  angleMode(DEGREES);
}

function draw() {
    background(0);
  
    directionalLight(255, 0, 0, 1, 0, -1);
    pointLight(0, 0, 255, 50, -255, 255);
    pointLight(0, 255, 0, 0, -255, 255);

    updatePosition();
    handleJumping()
  

    let camX = posX + cos(mouseX / width * 360) * 400;
    let camY = posY - 100 + sin(mouseY / height * 360) * 400;
    let camZ = posZ + sin(mouseX / width * 360) * 400;
  
    camera(-camX, camY, -camZ, posX, posY, posZ, 0, 1, 0);
  
    // Draw the box surface
    push();
    translate(0, 0, 0);
    ambientMaterial(255);
    box(20000, 20, 60000);
    pop();
  
    // Draw the character
    push();
    translate(posX, posY, posZ);
    rotateY(angle);
    kuru();
    pop();
}




function kuru() {
    push();
    // Draw head
    push();
    noStroke();
    fill("#ffefe5");
    translate(0, -40, 0);
    sphere(40); // Head
    pop();
  
    push();
    translate(0, -15, 32);
    fill(0);
    noStroke();
    plane(5,0.4);
    pop();
  
    push();
    noStroke();
    translate(-15, -30, 35);
    fill("#eda9e7");
    cylinder(5,10);
    pop();
  
    push();
    noStroke();
    translate(-15, -32, 35);
    fill("#5b34ad");
    cylinder(5.1,6);
    pop();
  
    push();
    noStroke();
    translate(15, -30, 35);
    fill("#eda9e7");
    cylinder(5,10);
    pop();
  
    push();
    noStroke();
    translate(15, -32, 35);
    fill("#5b34ad");
    cylinder(5.1,6);
    pop();
  
    push();
    noStroke();
    translate(-25, -32, 30);
    fill("#a4909b");
    cone(5,50);
    pop();
  
    push();
    noStroke();
    translate(25, -32, 30);
    fill("#a4909b");
    cone(5,50);
    pop();
  
    push();
    noStroke();
    translate(0, -50, 0);
    fill("#a4909b");
    ellipsoid(40,30,50);
    pop();
  
    push();
    noStroke();
    translate(30, -40, 0);
    fill("#a4909b");
    ellipsoid(10,30,30);
    pop();
  
    push();
    noStroke();
    translate(-30, -40, 0);
    fill("#a4909b");
    ellipsoid(10,30,30);
    pop();
  
    
    push();
    noStroke();
    translate(0, -20, -30);
    fill("#a4909b");
    ellipsoid(40,60,20);
    pop();
  
    // Draw body
    push();
    fill("#f7f7f7");
    translate(0, 30, 0);
    box(50, 60, 30); // Body
    pop();
  
    push();
    noStroke();
    fill("#292435");
    translate(-15, 30, 0);
    rotate(10);
    cylinder(18,60);
    pop();
  
    push();
    noStroke();
    fill("#292435");
    translate(15, 30, 0);
    rotate(-10);
    cylinder(18,60);
    pop();
  
    push();
    translate(-10, 5,0);
    rotate(20);
    stroke(0);
    fill("#ebcf99");
    box(20,2,40);
    pop();
  
    push();
    translate(10, 5,0);
    rotate(-20);
    stroke(0);
    fill("#ebcf99");
    box(20,2,40);
    pop();
  
    push();
    stroke(0);
    rotate(30);
    translate(5,15,15);
    fill("#ebcf99");
    box(10,5,10);
    pop();
  
    push();
    stroke(0);
    rotate(-30);
    translate(-5,15,15);
    fill("#ebcf99");
    box(10,5,10);
    pop();
  
    push();
    rotate(40);
    noStroke();
    translate(20,10,15);
    fill("#5245d5");
    box(10,5,10);
    pop();
  
    push();
    rotate(60);
    noStroke();
    translate(21,6,15);
    fill("#5245d5");
    box(10,5,10);
    pop();
  
    push();
    rotate(90);
    noStroke();
    translate(21,0,15);
    fill("#5245d5");
    box(10,5,10);
    pop();
  
    push();
    rotate(90);
    noStroke();
    translate(25,-5,15);
    fill("#b17ee7");
    box(10,5,10);
    pop();
  
    push();
    rotate(90);
    noStroke();
    translate(35,0,15);
    fill("#b17ee7");
    box(10,5,10);
    pop();
  
    push();
    noStroke();
    translate(-20,35,0);
    rotateX(90);
    rotateY(-45);
    fill("#ebcf99");
    torus(30,2);
    pop();
  
    push();
    noStroke();
    translate(20,35,0);
    rotateX(90);
    rotateY(45);
    fill("#ebcf99");
    torus(30,2);
    pop();
  
  
    // Draw arms
    push();
    fill("#ffefe5");
    translate(-35, 10, 0);
    box(60, 10, 10); // Left arm
    pop();
  
    push();
    fill("#f7f7f7");
    translate(-35, 11, 0);
    box(30, 20, 20);
    pop();
  
    push();
    fill("#292435");
    translate(-35, 11, 0);
    box(24, 22, 22);
    pop();
  
    push();
    fill("#ffefe5");
    translate(35, 10, 0);
    box(60, 10, 10); // Right arm
    pop();
  
    push();
    fill("#f7f7f7");
    translate(35, 11, 0);
    box(30, 20, 20);
    pop();
  
    push();
    fill("#292435");
    translate(35, 11, 0);
    box(24, 22, 22);
    pop();
  
    // Draw legs
    push();
    fill("#ffefe5");
    rotateX(-x);
    translate(-15, 70, 0);
    box(20, 20, 20); // Left leg
    pop();
  
    push();
    fill("#ffefe5");
    rotateX(x);
    translate(15, 70, 0);
    box(20, 20, 20); // Right leg
    pop();
    pop();
  }

  function updatePosition() {
    movex = false;

    if (keyIsDown(87)) { // W key
        movex = true;
        posZ -= speed+2;
        angle = 180;
    }
    if (keyIsDown(83)) { // S key
        movex = true;
        posZ += speed+2;
        angle = 0;
    }
    if (keyIsDown(65)) { // A key
        movex = true;
        posX -= speed+2;
        angle = -90;
    }
    if (keyIsDown(68)) { // D key
        movex = true;
        posX += speed+2;
        angle = 90;
    }

    if (keyIsDown(87)&& keyIsDown(68)) { // W & D key
        movex = true;
        posZ -= speed;
        posX += speed;
        angle = 120;
    }

    if (keyIsDown(83) && keyIsDown(65)) { // S & A key
        movex = true;
        posZ += speed;
        posX -= speed;
        angle = -30;
    }

    if (keyIsDown(87) && keyIsDown(65)) { // W & A key
        movex = true;
        posZ -= speed;
        posX -= speed;
        angle = -120;
    }

    if (keyIsDown(83) && keyIsDown(68)) { // S & D key
        movex = true;
        posZ += speed;
        posX += speed;
        angle = 30;
    }

    move();
}

function move() {
    if (movex) {
        if (x >= 20 || x <= -20) {
            xs = -xs;
        }
        x += xs;
    } else {
        x = 0;
    }
}
  
function handleJumping() {
    if (isJumping) {
        posY -= jumpSpeed;
        jumpSpeed -= gravity;

        if (posY >= groundY-100) {
            posY = groundY -100;
            isJumping = false;
            jumpSpeed = 0;
        }
    } else {
        if (keyIsDown(32)) { 
            isJumping = true;
            jumpSpeed = 15; 
        }
    }
}

