// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reverse = n.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(n); //Math.sign() returns 1 if sign is positive and -1 if sign is negative
}

console.log(reverseInt(-400));

module.exports = reverseInt;


/* MY FIRST SOLUTION (confusing/too long)
function reverseInt(n) {
     if(Math.sign(n) === 1 || n == 0){
        return parseInt(n.toString().split('').reverse().join('')) 
    } else {
        return parseInt((n*-1).toString().split('').reverse().join(''))*-1; 
    }
}
*/

/* BEST SOLUTION
function reverseInt(n) {
    const reverse = n.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(n);
}
*/