import { products } from "../../Data/products.js";
import { cartItems, removeFromCart, saveToLocalStorage } from "../../Data/cartItems.js";

export function renderCheckout() {
  let cartHTML = "";
  cartItems.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    cartHTML += `<div class="cart-items-container">
          <div class="delivery-date">
            Delivery date:
            <span class="delivery-date-value">Wednesday, January 8</span>
          </div>
          <div class="cart-item-details-grid">
            <img
              src="${product.image}"
              class="product-image" />
            <div class="cart-item-details">
              <div class="product-name">
                ${product.name}
              </div>
              <div class="product-price">$10.90</div>
              <div class="container-quantity">
                Quantity:
                <span class="quantity-label">${item.quantity}</span>
                <input type="number" class="new-quantity-input" />
                <span class="update-quantity-link">Update</span>
                <span class="save-quantity">Save</span>
                <span class="delete-quantity  delete-quantity-js" data-id="${product.id}">Delete</span>
              </div>
            </div>
            <div class="delivery-options">
              <div class="delivery-options-title">Choose a delivery option:</div>
              <div
                class="delivery-option">
                <input
                  class="delivery-option-input"
                  checked=""
                  name="${product.id}"
                  type="radio"/>
                <div>
                  <div class="delivery-option-date">Wednesday, January 8</div>
                  <div class="delivery-option-price">FREE Shipping</div>
                </div>
              </div>
              <div
                class=" delivery-option"
                data-delivery-option-id="6e2dd65a-6665-4f24-bcdc-f2ecdbc6e156">
                <input
                  class="delivery-option-input"
                  name="${product.id}"
                  type="radio"/>
  
                <div>
                  <div class="delivery-option-date">Thursday, January 2</div>
                  <div class="delivery-option-price">$4.99 - Shipping</div>
                </div>
              </div>
  
              <div
                class="delivery-option"
                data-delivery-option-id="178aa766-de75-4686-8442-038c1a027003">
                <input
                  class="delivery-option-input"
                  name="${product.id}"
                  type="radio"/>
  
                <div>
                  <div class="delivery-option-date">Tuesday, December 31</div>
                  <div class="delivery-option-price">$9.99 - Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  document.querySelector(".cart-item-container1").innerHTML = cartHTML;
  document.querySelectorAll(".delete-quantity-js").forEach((del) => {
    del.addEventListener("click", () => {
      removeFromCart(del.dataset.id);
      saveToLocalStorage(cartItems);
      renderCheckout();
    });
  });
}
renderCheckout();
