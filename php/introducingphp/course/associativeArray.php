<?php
    //Similar to JavaScript Dictonary Key => Pair
    $descriptions = [
        'Earth' => 'mostly harmess',
        'Marvin' => 'the paranoid android'
    ];

    $descriptions['Zaphod'] = 'President of the Imperial Galactive Government';

    echo $descriptions['Marvin'], '<br/>';
    print_r($descriptions);

    echo "Earth is described as {$descriptions['Earth']}";
?>