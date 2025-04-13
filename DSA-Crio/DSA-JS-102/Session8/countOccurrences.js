/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} arr
 * @return {number}
 */
function findFirstOccuranceIndex(k, arr) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == k) {
      right = mid - 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

function findLastOccuranceIndex(k, arr) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == k) {
      left = mid + 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

function countOccurrences(n, k, arr) {
  let first = findFirstOccuranceIndex(k, arr);
  let last = findLastOccuranceIndex(k, arr);
  if(first > last){
    return 0;
  }
  return ((last - first) + 1);
}

console.log(countOccurrences(5, 2, [-1, 2, 2, 4, 7]));
