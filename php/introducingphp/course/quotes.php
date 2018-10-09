<?php
    //quotes much be matching

    // \ tells php engine to treat next char as string
    $book = 'Hitchhker\'s Guide to the Galaxy';
    echo $book, '<br/>';
    //or use double quotes
    $book = "Hitchhker's Guide to the Galaxy";
    echo $book;
    //Does not work
    echo 'I love $boo <br/>';
    //Variables inside the string need to be in double quotes
    echo "I love $book <br/>";
?>