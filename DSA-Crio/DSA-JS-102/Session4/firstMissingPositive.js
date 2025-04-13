/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function firstMissingPositive(n, arr) {
    //implement this function
    let hasSet = new Set();
    for(let i = 0; i < n; i++){
        hasSet.add(arr[i]);
    }

    for(let i = 1; i <= n; i++){
        if(!hasSet.has(i)){
            return i;
        }
    }

    return n + 1;
}