<?php

    // gets the last order in the database
    function getOrderID($conn) {
        $orderID = 0;
        $sql = "SELECT Order_id FROM Orders";
        $result = $conn->query($sql);
        if($result -> num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                $orderID = $row['Order_id'];
            }
        }

        // returns the last order id
        return $orderID;
    }

    // gets the size of the Ordered Products
    function getSizeOfOrderProducts($conn, $orderID) {
        $counter = 0;
        $sql = "SELECT * FROM Order_products WHERE Order_id = $orderID";
        $result = $conn->query($sql);
        if($result -> num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                $counter += 1;
            }
        }
        
        return $counter;
    }

    // prints the data from the database
    function printDataOrderProducts($conn, $orderID) {
        $sql = "SELECT * FROM Order_products WHERE Order_id = $orderID";
        $result = $conn->query($sql);
        if($result -> num_rows > 0) {
            echo "<ul>";
            while($row = $result -> fetch_assoc()) {
                echo "<li><span>{$row['Quantity']}</span> unit(s) of <span>". getProductName($conn, $row['Product_id']) ."</span> with the total price of <span>". toPhiCurrency($row['Subtotal']) ."</span></li>";
            }
            echo "</ul>";
        }
    }

    function getTotal($conn, $orderID) {
        $sql = "SELECT Total FROM Orders WHERE Order_id = $orderID";
        $result = $conn->query($sql);
        $total = $result->fetch_assoc();

        return toPhiCurrency($total['Total']);
    }

    function getProductName($conn, $productID) {
        $sql = "SELECT Product_name FROM Products WHERE Product_id = $productID";
        $result = $conn->query($sql);
        $productName = $result->fetch_assoc();

        return $productName['Product_name'];
    }

    // to add comma in every three digit number
	function toPhiCurrency($curr) {
		$tempPrice = intval($curr);
		$tempPrice = strrev($tempPrice);
		$tempPrice = chunk_split($tempPrice, 3, ',');
		$tempPrice = str_split($tempPrice);
		array_pop($tempPrice);
		$tempPrice = join($tempPrice);
		$tempPrice = strrev($tempPrice); 

		return "P".$tempPrice.".00";
    }