function merged(leftArr, rightArr) {
    let resultArr = [];
    let m = leftArr.length, n = rightArr.length;
    let p1 = 0, p2 = 0;
    for(let i = 0; i<(m+n); i++){
        if(p1< m && (p2 >=n || leftArr[p1] < rightArr[p2])){
            resultArr.push(leftArr[p1]);
            p1++;
        } else {
            resultArr.push(rightArr[p2]);
            p2++;
        }
    }
    return resultArr;
}

function mergeSort(n, arr) {
  //implement this function
  if (n <= 1) {
    return arr;
  }
  let mid = Math.floor(n / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, n);
  let leftSorted = mergeSort(leftArr.length, leftArr);
  let rightSorted = mergeSort(rightArr.length, rightArr);


  return merged(leftSorted, rightSorted);
}

console.log(mergeSort(7, [5, 4, 1, 2, 8, 3, 7]));
