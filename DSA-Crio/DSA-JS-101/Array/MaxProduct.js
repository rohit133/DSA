function maxProduct2(n, nums){
    let max = 0, secondMax = 0;
    for(let idx = 0; idx < n; idx ++){
        if(nums[idx] >= max){
            secondMax = max;
            max = nums[idx];
        } else if (nums[idx] >= secondMax){
            secondMax = nums[idx];
        }
    }
    return ((max-1) * (secondMax -1))
}

console.log(maxProduct2(5, [46,8,9,65,89]));