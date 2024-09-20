<?php
$a = "Hello world";
$b = '666';
$c = 5985;
$d = 10.365;
$e = true;
$f = null;
$cars = array("volvo","BMW","Toyota");


echo "<html>";
echo "<head>";
echo "<style>";
echo "body { background-color: black; color: white; text-align: center; }";
echo "h1 { color: white; }";
echo "</style>";
echo "</head>";
echo "<body>";
echo "<center> <h1>";

var_dump($a);
echo"<br>";
$b = (int) $b;
var_dump($b);
echo"<br>";
$c = (string) $c;//first num cannot be 0
var_dump($c);
echo"<br>";
var_dump($d);
echo"<br>";
var_dump($e);
echo"<br>";
var_dump($f);
echo"<br>";
var_dump($cars);
echo"<br>";

?>
