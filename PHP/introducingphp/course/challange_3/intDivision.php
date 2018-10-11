<?php
    //find a way to calculate hours part of division
    $total_minutes = 318;
    $minutes = $total_minutes % 60;
    $hours = ($total_minutes - $minutes) / 60;
    $result = 48 - 2 * 24 + 13 / 3;
    echo $result;
    echo 'Hours: ' . $hours . ' Minutes: ' .  $minutes;
?>