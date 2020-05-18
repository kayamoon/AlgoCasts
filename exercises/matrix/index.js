// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = []; //declare results array 

    for(let i = 0; i < n; i++){ //starting with 0 and ending with the number before n
        results.push([]); //push empty arrays to the results array
    }

    //declare variables to be used in the for loops
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1; //end row will be n-1 since it starts with row 0
    let startCol = 0;
    let endCol = n - 1; //end col will be n-1 since it starts with col 0

    while(startCol <= endCol && startRow <= endRow){ //while the start column <= end column AND the start row <= end row, iterate
        //top row
        for(let i = startCol; i <= endCol; i++){ //set i to start column and iterate to end column
            results[startRow][i] = counter; //push counter nums to the start row
            counter++;
        }
        startRow++; //now we're done with that row so we can increment start row

        //right col
        for(let i = startRow; i <= endRow; i++){ //set i to start row and iterate to end row
            results[i][endCol] = counter; //push counter nums to the end column
            counter++;
        }
        endCol--; //now we're done with that column so we can decrement end column
 
        //bottom row
        for(let i = endCol; i >= startCol; i--){ //set i to end column and iterate to start column, make sure it ends when i is greater than or equal to start col, decrement i
            results[endRow][i] = counter; //push counter nums to the end row
            counter++;
        }
        endRow--; //now we're done with that row so we can decrement end row

        //left col
        for(let i = endRow; i >= startRow; i--){ //set i to end row and iterate to start row, make sure it ends when i is greater than or equal to start row, decrement i
            results[i][startCol] = counter; //push counter nums to start col
            counter++;
        }
        startCol++; //now we're done with that column so we can increment start col
        debugger;
    }
    return results; //MAKE SURE TO RETURN THE RESULTS
}

matrix(3);

module.exports = matrix;
