<!-- <?php
$PI = 3.14;
$r = 10;

echo "Area of circle : ".$PI * ($r * $r)." when r is ".$r;
?> -->

<!-- <?php
$principle = 50000;
$rate = 0.05;
$time = 2;
$interest = ($principle * $rate * $time)/100;

echo "Interest : ".$interest." when principle is $principle, rate is $rate in $time years";
?> -->

<!-- <?php
$celsius = 35;
$fahrenheit = $celsius * (9/5) +32;

echo "Fahrenheit : $fahrenheit when celsius is $celsius";
?> -->

<!-- <?php
$a = 9;
$b = 13;
$c = sqrt(($a*$a)+($b*$b));

echo "The hypotenuse is $c when the opposite is $a and adjection is $b";
?> -->

<?php
$name = " john doe ";
//i
echo "<br>";
echo "i";
echo "<br>";
echo trim($name," ");
echo "<br>";
//ii
echo "<br>";
echo "ii";
echo "<br>";
echo strtoupper($name);
echo "<br>";
//iii
echo "<br>";
echo "iii";
echo "<br>";
$name1 = explode(" ",$name);
echo "First name : $name1[1]";
echo "<br>";
echo "Last Name : $name1[2]";
echo "<br>";
//iv
echo "<br>";
echo "iv";
echo "<br>";
echo ucwords($name);
echo "<br>";
//v
echo "<br>";
echo "v";
echo "<br>";
echo str_replace("o","0",$name);
?>