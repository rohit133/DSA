function threeSum(nums) {
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                let triplest = []
                triplest.push(nums[i], nums[j], nums[k])
                result.push(triplest);
                while (j < k && nums[j] === nums[j + 1]) j++;
                // Skip duplicates for the third element
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
}
let arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
