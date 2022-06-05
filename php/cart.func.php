<?php
  // unset($_SESSION['cart-items']);
  if(isset($_POST['add-to-cart'])) {
    $itemImg = $_POST['picture'];
    $itemName = $_POST['name'];
    $itemPrice = $_POST['price'];
    $itemQuantity = $_POST['quantity'];
    $itemID = $_POST['id'];


    $subTotal = intval($itemPrice) * intval($itemQuantity);
    storeInSession($itemImg, $itemName, $itemPrice, $itemQuantity, $itemID, $subTotal);
  }

  if (isset($_POST['delete-item-btn'])) {
    $items = $_POST['item'];
    removeItems($items);
  }

  if (isset($_POST['submit-btn'])) {
    unset($_SESSION['cart-items']);
  }

  function storeInSession($img, $name, $price, $quantity, $id, $subTotal) {
    $_SESSION['cart-items'][$name]['img'] = $img;
    $_SESSION['cart-items'][$name]['name'] = $name;
    $_SESSION['cart-items'][$name]['price'] = $price;
    $_SESSION['cart-items'][$name]['quantity'] = $quantity;
    $_SESSION['cart-items'][$name]['id'] = $id;
    $_SESSION['cart-items'][$name]['subtotal'] = $subTotal;

  }

  // display items stored in Session
  function displayItem() {
    foreach($_SESSION['cart-items'] as $key => $value) {
      foreach($value as $key1 => $value1) {
        if($key1 == 'img') 
          $img = $value1;
        else if($key1 == 'name')
          $name = $value1;
        else if($key1 == 'price')
          $price = $value1;
        else if($key1 == 'quantity')
          $quantity = $value1;
        else if($key1 == 'id')
          $id = $value1;
        else if($key1 == 'subtotal')
          $subtotal = $value1;
      }
      
      $cartItem = new Cart($img, $name, $price, $quantity, $id, $subtotal);
      echo $cartItem->itemInfoCart();
    }
  }

  // remove items from session
  function removeItems($items) {
    foreach ($items as $item) {
      unset($_SESSION['cart-items'][$item]);
    }
  }

  
 if (isset($_POST['checkout-btn'])) {
  //  inserts the customer to the database
  $fName = $_POST['f-name'];
  $lName = $_POST['l-name'];
  $address = $_POST['address'];
  $customer1 = new Customer($conn, $fName, $lName, $address);
  $customer1->insertCustomer();

  //  inserts the order to the database
  // gets the last iserted id in the customers
  $result_id = $conn->query("SELECT LAST_INSERT_ID()");
  $last_inserted_id = mysqli_fetch_array($result_id)[0];

  // gets the total ammount of purchase
  $total = 0;
  foreach($_SESSION['cart-items'] as $key => $value) {
    foreach($value as $key1 => $value1) {
      if($key1 == 'subtotal') {
        $total += floatval($value1);
      }
    }
  }

  $order1 = new Order($conn, $last_inserted_id, $total);
  $order1->insertOrder();

  //  inserts the order products to the database
  // gets the last iserted id in the orders
  $result_id = $conn->query("SELECT LAST_INSERT_ID()");
  $last_inserted_id = mysqli_fetch_array($result_id)[0];

  // gets the id, quantity and subtotal in the Session
  foreach($_SESSION['cart-items'] as $key => $value) {
    foreach($value as $key1 => $value1) {
      if($key1 == 'id')
        $id = $value1;
      else if($key1 == 'quantity')
        $quantity = $value1;
      else if($key1 == 'subtotal')
        $subtotal = $value1;
    }
    $orderProduct = new Order_Product($last_inserted_id, $id, $quantity, $subtotal);
    $orderProduct->setConn($conn);
    $orderProduct->insertOrderProduct();
    
  }

  // unsets all teh data saved in the session
  unset($_SESSION['cart-items']);
  // redirect after inserting all the data
  header("Location: ../thankyou/index.php?success");
  $conn->close();
 }
