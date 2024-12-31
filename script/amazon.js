import { products } from "../Data/products.js";



const body = document.querySelector(".main-js");


function renderProducts() {
  let html = "";
  products.forEach((product) => {
    html += `<div class="product-container">
        <div class="proudct-image">
          <img
            class="img"
            src="${product.image}"
            alt="${product.name}" />
        </div>
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-rating">
          <img
            class="rating-star"
            src="images/ratings/rating-${product.rating.stars * 10}.png"
            alt="Rating" />
          <div class="product-rating-count">${product.rating.count}</div>
        </div>
        <div class="product-price">$${(product.priceCents / 100).toFixed(
          2
        )}</div>
        <div class="product-quantity-container">
          <select name="Product Quantity" class="product-quantity product-quantity-js">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="cart-container">
          <div class="added-to-cart">
            <img
              class="checkmark"
              src="images/icons/checkmark.png"
              alt="Added" />
            Added
          </div>
        </div>
        <div class="add-to-cart">
          <button class="add-to-cart-button add-to-cart-btn-js" data-id = "${product.id}">Add to Cart</button>
        </div>
      </div>`;
  });
  body.innerHTML = html;
}
renderProducts();

let productQuantity = parseInt(document.querySelector(".cart-quantity").innerText);

document.querySelectorAll(".add-to-cart-btn-js").forEach((cartItems) => {
  cartItems.addEventListener("click", () => {
    const productId = cartItems.dataset.id;
    document.querySelector(".cart-quantity").innerText = productQuantity;
    
    const productContainer = cartItems.closest(".product-container");
    const quantity = productContainer.querySelector(".product-quantity-js");
    productQuantity += parseInt(quantity.value);

    console.log(`Selected Quantity for Product ID ${productId}: ${quantity.value}`);
  });
});