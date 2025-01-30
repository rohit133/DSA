// function parent(){
//     // Lexical environment starts here
//     let msg = "Hello World";
//     function child() {
//         console.log(msg + " I'm Rohit");
//     }
//     return child; // function is being returned, not called 
//     // Lexical environment ends here

// }

// let result = parent();
// result();


// // Function with its lexical scope = closure. 


function multiply(storedNum){  // Parent Function.
    // storedNum = this is a lexical value, it can be accessed by the child function outside the parent function as well. 

    return function (num){  // Child Function. 
        return storedNum * num;  
    }
}
var multiplyTwo = multiply(2);  // This will return the function inside the multiply function `function(num) => return storedNum * num;`
console.log(multiplyTwo(5)); // This is invoking the child function of the multiply function, which will return the multiplication of storedNum * num.


var multiplyThree = multiply(3);
console.log(multiplyThree(10));


var multiplyFour = multiply(4);
console.log(multiplyFour(2));



function multiply(storedNum) {  // Parent Function
    // storedNum is a parameter of the parent function

    return function (num) {  // Child Function
        // The child function has access to storedNum
        return storedNum * num;  
    }
}

```
Sure! A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. This includes:

The outer function's variables.
The inner function's own variables.
The global variables.
Closures are created every time a function is created, at function creation time.

Here's a breakdown of how closures work using your multiply function as an example:

```


var multiplyTwo = multiply(2);  // multiply(2) returns the inner function with storedNum set to 2
console.log(multiplyTwo(5)); // multiplyTwo(5) calls the inner function with num set to 5, returning 2 * 5 = 10

var multiplyThree = multiply(3);  // multiply(3) returns the inner function with storedNum set to 3
console.log(multiplyThree(10)); // multiplyThree(10) calls the inner function with num set to 10, returning 3 * 10 = 30

var multiplyFour = multiply(4);  // multiply(4) returns the inner function with storedNum set to 4
console.log(multiplyFour(2)); // multiplyFour(2) calls the inner function with num set to 2, returning 4 * 2 = 8


```
Key Points:
Lexical Scoping: The inner function has access to the variables of the outer function due to lexical scoping.
Persistent Scope: Even after the outer function has finished executing, the inner function retains access to the outer function's variables.
Encapsulation: Closures can be used to create private variables or functions.
Example of Encapsulation:

```
function createCounter() {
    let count = 0;  // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

```
In this example, count is a private variable that can only be
accessed and modified through the methods increment, decrement, and getCount. 
This is achieved using closures.
```