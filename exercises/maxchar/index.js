// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) { //use for of loop for string or array
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    
    for (let char in charMap) { //use for in for object //char is assigned the keys of the object
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char.toString();
        }
    }

    return maxChar;

}

module.exports = maxChar;
