function isMidValid(speed, timeGiven, arr) {
  let timeTaken = 0;
  for (let i = 0; i < arr.length; i++) {
    timeTaken = timeTaken + Math.ceil(arr[i] / speed);
  }
  if (timeTaken <= timeGiven) {
    return true;
  } else {
    return false;
  }
}

function bookReading(n, h, a) {
  l = 1;
  r = 0;
  for (let i = 0; i < n; i++) {
    r = Math.max(a[i], r);
  }
  let ans = 0;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (isMidValid(mid, h, a)) {
      ans = mid;
      r = mid - 1; // Descrease speed
    } else {
      l = mid + 1; // Increase speed
    }
  }
  return ans;
}

console.log(bookReading(4, 8, [3, 6, 7, 11]));
