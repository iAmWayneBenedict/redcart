// Back to top button
window.onscroll = () => {
  backToTop();
};

function backToTop() {
  const backToTopBtn = document.querySelector(".back-to-top-container");
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    backToTopBtn.classList.add("back-to-top-active");
  } else {
    backToTopBtn.classList.remove("back-to-top-active");
  }
}

// Back to top onclick
const backToTopBtn = document.querySelector(".back-to-top-container");

backToTopBtn.addEventListener("click", () => {
  return (document.documentElement.scrollTop = 0);
});

// total update
// let totalPriceValue = document.querySelector("#totalPrice");
// totalPriceValue.value = "P30,690.00";
const quantityValue = document.querySelector(".quantity-bar input");
console.log(quantityValue);
quantityValue.addEventListener("change", totalUpdate);

function totalUpdate() {
  if (this.value < 1 || this.value > 10) {
    this.value = 1;
  }
  let totalPriceContainer = document.querySelectorAll(".total-bar span")[1];
  let totalPriceContainer2 = document.querySelector(".item-total span span");
  const itemPrice = document.querySelectorAll(".storage span")[1];
  let a = itemPrice.textContent.replace("P", "");
  let itemPriceValue = parseFloat(a.replace(",", ""));

  let totalPrice = this.value * itemPriceValue;

  let totalPriceString = totalPrice.toString();
  let splitToThree = totalPriceString.split("");
  splitToThree.reverse();

  if (totalPriceString.length > 6) {
    splitToThree.splice(6, 0, ",");
    splitToThree.splice(3, 0, ",");
  } else {
    splitToThree.splice(3, 0, ",");
  }
  splitToThree.reverse();
  let totalPriceResult = splitToThree.join("");
  totalPriceContainer.innerHTML = `P${totalPriceResult}.00`;
  totalPriceContainer2.innerHTML = `P${totalPriceResult}.00`;
}

// display the total number of items in the cart
const numItems = document.querySelector("#num-items");
if (numItems.textContent >= 1 && numItems.textContent <= 100) {
  numItems.style.display = "flex";
  numItems.style.opacity = "1";
} else {
  numItems.style.display = "none";
}

const cart = document.querySelector(".cart-img");
cart.addEventListener("click", () => {
  location.href = "../add to cart/index.php";
});