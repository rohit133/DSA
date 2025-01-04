function twoSumInSortedArray(arr, target_sum) {
    let left = 0;
    let right = arr.length - 1; 
    while(left < right){
        if(arr[left] + arr[right] == target_sum){
            return true;
        } else if (arr[left] + arr[right] > target_sum){
            right -- ;
        } else {
            left ++;
        }
    }
}
console.log(twoSumInSortedArray([2, 4, 5, 8, 9], 7))
