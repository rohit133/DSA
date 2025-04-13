/**
 * @param {number} N
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function maximumSubarraySumSizeK(n, arr, k) {
    let sum=0;
    // Crearing the firt window.
    for(let i=0;i<k;i++){
        sum = sum + arr[i];
    }
    let maxSum = sum;

    // Sliding the window.
    for(let i=k; i<n; i++){
        sum = sum + arr[i] - arr[i-k]
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;
}


console.log(maximumSubarraySumSizeK(4,[100, 200, 300, 400], 2))