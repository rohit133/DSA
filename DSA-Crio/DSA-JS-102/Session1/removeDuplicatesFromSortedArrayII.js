/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
function removeDuplicatesFromSortedArrayII(n, arr) {
    let j=0;
    for(let i=0; i<n; i++){
        if(j < 2 || arr[i] != arr[j-2]){
            arr[j] = arr[i];
            j++;
        }
    }
    return j;
}

let n = 7;
// let arr = [2, 2, 2, 3, 4, 4, 9];
let arr = [1, 1, 1, 1, 2, 2, 2, 1, 2, 4, 9, 1, 1];    // This will not work because it's not a sorted array.
let res = removeDuplicatesFromSortedArrayII(n, arr);
console.log(res);
console.log(arr.slice(0, res));
