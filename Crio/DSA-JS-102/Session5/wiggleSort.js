/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function wiggleSort(arr, n) {
    //implement this function
    for(let idx = 1; idx <= n-1; idx +=2){
        if(idx-1 >= 0 && arr[idx-1] > arr[idx]){
            [arr[idx-1], arr[idx]] = [arr[idx], [arr[idx-1]]];
        }
        if(idx + 1 < n && arr[idx+1] > arr[idx]){
          [arr[idx], arr[idx+1]] = [arr[idx+1], [arr[idx]]];   
        }
    }
    return arr;
}