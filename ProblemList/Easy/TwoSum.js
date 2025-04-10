const twoSum = (nums, target) => {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in result) return [result[diff], i];
    result[nums[i]] = i;
  }
};

let nums = [2,7,11,4], target = 9;
console.log(twoSum(nums, target));