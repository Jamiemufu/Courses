<? $siteroot = 'introducingphp/course/challange_6'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css">
<title>Roux Conference</title>
<meta name="author" content="Designed by Ray Villalobos for Lynda.com">
<meta name="Copyright" content="Copyright Lynda.com 2012. All Rights Reserved.">
</head>
<body id="page_home">
<div class="wrapper">

  <!-- header -->
  <?php include './includes/header.php'; ?>
  <!-- end header -->

  <div id="rotator"><img src="images/art01.jpg" width="1000" height="320" alt="Artwork from show"></div>
  <!-- Rotator -->
  
  <?php include './includes/main.php'; ?>
  
  <!-- maincontent -->
  
  <aside id="sidebar" class="clearfix">
    <article id="comingtoevent">
      <h2 class="highlight">Coming to the event?</h2>
      <h3>Check out our mobile site</h3>
      <p>Our mobile site contains schedules, and exhibit/ artist details, accessible simply by scanning QR codes located all around the venue exhibit halls.</p>
      <p><img src="images/iphone.png" alt="iPhone"></p>
      <p><a class="link" href="#">Roux Mobile</a></p>
    </article>
    <!-- Coming to event -->
    
    <article id="schedule">
      <h2>Schedule</h2>
      <h3>Monday</h3>
      <p>The first day of CAC events is kicked off under the theme of Art in Full Color. From a demonstration in graffiti art on a wall of the  Rousseau Room, to the exhibit of colorful glazed modern glassware in the Dover Hall.</p>
      <h3>Tuesday</h3>
      <p>Water in Art is the theme for the second day, as art students gather at the Fountain of Intrigue to create ice sculptures, and art lecturers discuss the use of water as an art material, and water as an art subject.</p>
      <p><a class="link" href="schedule/index.php">Full Schedule</a></p>
    </article>
    <!-- Schedule --> 
  </aside>
  <!-- Sidebar -->

  ]<?php include './includes/footer.php'; ?>

</div>
</body>
</html>