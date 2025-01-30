/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


function findPivot(nums){
    let l = 0, r = nums.length-1;
    while(l <= r){
        let mid = Math.floor((l+r) / 2);

        if(mid+1 < nums.length && nums[mid] > nums[mid+1]){
            return mid
        }
       
        if(nums[mid] < nums[0]){
            r = mid-1;
        } else {
            l = mid+1
        }
    }
    return -1
}

function binarySearch(arr, l, r, t){
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        
        if(arr[mid] == t){
            return mid
        } 
        
        if (arr[mid] < t){
            l = mid + 1
        } else {
            r =  mid-1;
        }
    }
    return -1;
}


function search(nums, target) {
    let pivot = findPivot(nums);
    let n = nums.length
    if(pivot === -1){
        return binarySearch(nums, 0, n-1, target);
    }
    if(target >= nums[0]){
        return binarySearch(nums, 0, pivot, target);
    } else{
        return binarySearch(nums, pivot + 1, n - 1, target);
    }


}


console.log(search([4, 5, 6, 9, 10, 2, 3], 3));