// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverseStr = '';
    for (let character of str){ //new syntax like a for each loop
        reverseStr = character + reverseStr; //adds character to the start of the reverseStr string
    }
    return reverseStr;
}

module.exports = reverse;

/*
function reverse(str) {
    return str.split('').reverse().join('');
}
*/

/*
function reverse(str) {
    let reverseStr = '';
    for (let character of str){ //new syntax like a for each loop
        reverseStr = character + reverseStr; //adds character to the start of the reverseStr string
    }
    return reverseStr;
}
*/

/*
function reverse(str) {
    return str.split('').reduce((reverseStr, char) => char + reverseStr, '');
}
*/