/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
const getIthIndex = (nums, j) => {
  let answer = 0;
  for (let i = 0; i < j; i++) {
    if (nums[i] < nums[j]) {
      answer = Math.max(answer, nums[i]);
    }
  }
  return answer;
};

const getKthIndex = (nums, j) => {
  let answer = 0;
  for (let k = j + 1; k <= n - 1; k++) {
    if (nums[k] > nums[j]) {
      answer = Math.max(answer, nums[k]);
    }
  }
  return answer;
};

function maxSumTriplet(n, nums) {
  let maxsum = 0;
  // Code here
  for (let j = 0; j < nums.length; j++) {
    let ithValue = getIthIndex(nums, j);
    let kthValue = getKthIndex(nums, j);
    if (nums[j] + ithValue + kthValue > maxsum && ithValue > 0 && kthValue > 0) {
      maxsum = Math.max(maxsum, nums[j] + ithValue + kthValue);
    }
  }
  return maxsum;
}

// let n = 7
// let nums = [3, 7, 4, 2, 5, 7, 5];
// // O/P : 16

let n = 4
let nums = [5, 2, 4, 5,];
// // O/P : 11

// let n = 3;
// let nums = [3, 2, 1];
// O/P : 0

let ans = maxSumTriplet(n, nums);
console.log(ans);
