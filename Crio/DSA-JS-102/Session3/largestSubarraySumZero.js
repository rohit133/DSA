/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function largestSubarraySumZero(n, arr) {
    let prefix = new Map();
    prefix.set(0, -1);
    let sum = 0
    let AnswerLeft = -1, AnswerRight = -2;
    for(let right = 0;right<n; right++){
        sum +=arr[right];
        if(prefix.has(sum)){
            let left = prefix.get(sum) + 1;
            if(right - left > AnswerRight - (AnswerLeft+1)){
                AnswerRight = right;
                AnswerLeft = left;
            }
        } else {
            prefix.set(sum, right);
        }
    }
    if(AnswerLeft!= -1){
        const result = arr.slice(AnswerLeft, AnswerRight+1);
        return result;
    } else {
        return [-1];
    }
}


const longestSubarray = largestSubarraySumZero(6, [2, 3, 1, -4, 0, 6])
console.log(longestSubarray.join(" "))