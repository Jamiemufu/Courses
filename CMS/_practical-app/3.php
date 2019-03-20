<?php include "functions.php"; ?>
<?php include "includes/header.php";?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">

<?php  

	$string = 'I love PHP';

	if ($string === 'I love PHP') 
	{
		echo $string;
	}
	else if ($string === 'PHP is shit')
	{
		echo 'Doesnt match noob';
	}
	else {
		echo 'pwns';
	}

	for ($counter=1; $counter < 11; $counter++) 
	{
		echo "<br/> ". $counter;
	}

	$value = 10;

	switch ($value) {
		case '4':
			echo 'hmmm';
			break;
		
		case '2':
			echo 'hmmm';
			break;

		case '1':
			echo 'hmmm';
			break;

		case '5':
			echo 'hmmm';
			break;

		case '10':
			echo '<br/>BINGO';
			break;
	}
/*  Step1: Make an if Statement with elseif and else to finally display string saying, I love PHP



	Step 2: Make a forloop  that displays 10 numbers


	Step 3 : Make a switch Statement that test againts one condition with 5 cases

 */

	
?>






</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php"; ?>