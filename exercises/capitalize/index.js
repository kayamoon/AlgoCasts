// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) { //solution is more brute force and makes assumption that first letter of sentence would always be capital
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if(i === 0){ //capitalize the first character of the sentence
            result += str[i].toUpperCase(); 
        } else if(str[i-1] === ' '){ //if the character to the left of the current character is a space, capitalize it
            result += str[i].toUpperCase();
        } else { //if not then just add the character to the result
            result += str[i];
        }
        debugger;
    }
    return result;
}

capitalize('look, it is working!');

module.exports = capitalize;


/* More legible and easier than the other solution
function capitalize(str) {
    let words = [];
    for(let word of str.split(' ')){ //separate sentence into words
        words.push(word[0].toUpperCase() + word.slice(1)); //replace the first letter of each word with a capital letter
    }
    return words.join(' '); //join the words back together into a sentence
}
*/

