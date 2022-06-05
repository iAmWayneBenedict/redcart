<?php
    class Product {
        private $conn;

        public function __construct($conn) {
            $this->conn = $conn;
        }

        // displays the products
        public function displayProducts() {
            $sql = "SELECT * FROM Products";
            $result = $this->conn -> query($sql);
            if($result -> num_rows > 0) {
                while($row = $result -> fetch_assoc()) {
                    echo $this->createProduct($row);
                }
            }
        }

        // gets the data item 
        private function getDataItem($name) {
            $name = explode(" ", $name);
            $name = $name[1];
            $name = strtolower($name);
            $series = array("matebook", "matepad", "mate", "nova", "mediapad");
            foreach($series as $values) {
                if ($name == $values) {
                    return $name;
                }
            }

            if ($name[0] == 'p') {
                return 'p';
            } else if ($name[0] == 'y') {
                return 'y';
            }
        }

        // separates the description by * in database to easily print
        // gets the description and returns in html li tags
        private function getDescription($des) {
            $des = explode("*", $des);
            $temp = "";
            foreach($des as $values) {
                $temp .= "<li>". $values ."</li>";
            }
            return $temp;
        }

        // to add comma in every three digit number
		private function toPhiCurrency($curr) {
			$tempPrice = intval($curr);
			$tempPrice = strrev($tempPrice);
			$tempPrice = chunk_split($tempPrice, 3, ',');
			$tempPrice = str_split($tempPrice);
			array_pop($tempPrice);
			$tempPrice = join($tempPrice);
			$tempPrice = strrev($tempPrice); 

			return "P".$tempPrice.".00";
        }
        
        // closes the database
        public function closeDB() {
            return $this->conn->close(); 
        }

        // creates new product
        // returns html tags
        public function createProduct($row) {
            return '<div class="main-content-item-container" data-item="'. $this->getDataItem($row['Product_name']) .'-series">
                        <div class="main-content-item">
                            <div class="img-shop-container">
                                <img src="'. $row['Product_picture'] .'">
                            </div>
                            <div class="storage-and-price-des">
                                <div class="storage-item-and-price">
                                    <span>'. $row['Product_storage'] .'</span>
                                    <span>'. $this->toPhiCurrency($row['Product_price']) .'</span>
                                </div>
                            </div>
                            <div class="model-and-price-des">
                                <div class="model-item-and-price">
                                    <span>'. $row['Product_name'] .'</span>
                                    <span>'. $this->toPhiCurrency($row['Product_price']) .'</span>
                                </div>
                            </div>
                            <div class="shipping-des-container">
                                <div class="shipping-des">
                                    <p>Free Shipping within Metro Manila and selected areas of Luzon</p>
                                </div>
                            </div>
                            <div class="specs-des-container">
                                <div class="specs-des">
                                    <ul>
                                        '. $this->getDescription($row['Product_description']) .'
                                    </ul>
                                </div>
                            </div>
                            <div class="shop-buttons-container">
                                <div class="shop-buttons">
                                    <span class="buy-now-btn">
                                        <form action="../items/index.php" method="POST">
                                            <button type="submit" name="item-submit" value="'. $row['Product_id'] .'">View Details</button>
                                        </form>
                                    </span>
                                </div>
                            </div>
                            <div class="wishlist-btn-container">
                                <div class="wishlist-container">
                                    <div class="added-to-favorites">Added to favorites</div>
                                    <div class="heart-button">
                                        <img src="../icons/heart-1.png">
                                    </div>
                                    <div class="added-to-wishlist">Added to wishlist</div>
                                    <div class="wishlist-btn">
                                        <span id="wishlist">Add to wishlist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>';
        }
    }

    

?>