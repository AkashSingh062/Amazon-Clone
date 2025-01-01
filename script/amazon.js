import { products } from "../Data/products.js";
import { cartItems, addToCart, cartQuantityCalculate } from "../Data/cartItems.js";



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
            <option value="1">1</option>
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
          <button class="add-to-cart-button add-to-cart-btn-js" data-id = "${
            product.id
          }">Add to Cart</button>
        </div>
      </div>`;
  });
  document.querySelector(".main-js").innerHTML = html;
  document.querySelector(".cart-quantity-js").innerText = cartQuantityCalculate(cartItems);
}
renderProducts();

let productQuantity = parseInt(
  document.querySelector(".cart-quantity").innerText
);

document.querySelectorAll(".add-to-cart-btn-js").forEach((Items) => {
  Items.addEventListener("click", () => {
    const productId = Items.dataset.id;
    const quantity = document.querySelector('.product-quantity-js').value;
    console.log(typeof Number(quantity) );
    addToCart( productId, Number(quantity));
    document.querySelector(".cart-quantity-js").innerText = cartQuantityCalculate(cartItems);
  });
});
