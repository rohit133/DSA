/**
 * @param {number} n
 * @param {number[]} arr
 * @return {string}
 */
function subarraySumZero(arr) {
    let resultSet = new Set();
    let sum = 0;
    for(let i =0; i<arr.length; i++) {
        sum += arr[i];
        if( resultSet.has(sum) || sum === 0) 
            return "Yes";
        else 
            resultSet.add(sum);
    }
    return "No";
}
let n = 4;
let arr = [4, 2, -2, 5]

console.log(subarraySumZero(arr));