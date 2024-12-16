function leftRotation(arr) {
    //implement this function
    let temp = arr[0];
    for(let i = 1; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
}

console.log(leftRotation([1,2,3,4,5]));