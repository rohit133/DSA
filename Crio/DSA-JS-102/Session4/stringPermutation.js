/**
 * @param {number} n
 * @param {string} s
 * @param {number[]} arr
 * @return {string}
 */


// TODO: Implement this method
function stringPermutation(n, s, arr) {
    let charArr = [];
    for(let i=0; i<n; i++){
        let ch = s.charAt(i);
        let idx = arr[i]-1;
        charArr[idx] = ch;
    }
    return charArr.join("");
}

console.log(stringPermutation(4, 'abcd', [2,4,3,1]));