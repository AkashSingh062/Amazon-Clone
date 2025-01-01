export let cartItems = JSON.parse(localStorage.getItem("cartItems"));

if (!cartItems) {
  cartItems = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: "2",
    },
  ];
}

export function saveToLocalStorage(){
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// || CALCULATE TOTAL PRODUCT IN THE CART
export function cartQuantityCalculate(cart){
  let quantity = 0;
  cart.forEach(item => {
    quantity += parseInt(item.quantity);
  })
  return quantity;
};

//  || ADD TO THE CART FUNCTION:
export function addToCart( productId, productQuantity){
  let matchingItems;

  cartItems.forEach(item => {
    if (item.productId === productId){
      matchingItems = item;
    }
  });

  if(matchingItems){
    matchingItems.quantity += productQuantity;
  } else {
    cartItems.push({
      productId: productId,
      quantity: productQuantity,
      deliveryOptionId : '1'
    });
  }
  saveToLocalStorage();
};

//  || REMOVE FROM THE CART FUNCTION:

export function removeFromCart(productId){
  const newCart = [];

  cartItems.forEach(items =>{
    if(items.productId != productId){
      newCart.push(items)
    }
  })
  cartItems = newCart;
  saveToLocalStorage();
};