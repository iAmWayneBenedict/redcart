<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>About | redcart</title>
</head>
<style type="text/css">
  .dowhatyoucant-section-item-container > img {
  width: 100%;
  height: 23rem;
  transition: 1s linear;
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
        <li><a href="../shop/index.php">Shop</a><span>+</span></li>
        <li id="smartphones">
          <a href="../shop/index.php">Smartphones</a><span><img src="../icons/next.png" /></span>
        </li>
        <li><a href="index.php">About Us</a><span>+</span></li>
        <li><a href="../contact/index.php">Contact Us</a><span>+</span></li>
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
            <li><a href="index.php">About</a></li>
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

    <!-- About Us -->
    <div class="about">
      <div class="about-con">
        <div class="about-des-con">
          <span>Setting the Pace for technology revolution.</span>
          <p>We connect every region through our technology, payments capabilities, and logistics. Today, we aim to serve millions of customer dare to pursue the real value of technology, while continuously surprising people.</p>
        </div>
        <div class="main-about">
          <span>Our Core Pillars</span>
          <div class="con">
            <div class="con-content">
              <span>TECHNOLOGY</span>
              <span>A smarter way to shop.</span>
              <p>We harness both existing and emerging technologies to redefine the shopping experience.</p>
            </div>
            <div class="con-content">
              <span>PAYMENTS</span>
              <span>Safe, Seamless Transactions.</span>
              <p>Varying stages of e-payments and e-commerce adaptation to ease the customers into digital payment solution that may can trust.</p>
            </div>
            <div class="con-content">
              <span>LOGISTICS</span>
              <span>We get in there.</span>
              <p>With en end-to-end Logistics capabilities</p>
            </div>
          </div>
        </div>
      </div>
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