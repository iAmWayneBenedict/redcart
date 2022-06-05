<?php
	session_start();
	include_once "../php/db connect.php";
	include_once "../php/printProducts.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="style.css" />
	<title>Shop | redcart</title>
</head> 
<style type="text/css">
	.cart-img,
	.search-img {
	  position: relative;
	}

	#num-items {
	  position: absolute;
	  top: 0;
	  right: 0;
	  width: 15px;
	  height: 15px;
	  border-radius: 50%;
	  background: red;
	  display: none;
	  opacity: 0;
	  color: #fff;
	  font-size: 11px;
	  justify-content: center;
	  align-items: center;
	}

</style>
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
				<li><a href="index.php">Shop</a><span>+</span></li>
				<li id="smartphones">
					<a href="index.php">Smartphones</a><span><img src="../icons/next.png" /></span>
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
					<a href="#tablet">Smartphones</a
						><span><img src="../icons/next.png" id="myimg-smartphone" /></span>
					</li>
					<div class="smartphone-container">
						<div class="smartphone-container-items">
			              <li><a href="#mediapad">Mediapad Series</a><span>+</span></li>
			              <li><a href="#matepad">Matepad Series</a><span>+</span></li>
			              <li><a href="#mate">Mate Series</a><span>+</span></li>
			              <li><a href="#nova">Nova Series</a><span>+</span></li>
			              <li><a href="#p">P Series</a><span>+</span></li>
			              <li><a href="#y">Y Series</a><span>+</span></li>
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
						<li><a href="#laptop">Laptops</a></li>
						<li><a href="#tablet">Tablets</a></li>
						<li><a href="#smartphone">Smartphones</a></li>
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
								if(isset($_SESSION['cart-items'])) {
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
		<div class="add-filter"></div>

		<!-- Back to top Button -->
		<div class="back-to-top-container">
			<div class="back-to-top">
				<img src="../icons/forward.png">
			</div>
		</div>

		<!-- Background Image -->
		<div class="background-image-container">
			<div class="background-image">
				<img src="../photos/mate 30.jpg">
				<span>Brand you never expect</span>
			</div>
		</div>

		<!-- Navigation filter items -->
		<div class="navigation-filter-container">
			<div class="navigation-filter-items">
				<span class="filter-title">FILTERS</span><span>|</span><span id="filter-result">30</span><span class="result-des">Result(s)</span><span class="available-order">Available Order</span>
			</div>
		</div>

		<!-- Main Content -->
		<div class="container-main" id="main">
			<!-- Filter Side navigation Slide -->
			<aside class="filter-side-navigation-container">
				<div class="filter-side-navigation model-series">
					<span>CLASS</span>
					<div class="input-filter-series">
						<label>
							<input type="checkbox" name="model" value="b0" checked="checked" data-filter="all-items"> 
							<span class = "value-input">All Model Series</span>
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b7" data-filter="matebook-series"> 
							<span class = "value-input">Matebook Series</span>
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b1" data-filter="mediapad-series">
							<span class = "value-input">Mediapad Series</span> 
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b2" data-filter="matepad-series"> 
							<span class = "value-input">Matepad Series</span>
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b3" data-filter="nova-series"> 
							<span class = "value-input">Nova Series</span>
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b4" data-filter="mate-series"> 
							<span class = "value-input">Mate Series</span>
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b5" data-filter="p-series"> 
							<span class = "value-input">P Series</span>
							<span class="checkmark"></span>
						</label>

						<label>
							<input type="checkbox" name="model" value="b6" data-filter="y-series"> 
							<span class = "value-input">Y Series</span>
							<span class="checkmark"></span>
						</label>
					</div>
				</div>
				<div class="filter-side-navigation prices-section">
					<span>PRICES</span>
					<form>			
						<div class="input-filter-series">
							<label>
								<input type="radio" name="price" value="a0" checked="checked" id="all-prices"> 
								<span class = "value-input">All Prices</span>
								<span class="radiomark"></span>
							</label>
							<label>
								<input type="radio" name="price" value="a1"> 
								<span class = "value-input">P80,000 up</span>
								<span class="radiomark"></span>
							</label>
							<label>
								<input type="radio" name="price" value="a2"> 
								<span class = "value-input">P60,000 - P80,000</span>
								<span class="radiomark"></span>
							</label>
							<label>
								<input type="radio" name="price" value="a3"> 
								<span class = "value-input">P40,000 - P60,000</span>
								<span class="radiomark"></span>
							</label>
							<label>
								<input type="radio" name="price" value="a4"> 
								<span class = "value-input">P20,000 - P40,000</span>
								<span class="radiomark"></span>
							</label>
							<label>
								<input type="radio" name="price" value="a5"> 
								<span class = "value-input">P10,000 - P20,000</span>
								<span class="radiomark"></span>
							</label>
							<label>
								<input type="radio" name="price" value="a6"> 
								<span class = "value-input">P10,000 below</span>
								<span class="radiomark"></span>
							</label>
						</div>
					</form>
				</div>
			</aside>

			<main class="main-content-container">
				<div class="main-content">
				<!-- Displays all the items -->
					<?php
						$product1 = new Product($conn);
						$product1->displayProducts();
						$product1->closeDB();
					?>
				</div>
			</main>
		</div>
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

		<script type="text/javascript" src="script.js"></script>
		<script type="text/javascript" src="../navigation.js"></script>
		<script type="text/javascript">

		    	// display the total number of items in the cart
		      const numItems = document.querySelector("#num-items");
		      if (numItems.textContent >= 1 && numItems.textContent <= 100) {
		        numItems.style.display = "flex";
		        numItems.style.opacity = "1";
		      } else {
		        numItems.style.display = "none";
		      }

		      const cart = document.querySelector(".cart-img");
		      cart.addEventListener("click", () => {
		      	location.href = "../add to cart/index.php";
		      });
   		</script>
	</body>
	</html>