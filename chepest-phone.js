const phones = [
    { name: 'Samsung s5', price: 30000, camara: '1 mp', stroage: '10gb' },
    { name: 'Samsung s6', price: 20000, camara: '2 mp', stroage: '20gb' },
    { name: 'Samsung s7', price: 10000, camara: '3 mp', stroage: '30gb' },
    { name: 'Samsung s9', price: 40000, camara: '4 mp', stroage: '40gb' },
    { name: 'Samsung s10', price: 60000, camara: '5 mp', stroage: '50gb' },
    { name: 'Samsung s11', price: 50000, camara: '6 mp', stroage: '60gb' },
    { name: 'Samsung s12', price: 8000, camara: '7 mp', stroage: '70gb' },

]
let chepest = phones[ 0 ];
for ( const phone of phones ) {
    //compare prce only
    if ( phone.price < chepest.price ) {
        chepest = phone;
    }
}
console.log( chepest );