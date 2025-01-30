// To understand callback function let's create a calculator using callback 


// Creating Methods to operate on operands.
function sum(a, b){
    return a+b;
}
function sub(a, b){
    return a+b;
}
function mul(a, b){
    return a+b;
}
function div(a, b){
    return a+b;
}

// Creating a function to make a callback function. 
function calculator(input1, input2, operations){
    return operations(input1, input2);
}


// Invoking the function by passing the values and the operations names. 
let calculations = calculator(2,4, sum);
console.log(calculations)