const mainStack = [];
const minStack  = [];


/**
 * @param {number} x
 * @returns {void}
 */
function push(x) {
    mainStack.push(x);
    if(minStack.length == 0 || x <= minStack[minStack.length - 1]){
       minStack.push(x); 
    }
    return;
}

/**
 * @returns {void}
 */

function pop() {
    if (mainStack.length === 0) return;
    const y = mainStack.pop();
    // If we're popping what was the minimum, pop it from minStack too:
    if (y === minStack[minStack.length - 1]) {
        minStack.pop();
    }
    return 
}

/**
 * @return {number}
 */

function findMin() {
    if (minStack.length === 0) return -1;
    return minStack[minStack.length - 1];
}

function main() {
    let queries = parseInt(readLine(), 10);
    for (let q = 0; q < queries; q++) {
        let query = readIntArr();
        if (query[0] == 1) {
            push(query[1]);
        }
        else if (query[0] == 2) {
            pop();
        }
        else {
            let ans = findMin();
            console.log(ans);
        }
    }
}