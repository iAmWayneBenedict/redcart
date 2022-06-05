// window onload
window.onload = () => {
  displayHeaderItem();
  updateOrderPrices();
  hasCheckedCheckbox();
}

// item-checkbox
// item remove checkbox
const removeItemBtn = document.querySelector('.remove-cancel-item-btn');
removeItemBtn.addEventListener('click', showItemCheckBoxes);

function showItemCheckBoxes() {
  let items = Array.from(document.querySelectorAll('.item-con'));
  if (items.length <= 0) {
    return;
  }
  let removeItemBtnTxt = this.innerText;
  if (removeItemBtnTxt === 'Remove')
    this.innerText = 'Cancel';
  else {
    this.innerText = "Remove";
    let allCheckBoxes = Array.from(document.querySelectorAll('.item-checkbox'));
    for (let checkBox of allCheckBoxes) {
      checkBox.checked = false;
      deactivateBtn = true;
    }
  }
  const deleteItemBtn = document.querySelector('.delete-item-btn');
  deleteItemBtn.classList.toggle('active');
  const itemCheckboxes = Array.from(document.querySelectorAll('.item-con label'));
  for (const itemCheckbox of itemCheckboxes) {
    itemCheckbox.classList.toggle('active');
  }

  // update btn status
  hasCheckedCheckbox();
}

// display header of carts
function displayHeaderItem() {
  const headerItem = document.querySelector('.header2');
  let items = Array.from(document.querySelectorAll('.item-con'));

  if (items.length <= 0) {
    headerItem.style.display = 'none';
    return;
  }

  headerItem.style.display = 'flex';
}

// update prices
let quantityInput = Array.from(document.querySelectorAll('.quantity'));
for (const input of quantityInput) {
  input.addEventListener('change', updateCartPrices);
}

function updateCartPrices() {
  if (this.value <= 0 || this.value > 10)
    this.value = 1;

  let itemPriceCon = this.parentNode.previousElementSibling;
  let itemPriceValue = this.parentNode.nextElementSibling.value;
  // compute total price of all items
  let totalPrice = removeNANInPrice(itemPriceValue, this.value);
  // add comma in price
  let price = addedCommaItemPrice(totalPrice);


  // update text in DOM
  itemPriceCon.innerText = price;
  // update order prices
  updateOrderPrices();
  insertPrice();
}

function updateOrderPrices() {
  let subTotalCon = document.querySelector('.subtotal-order-container').lastElementChild;
  let vatTotalCon = document.querySelector('.vat-order-container').lastElementChild;
  let totalTotalCon = document.querySelector('.total-order').lastElementChild;


  // display prices on the order to the DOM
  let totalPrices = computeOrderPrices();
  for (let i = 0; i < totalPrices.length; i++) {
    totalPrices[i] = addedCommaItemPrice(totalPrices[i]);
  }
  subTotalCon.innerText = totalPrices[1];
  vatTotalCon.innerText = totalPrices[2];
  totalTotalCon.innerText = totalPrices[0];
}

// remove PESO sign and comma in prices
// returns float value of the price
function removeNANInPrice(itemPriceValue, inputValue) {
  let price;
  let totalPrice = 0;
  price = itemPriceValue.replace('P', "");
  price = price.split(',');
  price = price.join('');
  price = parseFloat(price);
  totalPrice = price * parseFloat(inputValue);

  return totalPrice.toFixed(2);
}

// adds comma on the prices 
// returns the computed price with PESO sign and comma
function addedCommaItemPrice(price) {
  let addedCommaPrice = "" + price;
  addedCommaPrice = addedCommaPrice.split("");
  addedCommaPrice = addedCommaPrice.reverse();
  if (addedCommaPrice.length > 15) {
    addedCommaPrice.splice(15, 0, ",");
    addedCommaPrice.splice(12, 0, ",");
    addedCommaPrice.splice(9, 0, ",");
    addedCommaPrice.splice(6, 0, ",");
  } else if (addedCommaPrice.length > 12) {
    addedCommaPrice.splice(12, 0, ",");
    addedCommaPrice.splice(9, 0, ",");
    addedCommaPrice.splice(6, 0, ",");
  } else if (addedCommaPrice.length > 9) {
    addedCommaPrice.splice(9, 0, ",");
    addedCommaPrice.splice(6, 0, ",");
  } else if (addedCommaPrice.length > 6) {
    addedCommaPrice.splice(6, 0, ",");
  }
  addedCommaPrice = addedCommaPrice.reverse();
  addedCommaPrice = addedCommaPrice.join("");
  addedCommaPrice = `P${addedCommaPrice}`;

  return addedCommaPrice;
}

// computes the total order prices
function computeOrderPrices() {
  let itemPrices = Array.from(document.querySelectorAll('.item-subtotal'));
  let totalSubtotal = 0;
  let price;

  for (const itemPrice of itemPrices) {
    price = itemPrice.innerText.replace('P', '');
    price = price.split(",");
    price = price.join('');
    price = parseInt(price);
    totalSubtotal += price;
  }

  let totalPrice = totalSubtotal;
  let vatTotal = (totalSubtotal * .12);
  totalSubtotal -= vatTotal;

  return [totalPrice.toFixed(2), totalSubtotal.toFixed(2), vatTotal.toFixed(2)];
}

let itemCheckBoxes = Array.from(document.querySelectorAll('.item-checkbox'));
// to identify if the checkbox is checked
for (const checkBox of itemCheckBoxes) {
  checkBox.addEventListener('change', hasCheckedCheckbox);
}

function hasCheckedCheckbox() {
  const deleteItemBtn = document.querySelector('.delete-item-btn');
  let isTrue = itemCheckBoxes.some((checkBox) => {
    return checkBox.checked;
  });

  if (!isTrue) {
    deleteItemBtn.addEventListener('click', preventForm);
    deleteItemBtn.style.opacity = 0.5;
  } else {
    deleteItemBtn.removeEventListener('click', preventForm);
    deleteItemBtn.style.opacity = 1;
  }
}

// prevent form from submiting
function preventForm(event) {
  event.preventDefault();
}


// closes the register overlay
const xBtn = document.querySelector('form').children[0];
xBtn.addEventListener("click", () => {
  const customerLoginForm = document.querySelector(".customer-login-form");
  customerLoginForm.style.display = "none";
});

// opens the register overlay
const payNowBtn = document.querySelector('.pay-now');
payNowBtn.addEventListener("click", () => {
  let itemCons = document.querySelectorAll(".item-con");
  if (itemCons.length === 0) {
    alert("Empty Cart!");
    return;
  }

  const customerLoginForm = document.querySelector(".customer-login-form");
  customerLoginForm.style.display = "flex";
});