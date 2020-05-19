// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//what can you do to make the run time better?
//memoization:
//record the arguments of each function, run the function, and then store the results of the function call
//so if that function gets called again with the same arguments, it will instead return the previous computed result


function memoize(fn){ //returns a function, shortens runtime A LOT
    const cache = {};
    return function(...args){ ///...args assigns all args as an array and passes it in, ES6 syntax
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args); //fn is the slowFib function, apply helper must be used b/c passing in an array of elements
        cache[args] = result;
        return result;
    }
}

function fib(n) { //memoization
    if(n < 2){
        return n;
    }

    return (fib(n-1) + fib(n-2)); //these function calls are a reference to the fib below (the memoized version fib)
}

fib = memoize(fib); //how you would memoize a function, reassign fib to the memoized version of fib

module.exports = fib;

/* Iterative solution //linear run time
function fib(n) {
    const arr = [0, 1];
    for(let i = 1; i < n; i++){
        arr.push(arr[i-1] + arr[i]);
    }
    return arr[n];
}
*/

/* Recursive solution
function fib(n) { //recursive solution, exponential run time
    if(n < 2){
        return n;
    }

    return (fib(n-1) + fib(n-2));
}
*/