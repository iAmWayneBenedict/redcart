<?php

class cart {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function createItemCart() {
        return '<div class="add-to-cart-row-container">
                    <label>
                        <input type="checkbox" name="remove" id="to-remove"> 
                        <span class="checkmark"></span>
                        <input type="text" name="item[]" id="to-hide" value="">
                    </label>
                    <div class="add-to-cart-row">						
                        <span class="model">' . $row["model"] . '</span>
                        <span class="storage">' . $row["storage"] . '</span>
                        <span class="color">' . $row["color"] . '</span>
                        <span class="price">' . $row["price"] . '</span>
                    </div>
                </div>'; 
    }
}

