const greetings = 'Hellow, How are you.';
function getReverseString( string ) {
    let emptyString = '';
    for ( const letter of string ) {
        emptyString = letter + emptyString;
    }
    return emptyString;
}
let reversGreetings = getReverseString( greetings );
console.log( reversGreetings );