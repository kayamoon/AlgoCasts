// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

//First In, Last Out (Stack of pancakes)
class Stack {
    constructor(){
        this.stack = [];
    }

    push(elem){
        this.stack.push(elem);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }
}

module.exports = Stack;
