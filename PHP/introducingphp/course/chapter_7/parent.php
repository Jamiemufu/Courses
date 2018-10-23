
<?php 
    $siteroot = '/introducingphp/course/chapter_7/'; 
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Using server-side includes</title>
    <link href="styles.css" rel="stylesheet" type="text/css">
</head>
<body>
<h1>Including External Files</h1>
<p>This paragraph is in the original file.</p>
<?php require './includes/para.html'; ?>
<p>This is also in the original file.</p>
<?php require './includes/para.html'; ?>
<?php require './includes/copyright.php';?>
<p> <?php echo lyn_copyright(2007); ?> Jamie Evans </p>
</body>
</html>