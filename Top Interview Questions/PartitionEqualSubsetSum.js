/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    
    let target = total / 2;
    let subsets = new Set([0]);

    for (let num of nums) {
        let possibleSubset = new Set(subsets);
        for (let item of subsets) {
            if (item + num === target) return true;
            possibleSubset.add(item + num);
        }
        subsets = possibleSubset;
    }
    return subsets.has(target);
};