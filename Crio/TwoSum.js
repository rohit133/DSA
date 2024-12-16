function twoSum(nums, target) {
    let result = new Map();
    for(let i = 0; i<nums.length; i++){
        let diff = target - nums[i];
        if(result.has(diff)){
            let j = result.get(diff)
            return [j,i];
        }
        result.set(nums[i],i);
    }
    return[0,0]
}

console.log(twoSum([2,4,6,7,5], 9))