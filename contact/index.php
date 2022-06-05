<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Contact | redcart</title>
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
        <li><a href="../about/index.php">About</a></li>
        <li><a href="index.php">Contact</a></li>
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
            <li><a href="index.php">Contact</a></li>
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

    <!-- Contact Us Container -->
    <div class="contact">
      <div class="contact-container">
          <div class="contact-des">
            <p>For inquiries comments and/or suggextions you may contact our customers service through:</p> 
          </div>
        <div class="contact-con">
          <div class="left">
            <div class="hotline">
              <span>Hotline:</span>
              <span><a href="tel: 09123456789">09123456789 | 01 234 5678</a></span>
            </div>
            <div class="email">
              <span>Email:</span>
              <span><a href="mailto: support@pagename.com.ph">support@pagename.com.ph</a></span>
            </div>
          </div>
          <div class="right">
            <form action="mailto: support@pagename.com.ph">
              <span>You may also fill out the form below.</span>
              <input type="text" name="name" placeholder="NAME" required="required">
              <input type="enail" name="email" placeholder="EMAIL" required="required">
              <textarea placeholder="MESSAGE" cols="26" rows="5" required="required"></textarea>
              <button type="submit" name="submit">Submit</button>
            </form>
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
    <script type="text/javascript" src="navigation.js"></script>
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