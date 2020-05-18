// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') { //RECURSIVE SOLUTION
   if(n === row){ //if n is not 0 then go on
       return;
   }

   if(n === stair.length){ //when we've hit the end of the row, console log the stair and increment row
       console.log(stair);
       return steps(n, row + 1); //make sure you return when you call the function again so it exits the current function call
   }

   if(stair.length <= row){
       stair += '#';
   } else {
       stair += ' ';
   }
   
   steps(n, row, stair); //don't change row because still on the same row
   //don't change stair because it's the same stair still
}

steps(3);

module.exports = steps;


/* MY SOLUTION
function steps(n) {
    const step = '#';
    const space = ' ';
    for(let i = 1; i <= n; i++){
        console.log(step.repeat(i) + space.repeat(n - i));
    }
}
*/

/* Good solution for an interview, maybe not the first solution
function steps(n) {
    for(let row = 0; row < n; row++){
        let stair = '';

        for(let col = 0; col < n; col++){
            if(col <= row){
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}
*/