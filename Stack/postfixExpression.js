/**
 * @param {string} exp
 * @return {number}
 */


// TODO: Implement this method
function postfixExpression(exp) {
    const stack = new Stack();
    for(const str of exp.split(" ")){
        if(str === '+'){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a+b);
        }
        else if(str === '*'){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a*b);
        }
        else if(str === '-'){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b-a);
        } else {
            stack.push(parseInt(str, 10));
        }
    }
    return stack.peek();
}