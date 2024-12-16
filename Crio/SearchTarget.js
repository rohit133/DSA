/**
 * @param {number[]} A
 * @param {number} N
 * @param {number} X
 * @return {number}
 */
function searchTarget(N, A, X) {
  //implement this function
  let l = 0,r = N - 1;
  for (let i = 0; i < N - 1; i++) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] === X) {
      return mid;
    }
    if (A[mid] > X) {
      r = mid - 1;
    }
    if (A[mid] < X) {
      l = mid + 1;
    }
  }
  return -1;
}

let result = searchTarget(7, [1, 3, 5, 7, 8, 13], 8);

console.log(result);