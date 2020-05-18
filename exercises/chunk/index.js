// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) { 
    const chunked = []; //new array that holds chunks
    let index = 0; //index of the array
    while(index < array.length){  //iterates through array until array is empty
        chunked.push(array.slice(index,index+size)); //slices everything from array's index to the index + size and pushes it to chunked array
        index += size; //add size to the index variable
    }
    return chunked; //make sure you always return the array
}

module.exports = chunk;

/* 
function chunk(array, size) {
    const chunked = []; //new array that holds chunks

    for (let elem of array){ //iterate through original array
        const last = chunked[chunked.length-1]; //last element of the new chunked array
        if(!last || last.length === size){ //if chunked is empty or if the length of the last chunk is equal to the size, add new elem to the chunk
            chunked.push([elem]);
        } else { //if the chunk exists but is not full yet, add the elem to the existing chunk
            last.push(elem);
        }
    }
    
    return chunked;
}
*/

/* SOLUTION USING SLICE, remember slice does not include the last index e.g. array.slice(0,2) only slices indexes 0 and 1.
function chunk(array, size) { 
    const chunked = []; //new array that holds chunks
    let index = 0; //index of the array
    while(index < array.length){  //iterates through array until array is empty
        chunked.push(array.slice(index,index+size)); //slices everything from array's index to the index + size and pushes it to chunked array
        index += size; //add size to the index variable
    }
    return chunked; //make sure you always return the array
}
*/