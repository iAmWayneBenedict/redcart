<?php
	session_start();
	include_once "../php/db connect.php";
	include_once "../php/insertCustomer.php";
	include_once "../php/insertOrder.php";
	include_once "../php/insertOrderProduct.php";
	include_once "../php/cart.class.php";
	include_once "../php/cart.func.php";
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="style.css" />
	<title>Cart | redcart</title>
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
					<a href="../shop/index.php">Smartphones</a
						><span><img src="../icons/next.png" id="myimg-smartphone" /></span>
					</li>
					<div class="smartphone-container">
						<div class="smartphone-container-items">
							<li><a href="../shop/index.php">Mediapad Series</a><span>+</span></li>
			                <li><a href="../shop/index.php">Matepad Series</a><span>+</span></li>
			                <li><a href="../shop/index.php">Mate Series</a><span>+</span></li>
			                <li><a href="../shop/index.php">Nova Series</a><span>+</span></li>
			                <li><a href="../shop/index.php">P Series</a><span>+</span></li>
			                <li><a href="../shop/index.php">Y Series</a><span>+</span></li>
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
						<li><a href="../shop/index.php">Shop</a></li>
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
		<div class="customer-login-form">
			<form action="index.php" method="POST" id="register">
				<span>X</span>
				<h1>Register</h1>
				<label for="">
					<span>First name</span>
					<input type="text" name="f-name" id="f-name" required>
					<span class="bottom-effect"></span>
				</label>
				<label for="">
					<span>Last name</span>
					<input type="text" name="l-name" id="l-name" required>
					<span class="bottom-effect"></span>
				</label>
				<label for="">
					<span>Address</span>
					<input type="text" name="address" id="address" required>
					<span class="bottom-effect"></span>
				</label>
				<button type="submit" name="checkout-btn" class="checkout-btn">CHECKOUT</button>
			</form>
		</div>

		<!-- add to cart section -->
		<main>
			<form action="" method="post">
				<div class="container">
						<div class="left">
							<div class="cart-items-title">
								<span>CART (<span><?php
									if (isset($_SESSION['cart-items'])) 
										echo count($_SESSION['cart-items']);
									else	
										echo '0';
								?></span>) ITEM<?php if(isset($_SESSION['cart-items']) && count($_SESSION['cart-items']) > 1)	echo "S"; ?></span>
								<div>
									<button type="submit" name="delete-item-btn" class="delete-item-btn">Remove</button>
									<button class="remove-cancel-item-btn" onclick="event.preventDefault();">Remove</button>	
								</div>
							</div>
							<div class="header2">
								<span>Item</span>
								<span>Name</span>
								<span>Quantity</span>
								<span>Price</span>
								<span>Subtotal</span>
							</div>
							<?php
								if(isset($_SESSION['cart-items'])) 
									displayItem();
							?>
						</div>
				</div>
			</form>
			<form action="" method="POST" class="pay-now-form" onsubmit="event.preventDefault();">
				<div class="right">
					<div class="order-summary">
						<span>Order Summary</span>
					</div>
					<div class="subtotal-order-container">
						<span>Subtotal (<span><?php
							if (isset($_SESSION['cart-items'])) 
								echo count($_SESSION['cart-items']);
							else	
								echo '0';
						?></span>) Item(s)</span>
						<span>P0.00</span>
					</div>
					<div class="shipping-order-container">
						<span>Shipping</span>
						<span>Free</span>
					</div>
					<div class="vat-order-container">
						<span>12% vat</span>
						<span>P0.00</span>
					</div>
					<div class="total-order">
						<span>Total(incl. vat)</span>
						<span>P0.00</span>
					</div>
					<button type="submit" name="pay-now" class="pay-now">PAY NOW</button>
				</div>
			</form>
		</main>
		<footer>
			<div class="top-content">
				<span>Copyright &copy 23 Jun 2020 - 04 Jul 2020 REDCART All Rights Reserved.</span>
				<span>This website is best viewed using Microsoft Internet Explorer version 11 or higher and/or latest version of Google Chrome and Mozilla Firefox browsers.</span>
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
		<script type="text/javascript" src="../navigation.js"></script>
		<script type="text/javascript" src="cart.js"></script>
</body>
</html>