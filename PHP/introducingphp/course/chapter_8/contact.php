<?php
$errors=[];
$missing=[];
//if submit button clicked
if (isset($_POST['send'])) {
    $expected = ['name', 'email', 'comments'];
    $required = ['name', 'comments'];
    $to = 'Jamie Evans <jamieevans@itg.co.uk>';
    $subject = 'Feedback from online form';
    $headers = [];
    $headers[] = 'From: webmaster@example.com';
    $headers[] = 'Cc:: webmaster@example.com';
    $headers[] = 'Content-type: text/plain; charset=utf-8';
    $authorized = null;
    require './includes/process.php';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
    <link rel="stylesheet" href="css/style.css">

</head>
<body>

    <h1>Contact</h1>
    <?php if ($_POST && $suspect) : ?>
    <p class="warning">Sorry your mail could not be sent.</p>

    <?php elseif($errors || $missing) : ?>
    <p class="warning">Please fix the item(s) indicated</p>

    <?php endif; ?>
    <!-- Auto include path -->
    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
        <p>
            <label for="name">Name: 
                <?php if ($missing && in_array('name', $missing)) : ?>
                    <span class="warning">Please enter your name</span>
                <?php endif; ?>

            </label>
            <input type="text" name="name" id="name"
            <?php //if missing or errors, store name as value to preserve input
            if ($errors || $missing) {
                echo 'value="' . htmlentities($name) . '"';
            }
            ?>
            >
        </p>

        <p>
            <label for="email">Email: 
                <?php if ($missing && in_array('email', $missing)) : ?>
                   <span class="warning">Please enter your email</span>
                <? endif; ?>
            </label>
            <input type="email" name="email" id="email"
            <?php //if missing or errors, store name as value to preserve input
             if ($errors || $missing) {
                echo 'value="' . htmlentities($email) . '"';
            } 
            ?>
            >
        </p>

        <p>
            <label for="comments">Comments: 
                <?php if ($missing && in_array('comments', $missing)) : ?>
                    <span class="warning">Please enter a comment</span>
                <? endif; ?>
            </label>
            <textarea name="comments" id="comments" cols="30" rows="10"><?php 
             if ($errors || $missing) {
                echo htmlentities($comments);
            }
            ?></textarea>
        </p>

        <p>
            <input type="submit" name="send" value="Send Comments">
        </p>
    </form>

    <pre>
    <?php
    if ($_GET) {
        echo 'Content of the $_GET array';
        print_r($_GET);
    } elseif ($_POST) {
        echo 'Content of the $_POST array';
        print_r($_POST);
    }
    ?>
    </pre>
</body>
</html>