<?php 
    $chars = ['Jamie', 'Kevin', 'Sami', 'JamieS', 'Anyone', 'Nobody'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>forEach</title>
</head>
<body>
    <?php foreach ($chars as $key) {
        # code...
        echo "<li>$key</li>";
    }
    ?>
</body>
</html>