function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) if (arr[sIdx] > arr[j]) sIdx = j;

    if (sIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[sIdx];
      arr[sIdx] = temp;
    }
  }
  return arr;
}

console.log(SelectionSort([5, 4, 1, 2, 8, 3, 7]));
