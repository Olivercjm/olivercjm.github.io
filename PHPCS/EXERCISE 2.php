<?php
//Q1
echo "<h1>EXERCISE 1</h1><br>";


$fruit = array("kiwi","banana","pineapple","avocado","durian");
echo "<b>Original Array : </b>";

for($i = 0;$i<count($fruit); $i++)
{
    echo "<br>";
    echo $fruit[$i];
}
$fruit[] = "grapes";
$fruit[] = "orange";

echo "<br><br>";
echo "<b>Added new elements and sorted : </b>";

sort($fruit);
foreach($fruit as $fruit1)
{
    echo "<br>";
    echo $fruit1;
}

echo "<br><br>";
echo "<b>Checking elements in array : <br></b>";
function check(string $check1, array $check2)
{
    if(in_array($check1, $check2))
    {
        echo $check1 . " exist in array ";
    }

    else{
        echo $check1 . " not founded in array";
    }
}

check("banana", $fruit);
echo"<br>";
check("Jimmy", $fruit);



//Q2
echo "<h1>EXERCISE 2</h1><br>";

$prices = ["Jimmy" => 8888, "Hung Fong" => 500000, "Jia Er" => 0];

echo "<b>Original Prices : </b><br>";
foreach($prices as $name => $price) {
    echo "<br>";
    echo $name ." : USD ". $price;
}

echo "<br><br>";
$prices["Jimmy"] = 9000;
$prices["Jia Er"] = 7000;

echo "<b>Updated Prices : </b><br>";
foreach($prices as $name2 => $price2) {
    echo "<br>";
    echo $name2 ." : USD ". $price2;
}

$prices["Emu"] = 648;
$prices["Jia Qi"] = 1;

echo "<br><br>";
echo "<b>Add new product : </b><br>";
foreach($prices as $name2 => $price2) {
    echo "<br>";
    echo $name2 ." : USD ". $price2;
}

$sum = 0;
foreach($prices as $sum2) {
    $sum += $sum2;}

echo "<br><br>";
echo "Total Sum : USD ".$sum;




//q3
echo "<h1>EXERCISE 3</h1><br>";
$stu = [["Name" => "Aaron Lee", "Age" => 22, "Grade" => 'S'],
["Name" => "John Cena", "Age" => 22, "Grade" => 'C'],
["Name" => "Haw Many", "Age" => 19, "Grade" => 'A']];

foreach($stu as $stu1) {
    foreach($stu1 as $key => $value) 
    {
        echo '<br>';
        echo $key ." : ". $value."<br>";
    }
}

function findg(string $gn,array $grade1)
{
    foreach($grade1 as $stu)
        {
            if($stu["Grade"] === $gn)
            {
                foreach($stu as $key => $value)
                {
                    echo '<br><br>';
                    echo $key ." : ". $value;
                }
            } 

            else
            {
                echo "<br><br>";
                echo "Not found";
            }
        }
}
echo "<br><br><br>";
echo "<b>Searching 'A' Student : <br></b>";
findg('A',$stu);

function finda($agen)
{
    $ta = 0;
    $ts = count($agen);
    foreach($agen as $Age1)
    {
        $ta+= $Age1["Age"];
    }
    $avg = $ta / $ts;
    echo "Average age of students : ".$avg;

}

echo "<br><br>";
finda($stu);





//q4
echo "<h1>EXERCISE 4</h1><br>";

function ctof(int $c)
{
    $f = ($c*9/5)+32;
    if($f > 100)
    {
        echo "The fahrenheit is above 100°F  : ".$f." °F";
    }
    else
    {
        echo "The fahrenheit is below 100°F  : ".$f ." °F";
    }
}

ctof(35);


function fact($fac) {
    $n = 0;
    if ($fac == 0 || $fac == 1) {
        return 1;
    }

    else
    {
        return $fac * fact($fac -1);
    }
}

$num = 9;
if ($num > 0)
{
    echo "<br><br>Fact of num is : ".fact($num);
}
else
{
    echo "<br><br>NEGATIVE NUMBERS ARE NOT ACCEPTED 😑<br>";
}

function mult($x)
{
    $i = 1;
    while ($i <= 10) {
        {
            echo "<br>".$x." x ".$i." = ".$x*$i."<br>";
            $i++;
        }
}
}

mult(10);
?>