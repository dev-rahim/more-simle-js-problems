const names = [ 'abul', 'babul', 'kabul', 'kabul', 'asraful', 'beutiful', 'abul', 'abdul', 'sakibul' ];
function removeDuplicate( names ) {
    const unicque = [];
    // for ( let i = 0; i < names.length; i++ ) {
    //     const element = names[ i ];
    //     // console.log( element );
    // }
    for ( const element of names ) {
        if ( unicque.indexOf( element ) == -1 ) {
            unicque.push( element );
        }
    }
    return unicque;
}
const unicqueNames = removeDuplicate( names );
console.log( unicqueNames );



const numbers = [ 12, 23, 52, 25, 25, 25, 32, 52, 523, 262, 62, 62, 62, 35, 20, 20, 20 ];
function getUnicqueNumber( array ) {
    const unicqueNumber = [];
    for ( const elements of array ) {
        if ( unicqueNumber.indexOf( elements ) == -1 ) {
            unicqueNumber.push( elements );
        }
    }
    return unicqueNumber;
}

let unicqueNumbers = getUnicqueNumber( numbers );
console.log( unicqueNumbers );
