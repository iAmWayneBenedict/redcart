<?php 
    class Order_Product {
        private $conn;
        private $orderID;
        private $productID;
        private $quantity;
        private $subtotal;

        public function __construct($orderID, $productID, $quantity, $subtotal) {
            $this->orderID = $orderID;
            $this->productID = $productID;
            $this->quantity = $quantity;
            $this->subtotal = $subtotal;
        }

        public function setConn($conn) {
            $this->conn = $conn;
        }

        public function insertOrderProduct() {
            $sql = "INSERT INTO Order_products(Order_id, Product_id, Quantity, Subtotal) VALUES('$this->orderID', '$this->productID', '$this->quantity', '$this->subtotal');";
            if($this->conn->query($sql)) {

            } else {
                echo "Error" . $this->error();
            }
        }
    }
?>