<?php
$x = 5;
$txt1 = "いつも眠い";
$a = $b = $c = "Fruit";

echo "<html>";
echo "<head>";
echo "<style>";
echo "body { background-color: black; color: white; text-align: center; }";
echo "h1 { color: white; }";
echo "</style>";
echo "</head>";
echo "<body>";

var_dump($x);

echo "<center><h1>$txt1</h1>";
echo "<br>";

var_dump($a);


function myTest() {
    // Variable $x is not accessible inside the function
    echo "<p>Variable x inside function is: undefined</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";

function myTest2() {
    $y = 5; // local scope
    echo "<p>Variable y inside function is: $y</p>";
}
myTest2();

echo "<p>Variable y outside function is: undefined</p>";

const PI = 3.14159;
define("Greetings", "Welcome to PHP");

// Display constant values
function display() {
    echo Greetings;
    echo "<br>";
    echo PI;
}

display();

echo "</body>";
echo "</html>";
?>
