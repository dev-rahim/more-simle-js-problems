function getArayMaxNumber( array ) {
    let max = array[ 0 ];
    for ( let i = 0; i < array.length; i++ ) {
        const element = array[ i ];
        if ( element > max ) {
            max = element;
        }
    }
    return max;
}
let numbers = [ 12, 52, 36, 52, 41, 52, 52, 45, 85, 85 ];
var maxNumber = getArayMaxNumber( numbers );
console.log( maxNumber );



function getArayMinNumber( array ) {
    let min = array[ 0 ];
    for ( let i = 0; i < array.length; i++ ) {
        const element = array[ i ];
        if ( element < min ) {
            min = element;
        }
    }
    
    return min;
}
var minNumber = getArayMinNumber( numbers );
console.log( minNumber );