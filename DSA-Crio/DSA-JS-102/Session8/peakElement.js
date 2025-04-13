/**
 * @param {number} N
 * @param {number[]} nums
 * @return {number}
 */

function peakElement(N, nums) {
  let l = 0,
    r = N - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    // Base case
    if ((mid === 0 || nums[mid] > nums[mid - 1]) && (mid === N - 1 || nums[mid] > nums[mid + 1])) {
      return mid;
    }

    if (nums[mid] < nums[mid - 1]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
}

console.log(peakElement(4, [1, 2, 3, 1]));
