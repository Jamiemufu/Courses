<?php

$suspect = false;
$pattern = '/Content-type:|Bcc:|Cc:/i';

//recursive
function isSuspect($value, $pattern, &$suspect) {
    if (is_array($value)) {
        foreach ($value as $item) {
            isSuspect($item, $pattern, $suspect);
        }
    } else {
        if (preg_match($pattern, $value)) {
            $suspect = true;
        }
    }
}

isSuspect($_POST, $pattern, $suspect);

if(!$suspect) :
    foreach ($_POST as $key => $value) {
        //if value is array re-assign value else trim and return
        $value = is_array($value) ? $value : trim($value);
        //checking if value is empty and key is in required array
        if (empty($value) && in_array($key, $required)) {
            //Add key to missing
            $missing[] = $key;
            $$key = '';   
            //if its in array and expected assign value
        } elseif (in_array($key, $expected)) {
            $$key = $value;
        }
    }

endif;
