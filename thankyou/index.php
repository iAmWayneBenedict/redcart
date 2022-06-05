<?php 
    include_once "../php/db connect.php"; 
    include_once "../php/thankyou.func.php";
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Thank you | redcart</title>
    </head>
    <body>
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
                        <a href="../shop/index.php">Smartphones</a
                        ><span><img src="../icons/next.png" /></span>
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
                        ><span
                            ><img src="../icons/next.png" id="myimg-smartphone"
                        /></span>
                    </li>
                    <div class="smartphone-container">
                        <div class="smartphone-container-items">
                            <li>
                                <a href="../shop/index.php">Mediapad Series</a
                                ><span>+</span>
                            </li>
                            <li>
                                <a href="../shop/index.php">Matepad Series</a
                                ><span>+</span>
                            </li>
                            <li>
                                <a href="../shop/index.php">Mate Series</a
                                ><span>+</span>
                            </li>
                            <li>
                                <a href="../shop/index.php">Nova Series</a
                                ><span>+</span>
                            </li>
                            <li>
                                <a href="../shop/index.php">P Series</a
                                ><span>+</span>
                            </li>
                            <li>
                                <a href="../shop/index.php">Y Series</a
                                ><span>+</span>
                            </li>
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
        <main>
            <div class="container">
                <h1>Thank you for shopping!</h1>
                <div class="data">
                    <p>You have purchased (<span>
                        <?php 
                            if (isset($_GET['success'])) {
                                $orderID = getOrderID($conn);
                                echo getSizeOfOrderProducts($conn, $orderID);
                            }
                        ?>
                    </span>) product(s):</p>
                    <?php 
                        if (isset($_GET['success'])) {
                            printDataOrderProducts($conn, $orderID);
                        }
                    ?>
                    <p>Please prepare the ammount of <span>
                        <?php
                            if (isset($_GET['success'])) {
                                echo getTotal($conn, $orderID);
                            }
                            $conn->close();
                        ?>
                    </span> during the delivery.</p>
                    <p>Delivery will arrive within 5-7 days after the purchase.</p>
                    <p>Delivery cost is free in all areas in the country.</p>
                    <p>For concerns please email us <a href="mailto:support@support.com.ph">support@support.com.ph</a> or <a href="tel:09123456789">09123456789</a></p>
                </div>
                <a href="../shop/index.php">Continue Shopping</a>
            </div>
        </main>
    </body>
</html>
