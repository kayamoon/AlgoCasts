// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}


module.exports = anagrams;

/*
function anagrams(stringA, stringB) {
    let aCharMap = buildCharMap(stringA);
    let bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){ //Object.keys(objName).length returns the number of keys in an object
        return false;
    }

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){ //returns false if a character is not equal in the two maps
            return false;
        } 
    }

    return true;
}

function buildCharMap(str){ //helper function
    str.replace(/[^\w]/g,"").toLowerCase(); //get rid of spaces, punctuation, and capital letters

    const charMap = {}; //create char map

    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1; //if char exists in charMap add 1 to value, if not, add char to charMap and set the value to 1
    }

    return charMap;
}
*/