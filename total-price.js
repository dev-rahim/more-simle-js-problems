const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 5000 },

];
let totalPrice = 0;
for ( const product of products ) {
    totalPrice = totalPrice + product.price;
}
console.log( totalPrice );

const shopingCart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 7 },
    { name: 'watch', price: 3680, quantity: 1 },
    { name: 'phone', price: 5000, quantity: 4 },

];
let cartTotal = 0;
for ( const product of shopingCart ) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log( cartTotal );