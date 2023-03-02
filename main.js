/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  //guard clause
  if(!products || !name || !size){
    return null
  }
  
  //iterate through products
  for(let i = 0; i < products.length; i++){
    //match name with product.name
    let currentProduct = products[i];
    if(currentProduct.name===name){
      //if name matches, check for desired size
      if(currentProduct.availableSizes.includes(size)){
        return currentProduct
      }
    }
  }
  //nothing satisfied? null
  return null
}

function addProductToCart(product, cart) {}

function calculateTotal(cart) {}

function printReceipt(cart) {
  if(!cart){
    return null
  }
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
