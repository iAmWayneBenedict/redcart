<?php

  class Cart {
    public $itemPrice;
    private $itemName;
    private $itemImg;
    private $itemQuantity;
    private $itemID;
    private $subTotal;

    private $totalPrice = 0;
    private $vat = 0.012;

    public function __construct($img, $name, $price, $quantity, $itemID, $subTotal) {
      $this->itemImg = $img;
      $this->itemName = $name;
      $this->itemPrice = $price;
      $this->itemQuantity = $quantity;
      $this->itemID = $itemID;
      $this->subTotal = $subTotal;
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

    public function itemInfoCart() {
      return '<div class="item-con">
        <label>
          <input type="checkbox" name="item[]" value="'. $this->itemName .'" class="item-checkbox hide" />
          <span class="checkmark"></span>
        </label>
        <div class="item-info-cart">
          <span class="item-img">
            <img src="'. $this->itemImg .'" alt="" />
          </span>
          <span class="item-name">'. $this->itemName .'</span>
          <span class="item-quantity">'. $this->itemQuantity .'</span>
          <span class="item-price">'. $this->toPhiCurrency($this->itemPrice) .'</span>
          <span class="item-subtotal">'. $this->toPhiCurrency($this->subTotal).'</span>
          <input type="text" class="temp-item-price" value="'. $this->itemPrice .'" hidden>
        </div>
      </div>'; 
    }
  }