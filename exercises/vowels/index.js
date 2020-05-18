// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) { //regex solution, but not as clear
    let matches = str.match(/[aeiou]/gi); //g is for global, i is for case insensitive
    //if there are no matches then it returns null, if there are then it returns an array of the matches
    return matches !== null ? matches.length : 0;
}

module.exports = vowels;

/* Iterative solution, better for an interview
function vowels(str) {
    vowelsArr = ['a','e','i','o','u'];
    let vowelCt = 0;
    for(let char of str.toLowerCase()){ //iterate through the string and add 1 every time there is a vowel in the string
        if(vowelsArr.includes(char)){ // includes() can be used on arrays and strings
            vowelCt++;
        }
    }
    return vowelCt;
}
*/