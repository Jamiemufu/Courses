<?php

$number = 2;

//pass by value (inner scope)
function doubleIt($number) {
    return $number *= 2;
};


//pass by reference (change the actual value (ONLY VARIABLES))
function doubleItref(&$num) {
    $num *= 2;
};

$doubled = doubleItref($num);

echo '$doubled is ' . $doubled . '<br/>';
echo '$number is ' . $number . '<br/>';