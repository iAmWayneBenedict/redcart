<?php

    class Item {
        private $conn;
        private $prodID;

        // displays the item
        public function displayItem() {
            // gets only the row where the product id can be found in the table
            $sql = "SELECT * FROM Products WHERE Product_id=". $this->prodID ."";
            $result = $this->conn->query($sql);
            if($result->num_rows != 0) {
                $row = $result -> fetch_assoc();
                echo $this->createItem($row);
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

        // sets the product id in the product id in class
        public function setProductID($prodID) {
            $this->prodID = intval($prodID);
        }

        // sets the conn in the conn in class
        public function setConn($conn) {
            $this->conn = $conn;
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


        public function createItem($row) {
            return '<form action="" method="POST" class="add-to-cart">
                        <div class="item-information-navbar-container">
                            <div class="item-information-left">
                                <div class="product-item-name">
                                    <span>'. $row['Product_name'] .'</span>
                                </div>
                            </div>
                            <div class="item-information-right">
                                <div class="item-total">
                                    <span>Total <span>'. $this->toPhiCurrency($row['Product_price']) .'</span></span>
                                </div>
                                <div class="add-to-cart-btn">
                                    <button type="submit" name="add-to-cart">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                
                        <div class="main-container">
                            <div class="main-img">
                                <img src="'. $row['Product_picture'] .'">
                            </div>
                            <div class="information-content">
                                <div class="information-content-title">
                                    <span>'. $row['Product_name'] .'</span>
                                </div>
                                <div class="specs-container">
                                    <ul>
                                        '. $this->getDescription($row['Product_description']) .'
                                    </ul>
                                </div>
                                <div class="storage-choices">
                                    <div class="title-storage">
                                        <span>MEMORY</span>
                                    </div>
                                    <div class="storage-container">
                                        <div class="storage">
                                            <span>'. $row['Product_storage'] .'</span>
                                            <span>'. $this->toPhiCurrency($row['Product_price']) .'</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="total-item">
                                    <div class="title-total">
                                        <span>SUMMARY</span>
                                    </div>
                                    <div class="total-items-container">
                                        <div class="quantity-bar">
                                            <span>Quantity</span>
                                            <input type="number" name="quantity" id="quanity-value" value="1">
                                        </div>
                                        <div class="total-bar">
                                            <span>Total</span>
                                            <span>'. $this->toPhiCurrency($row['Product_price']) .'</span>
                                        </div>
                                    </div>
                                    <input type="text" name="id" value="'. $row['Product_id'] .'" hidden/>
                                    <input type="text" name="name" value="'. $row['Product_name'] .'" hidden/>
                                    <input type="text" name="price" value="'. $row['Product_price'] .'" hidden />
                                    <input type="text" name="picture" value="'. $row['Product_picture'] .'" hidden />
                                    <input type="text" name="storage" value="'. $row['Product_storage'] .'" hidden />
                                    <div class="add-to-cart-btn2">
                                        <button type="submit" name="add-btn">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>'; 
        }

    }