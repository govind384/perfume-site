// js/script.js

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in header
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cart.length;
  });
}
updateCartCount();

// Add item to cart
function addToCart(name, price, img) {
  cart.push({ name, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

// Show cart items
if (document.getElementById("cart-items")) {
  let cartItemsDiv = document.getElementById("cart-items");
  let total = 0;
  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" width="80">
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total-price").innerText = "Total: $" + total;
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// Product image slider
function changeImage(imgElement) {
  document.getElementById("main-img").src = imgElement.src;
}
