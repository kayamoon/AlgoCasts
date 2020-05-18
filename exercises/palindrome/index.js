// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
    return str.split('').every((char, i) => { //not the best way to solve it because it checks if elements are equal twice
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;

/*
function palindrome(str) {
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}
*/

/*
function palindrome(str) {
    return str === str.split('').reverse().join('');
}
*/

/*
function palindrome(str) {
    let reverseStr = '';
    for (let char of str){
        reverseStr = char + reverseStr;
    }
    return reverseStr === str;
}
*/

/*
function palindrome(str) {
    let reverseStr = str.split('').reduce((reverseStr, char) => char + reverseStr, '');
    return reverseStr === str;
}
*/

/*
function palindrome(str) {
    return str.split('').every((char, i) => { //not the best way to solve it because it checks if elements are equal twice
        return char === str[str.length - i - 1];
    });
}
*/