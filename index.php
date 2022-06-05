<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en"> 
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Home | redcart</title>
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
        <li><a href="#">Home</a></li>
        <li><a href="shop/index.php">Shop</a><span>+</span></li>
        <li id="smartphones">
          <a href="shop/index.php">Smartphones</a><span><img src="icons/next.png" /></span>
        </li>
        <li><a href="about/index.php">About Us</a><span>+</span></li>
        <li><a href="contact/index.php">Contact Us</a><span>+</span></li>
      </ul>
    </nav>
  </header>

  <!-- Smartphones Navigation menu -->
  <div class="header-li">
    <div class="nav-li">
      <ul>
        <li>
          <a href="shop/index.php">Smartphones</a
            ><span><img src="icons/next.png" id="myimg-smartphone" /></span>
          </li>
          <div class="smartphone-container">
            <div class="smartphone-container-items">
              <li><a href="shop/index.php">Mediapad Series</a><span>+</span></li>
              <li><a href="shop/index.php">Matepad Series</a><span>+</span></li>
              <li><a href="shop/index.php">Mate Series</a><span>+</span></li>
              <li><a href="shop/index.php">Nova Series</a><span>+</span></li>
              <li><a href="shop/index.php">P Series</a><span>+</span></li>
              <li><a href="shop/index.php">Y Series</a><span>+</span></li>
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
            <li><a href="shop/index.php">Shop</a></li>
            <li><a href="shop/index.php">Laptops</a></li>
            <li><a href="shop/index.php">Tablets</a></li>
            <li><a href="shop/index.php">Smartphones</a></li>
          </ul>
        </div>
        <div class="logo"><span>red</span>cart</div>
        <div class="sub-main-nav">
          <ul>
            <li><a href="about/index.php">About</a></li>
            <li><a href="contact/index.php">Contact</a></li>
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
            <img src="icons/supermarket.png" alt="" />
          </div>
          <div class="search-img">
            <img src="icons/search-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="blur"></div>
    <div class="filter"></div>

    <!-- Navigation -->
    <!-- <div class="navigation"><p>Home</p></div> -->

    <!-- Carousel Slide -->
    <div class="container">
      <div class="con">
        <div class="slider">
          <div class="slide active">
            <div class="img">
              <img src="photos/Mate 30 pro.jpg" />
              <div class="description">
                <div class="content">
                  <p>Huawei Mate 30 Pro</p>
                  <div class="buy-now">
                      <form action="items/index.php" method="POST">
                        <button type="submit" name="item-submit" value="1010">Buy Now</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="img">
              <img src="photos/p smart pro.jpg" />
              <div class="description">
                <div class="content">
                  <p>Huawei P Smart Pro</p>
                  <div class="buy-now">
                      <form action="items/index.php" method="POST">
                        <button type="submit" name="item-submit" value="1025">Buy Now</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="img">
              <img src="photos/Download/matebookD14.png" />
              <div class="description">
                <div class="content">
                  <p>Huawei Matebook D14</p>
                  <div class="buy-now">
                      <form action="items/index.php" method="POST">
                        <button type="submit" name="item-submit" value="1002">Buy Now</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="img">
              <img src="photos/matepad t8.jpg" />
              <div class="description">
                <div class="content">
                  <p>Huawei Matepad T8</p>
                  <div class="buy-now">
                      <form action="items/index.php" method="POST">
                        <button type="submit" name="item-submit" value="1006">Buy Now</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div
      class="control-container prev"
      style="background-image: url('icons/back.png');"
      ></div>
      <div
      class="control-container next"
      style="background-image: url('icons/next.png');"
      ></div>

      <!-- Marker -->
      <div class="marker"></div>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="my-nav">
        <ul>
          <li class="first">
            <span><a href="#featured">The future of device</a></span>
          </li>
          <li class="second">
            <span><a href="#explore">Explore our device</a></span>
          </li>
          <li class="third">
            <span><a href="#dowhatyoucant">#dowhatyoucant</a></span>
          </li>
          <li class="fourth">
            <span><a href="#find-your-gadget">Find your device</a></span>
          </li>
          <li class="fifth">
            <span><a href="#here-for-you">here for you 27/7</a></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Nav Duplicate -->
    <div class="bottom-nav-duplicate">
      <div class="my-nav-duplicate">
        <ul>
          <li class="first">
            <span><a href="#featured">The future of device</a></span>
          </li>
          <li class="second">
            <span><a href="#explore">Explore our devoce</a></span>
          </li>
          <li class="third">
            <span><a href="#dowhatyoucant">#dowhatyoucant</a></span>
          </li>
          <li class="fourth">
            <span><a href="#find-your-gadget">Find your device</a></span>
          </li>
          <li class="fifth">
            <span><a href="#here-for-you">here for you 27/7</a></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Featured Products -->
    <div class="featured-product-container"  id="featured">
      <div class="featured-product-item">
        <div class="featured-img">
          <img src="photos/p smart pro.jpg" id="featured-img" />          
        </div>
        <div class="featured-product-description">
          <div class="featured-product-content">
            <p>Huawei P Smart Pro</p>
            <div class="featured-product-buy-now">
              <form action="items/index.php" method="POST">
                <button type="submit" name="item-submit" value="1025">Buy Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Explore Section -->
    <div class="explore-section-container" id="explore">
      <div class="explore-section">
        <div class="explore-section-items-container">
          <div class="explore-section-items">
            <span class="explore-title">
              Explore our Devices
            </span>
            <span class="explore-content">
              After a decade of poineering mobile firsts, the Huawei family of
              products is redifining the tech curve yet again. Embrace a
              smarter, better and faster way to live.
            </span>
            <span class="explore-options" style="display: none;"></span>
          </div>
        </div>
        <div class="explore-section-items-con">
          <div class="explore-section-items-container">
            <div class="explore-section-items y-series-phones">
              <img src="photos/y9s.jpeg" />
              <span class="explore-content-phones">
                <span class="explore-content-title">
                  Huawei Y9s
                </span>
                  <form action="items/index.php" method="POST">
                    <button type="submit" name="item-submit" value="1022">Buy Now</button>
                  </form>
              </span>
            </div>
          </div>
          <div class="explore-section-items-container">
            <div class="explore-section-items y-series-phones">
              <img src="photos/y9prime20191.png" />
              <span class="explore-content-phones">
                <span class="explore-content-title">
                  Huawei Y9 prime 2019
                </span>
                  <form action="items/index.php" method="POST">
                    <button type="submit" name="item-submit" value="1021">Buy Now</button>
                  </form>
              </span>
            </div>
          </div>
        </div>
      </div>          
    </div>

    <!-- DoWHATYOUCANT Section -->
    <div class="dowhatyoucant-section-container" id="dowhatyoucant">
      <div class="dowhatyoucant-section-title-container">
        <span>#DoWhatYouCant</span>
        <span>Dare to LEAP</span>
      </div>
      <div class="dowhatyoucant-section-main-content">
        <div class="dowhatyoucant-section-item-container">
          <img src="photos/dowhatyoucant3.jpg">
          <div class="myfilter">
          </div>
          <div class="dowhatyoucant-section-item-content">
            <span>HUAWEI WITHIN</span>
            <span>#SpreadTheLove</span>
          </div>
        </div>
        <div class="dowhatyoucant-section-item-container">
          <img src="photos/dowhatyoucant2.jpg">
          <div class="myfilter">
          </div>
          <div class="dowhatyoucant-section-item-content">
            <span>HUAWEI WITHIN</span>
            <span>#SpreadTheLove</span>
          </div>
        </div>
        <div class="dowhatyoucant-section-item-container">
          <img src="photos/dowhatyoucant4.jpg">
          <div class="myfilter">
          </div>
          <div class="dowhatyoucant-section-item-content">
            <span>HUAWEI WITHIN</span>
            <span>#SpreadTheLove</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Find your Gadget Section -->
    <div class="find-gadget-section-container" id="find-your-gadget">
      <div class="find-gadget-section-title-container">
        <span>Find Your Device</span>
      </div>
      <div class="find-gadget-section-content-container">
        <div class="find-gadget-item-container">
          <div class="find-gadget-img-container">
            <img src="icons/phone.png">
          </div>
          <div class="find-gadget-content">
            <a href="shop/index.php">Smartphones <span><img src="icons/next.png"></span></a>
            <div class="find-gadget-content-description">
              <span>Nova Series</span>
              <span>Mate Series</span>
              <span>P Series</span>
              <span>Y Series</span>
            </div>
          </div>
        </div>
        <div class="find-gadget-item-container">
          <div class="find-gadget-img-container">
            <img src="icons/gadget.png">
          </div>
          <div class="find-gadget-content">
            <a href="shop/index.php">Tablet <span><img src="icons/next.png"></span></a>
            <div class="find-gadget-content-description">
              <span>Matepad Series</span>
              <span>Mediapad Series</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Here for you section -->
    <div class="here-for-you-container" id="here-for-you">
      <div class="here-for-you-img">
        <img src="photos/images.jpg">
      </div>
      <div class="here-for-you-text">
        <span class="here-title">Here for you 24/7</span>
        <span class="here-des">With Huawei mobile products, you get always-on support-whenever you need it.</span>
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
          <a href="mailto:redcart official"><img src="photos/facebook.png"></a>
          <a href="mailto:@redcart"><img src="photos/twitter.png"></a>
          <a href="mailto:redcart@gmail.com"><img src="photos/google.png"></a>
        </div>
      </div>
    </footer>

    <script src="main.js"></script>
    <script src="navigation.js"></script>
    <script src="scroll and window width.js"></script>
    <script type="text/javascript">
      const numItems = document.querySelector("#num-items");
      if (numItems.textContent >= 1 && numItems.textContent <= 100) {
        numItems.style.display = "flex";
        numItems.style.opacity = "1";
      } else {
        numItems.style.display = "none";
      }
      const cart = document.querySelector(".cart-img");
          cart.addEventListener("click", () => {
            location.href = "add to cart/index.php";
          });
    </script>
  </body>
  </html>
