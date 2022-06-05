<?php 
    class Order {
        private $conn;
        private $customerID;
        private $total;

        public function __construct($conn, $customerID, $total) {
            $this->conn = $conn;
            $this->customerID = $customerID;
            $this->total = $total;
        }

        public function insertOrder() {
            $sql = "INSERT INTO Orders(Customer_id, total) VALUES('$this->customerID', '$this->total');";
            if($this->conn->query($sql)) {

            } else {
                echo "Error" . $this->conn->error();
            }
        }
    }
?>