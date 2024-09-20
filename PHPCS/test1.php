<?php

echo'
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classified : WAD Project</title>
    <script src="libraries/p5.min.js" type="text/javascript"></script>
    <script src="libraries/p5.sound.min.js" type="text/javascript"></script>
    <script src="libraries/matter.js" type="text/javascript"></script>
</head>
<body>
<script>

let shapes = [];
let numShapes = 30;
let buttonX, buttonY, buttonWidth, buttonHeight;

function setup() {
    createCanvas(1690, 798);
    buttonWidth = 300;
    buttonHeight = 100;
    buttonX = (width / 2) - (buttonWidth / 2);
    buttonY = (height / 2) - (buttonHeight / 2);

    // Initialize the shapes with random positions, velocities, and types
    for (let i = 0; i < numShapes; i++) {
        shapes.push({
            x: random(50, width - 50),
            y: random(50, height - 50),
            vx: random(-2, 2),
            vy: random(-2, 2),
            r: random(100, 255),
            g: random(100, 255),
            b: random(100, 255),
            type: random(["circle", "square", "triangle", "x"]) // Random shape type
        });
    }
}

function draw() {
    background(0,0,60); // Clear the screen

    // Loop through each shape and move/draw it
    for (let i = 0; i < numShapes; i++) {
        let s = shapes[i];

        // Move the shape
        s.x += s.vx;
        s.y += s.vy;

        // Check for collision with the canvas edges and reverse velocity (bounce)
        if (s.x > width - 15 || s.x < 15) {
            s.vx *= -1;
            // Change color on bounce
            s.r = random(100, 255);
            s.g = random(100, 255);
            s.b = random(100, 255);
        }

        if (s.y > height - 15 || s.y < 15) {
            s.vy *= -1;
            // Change color on bounce
            s.r = random(100, 255);
            s.g = random(100, 255);
            s.b = random(100, 255);
        }

        // Draw the shape based on its type
        stroke(s.r, s.g, s.b);
        strokeWeight(5);
        noFill();

        if (s.type === "circle") {
            ellipse(s.x, s.y, 30, 30);
        } else if (s.type === "square") {
            rect(s.x, s.y, 10, 10);
        } else if (s.type === "triangle") {
            strokeWeight(3);
            triangle(s.x, s.y - 5, s.x - 5, s.y + 5, s.x + 5, s.y + 5);
        } else if (s.type === "x") {
         strokeWeight(5);
            line(s.x - 15, s.y - 15, s.x + 15, s.y + 15);
            line(s.x + 15, s.y - 15, s.x - 15, s.y + 15);
        }
    }

    // Check if mouse is over the button
    if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        isHovering = true;
    } else {
        isHovering = false;
    }

    // Draw the button with hover effect
    fill(0);
    rect(buttonX + 10, buttonY + 10, buttonWidth, buttonHeight, 20);
    fill(isHovering ? 150 : 100, 80, 200); // Change color on hover
    noStroke();
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 20);

    // Draw text on button
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Click To Start Quiz", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
}
</script>
</body>
</html>';
?>