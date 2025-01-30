/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function contigiousSequence(n, arr) {
    let currSum = 0;
    let maxSum = arr[0];
    for(let i=0;i<n;i++){
        currSum = currSum + arr[i];
        if(currSum > maxSum)    
            maxSum = currSum;
        if(currSum < 0)
            currSum = 0;
    }
    return maxSum;
}

let n = 8;
let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

console.log(contigiousSequence(n, arr));