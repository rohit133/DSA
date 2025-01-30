function QuickSort(n, arr) {
  if (n <= 1) return arr;

  let pivot = arr[n - 1],
    left = [],
    right = [];

  for (let i = 0; i < n - 1; i++) {
    if (arr[i]<pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [
    ...QuickSort(left.length, left),
    pivot,
    ...QuickSort(right.length, right),
  ];
}

console.log(QuickSort(8, [7, 6, 8, 9, 6, 3, 2, 1]));
