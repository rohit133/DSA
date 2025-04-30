/**
 * @Question : 2465. Number of Distinct Averages
 * @description : You are given a 0-indexed integer array nums of even length.
 * As long as nums is not empty, you must repetitively:
 * Find the minimum number in nums and remove it.
 * Find the maximum number in nums and remove it.
 * Calculate the average of the two removed numbers.
 * The average of two numbers a and b is (a + b) / 2.
 * For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
 * @returns Return the number of distinct averages calculated using the above process.
 * @Note that when there is a tie for a minimum or maximum number, any can be removed.
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages1 = function (nums) {
    let resultSet = new Set([]);
    let sotredArry = nums.sort((a, b) => a - b);
    let left = 0, right = sotredArry.length - 1;
    while (left < right) {
        let avg = (Number(sotredArry[left]) + Number(sotredArry[right])) / 2
        if (!resultSet.has(avg)) {
            resultSet.add(avg);
        }
        left++;
        right--;
    }
    return resultSet.size;

};



/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages2 = function (nums) {
    let result = new Set([]);
    nums.sort((a, b) => a - b);
    for (; nums.length > 0;) {
        let avg = (nums.pop() +  nums.shift()) / 2
        if (!result.has(avg)) 
            result.add(avg);
    }
    return result.size;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages3 = function (nums) {
    let result = new Set([]);
    nums.sort((a, b) => a - b);
    for (; nums.length > 0;) {
        let avg = (nums.pop() +  nums.shift()) / 2
        if (!result.has(avg)) 
            result.add(avg);
    }
    return result.size;
};