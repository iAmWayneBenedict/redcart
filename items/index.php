<?php 
	session_start();
	include_once "../php/db connect.php";
	include_once "../php/printItem.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="../jquery.js"></script>
	<title>Product | redcart</title>
</head>

<body>
	<!-- Side menu nav -->
	<header>
		<div class="hamburger2">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<nav>
			<ul>
				<li><a href="../index.php">Home</a></li>
				<li><a href="../shop/index.php">Shop</a><span>+</span></li>
				<li id="smartphones">
					<a href="../shop/index.php">Smartphones</a><span><img src="../icons/next.png" /></span>
				</li>
				<li><a href="../about/index.php">About</a></li>
				<li><a href="../contact/index.php">Contact</a></li>
			</ul>
		</nav>
	</header>

	<!-- Smartphones Navigation menu -->
	<div class="header-li">
		<div class="nav-li">
			<ul>
				<li>
					<a href="../shop/index.php">Smartphones</a><span><img src="../icons/next.png"
							id="myimg-smartphone" /></span>
				</li>
				<div class="smartphone-container">
					<div class="smartphone-container-items">
						<li><a href="../shop/index.php">Huawei Nova Series</a><span>+</span></li>
						<li><a href="../shop/index.php">Huawei Mate Series</a><span>+</span></li>
						<li><a href="../shop/index.php">Huawei P Series</a><span>+</span></li>
						<li><a href="../shop/index.php">Huawei Y Series</a><span>+</span></li>
					</div>
				</div>
			</ul>
		</div>
	</div>

	<!-- Main menu nav -->
	<div class="header">
		<div class="nav">
			<div class="hamburger">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="main-nav">
				<ul>
					<li><a href="../index.php">Home</a></li>
					<li><a href="../shop/index.php">Laptops</a></li>
					<li><a href="../shop/index.php">Tablets</a></li>
					<li><a href="../shop/index.php">Smartphones</a></li>
				</ul>
			</div>
			<div class="logo"><span>red</span>cart</div>
			<div class="sub-main-nav">
				<ul>
					<li><a href="../about/index.php">About</a></li>
					<li><a href="../contact/index.php">Contact</a></li>
				</ul>
			</div>
			<div class="icons-container">
				<div class="cart-img">
					<span id="num-items">
			          <?php
					 	if (isset($_SESSION['cart-items'])) {
							echo sizeof($_SESSION['cart-items']);
						} else {
							echo "0";
						} 

					  ?>
			        </span>
					<img src="../icons/supermarket.png" alt="" />
				</div>
				<div class="search-img">
					<img src="../icons/search-2.png" alt="" />
				</div>
			</div>
		</div>
	</div>

	<!-- Filters -->
	<div class="blur"></div>
	<div class="filter"></div>

	<!-- Back to top Button -->
	<div class="back-to-top-container">
		<div class="back-to-top">
			<img src="../icons/forward.png">
		</div>
	</div>

	<?php
		if(isset($_POST['item-submit'])) {
			// gets the product id from the shop
			$prodID = $_POST['item-submit'];

			// displays new item
			$item1 = new Item();
			$item1->setConn($conn);
			$item1->setProductID($prodID);
			$item1->displayItem();
			$item1->closeDB();
		}
	?>

	<footer>
		<div class="top-content">
			<span>Copyright &copy 23 Jun 2020 - 04 Jul 2020 REDCART All Rights Reserved.</span>
			<span>This website is best viewed using Microsoft Internet Explorer version 11 or higher and/or latest
				version of Google Chrome and Mozilla Firefox browsers.</span>
		</div>
		<div class="bottom-content">
			<div class="left-content">
				<ul>
					<li>PHILIPPINES/ENGLISH</li>
					<li>ACCESSIBILITY HELP</li>
					<li>PRIVACY</li>
					<li>LEGAL</li>
					<li>SITEMAP</li>
				</ul>
			</div>
			<div class="right-content">
				<span>FOLLOW US:</span>
				<a href="mailto:redcart official"><img src="../photos/facebook.png"></a>
				<a href="mailto:@redcart_official"><img src="../photos/twitter.png"></a>
				<a href="mailto:redcart@gmail.com"><img src="../photos/google.png"></a>
			</div>
		</div>
	</footer>
	<script type="text/javascript" src="script.js"> </script>
	<script type="text/javascript" src="../navigation.js"></script>
	<script>
			$(document).ready(function() {
				$('.add-to-cart').submit(function(e) {
					// finds and assigns all the inputs including buttons to the inputs
					var $inputs = $(this).find(":input");

					var values = {};

					// assigns the value of array to the object
					$inputs.each(function() {
						values[this.name] = $(this).val();
					});

					$.ajax({
						url: '../add to cart/index.php', // form destination
						method: 'POST',
						data: values, // all the data from the item
						success : function(result) { //displays if success
							alert("Item successfully added to cart!");
						},
						error: function(xhr) {  // displays the error
							alert(`An error occured: ${xhr.status} ${xhr.statusText}`);
						}
					})

					e.preventDefault(); // oreventing the form from submitting
				});
			});
		</script>
</body>

</html>