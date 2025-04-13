/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function zeroOnes(n, arr) {
    for(let i=0; i<n; i++){
        if(arr[i] == 1){
            return i;
        }
    }
    return -1;
}