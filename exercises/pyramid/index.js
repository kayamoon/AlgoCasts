// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//columns = 2*row - 1
function pyramid(n, row = 0, level = '') { //RECURSIVE SOLUTION
    const midpoint = Math.floor((2 * n - 1) / 2);

    if(n === row){ //if n is 0 exit function
        return;
    }

    if(2 * n - 1 === level.length){ //if col nums is equal to the level length, go to the next row
        console.log(level);
        return pyramid(n, row + 1);
    }

    let add; 
    //in the recursive solution, we determine the length of the column by looking at the string length (in this case, level.length)
    if(midpoint - row <= level.length && midpoint + row >= level.length){ //if the row is greater than zero, add same number of hashtags as number of rows to left and right of midpoint
        add = '#';
    } else {
        add = ' ';
    }

    debugger;
    return pyramid(n, row, level + add); //remember to pass in add in the level parameter

}

pyramid(3);

module.exports = pyramid;

/* iterative solution
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for(let row = 0; row < n; row++){
        level = '';

        for(let col = 0; col < 2 * n - 1; col++){
            if(midpoint - row <= col && midpoint + row >= col){
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}
*/