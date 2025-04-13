function maxSum(arr, n, k){
    let max = 0, sum = 0;

    // Initial Sum of the first window. 
    for(let i=0; i<k; i++){
        sum += arr[i];
        max = sum;
    }

    // Moving the window
    for(let i = k; i < n; i++){
        
        // Subtracting the inital window staring index and adding the last index.
        sum += arr[i] - arr[i - k];
        if(sum > max){
            max = sum;
        }
    }
    return max;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20], n = arr.length, k =4;
console.log(maxSum(arr, n, k));