<?php 
    class Customer {
        private $conn;
        private $fName;
        private $lName;
        private $address;

        public function __construct($conn, $fname, $lname, $address) {
            $this->conn = $conn;
            $this->fName = $fname;
            $this->lName = $lname;
            $this->address = $address;
        }

        public function insertCustomer() {
            $sql = "INSERT INTO Customers(Last_name, First_name, Address) VALUES('$this->lName', '$this->fName', '$this->address');";
            if($this->conn->query($sql)) {

            } else {
                echo "Error" . $this->conn->error();
            }
        }
    }
?>