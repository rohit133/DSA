/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function minDiff(n, arr) {
  //implement this function)
  arr.sort((a, b) => a - b);
  let ans = 1000000000 - 1;
  for (let i = 0; i < n - 2; i++) {
    if(arr[i+1] - arr[i] < ans) {
        ans = arr[i+1] - arr[i];
    }
  }
  return ans;
}

console.log(minDiff(5, [4,2,4,7,1]));
