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



//create function with default cart obj.
function addProductToCart(product, cart ={}){
    //destructure product
    const {name, priceInCents, availableSizes} = product

    //if statement. if product is in cart. +1 quantity
    if(cart[name] !== undefined){
        cart[name].quantity+=1
    }else{
    //else, create product object in cart wwith destructured data
        cart[name] = {
            priceInCents: priceInCents,
            quantity: 1
        }
    }
    //desired output 
    return cart
}



function calculateTotal(cart) {
    //create total value
    let value = 0;

    //loop through cart object using for/in
    for(let item in cart){
        //multiply price by quantity of each item in cart. add to value
        value+=(cart[item].priceInCents * cart[item].quantity)
    }

    //return value
    return value
}




function printReceipt(cart) {
    //guard clause, if empty, null
    if(Object.keys(cart).length === 0){
        return null
    
    //if object has values
    }else{
        //create receipt string and total
        let receipt = '';
        let total = 0;

        //loop, for every key(items) in cart
        for(let items in cart){
            //create variable for price and quantity for legibility
            let quantity = cart[items].quantity;
            let price = cart[items].priceInCents;
            //add to string using template literals and values within cart object
            receipt+=`${quantity}x${items} - $${((quantity * price)/100).toFixed(2)}\n`;
            //multiply quantity&price. divide by 100 for dollar amount
            total+=((quantity * price)/100);
        }

        //add final total line to end of string and return
        receipt += `Total: $${total.toFixed(2)}`;
        return receipt
    }
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
