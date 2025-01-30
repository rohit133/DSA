 function InsertionSort(arr) {
    for(let i =0; i< arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}


console.log(InsertionSort([5, 4, 1, 2, 8, 3, 7]));