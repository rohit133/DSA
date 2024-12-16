function findLocalPeak(N, arr) {
    //implement this function
    let result = [];
    for(let i = 0; i<N-1; i++){
        let l = (i === 0) ? -Infinity : arr[i-1];
        let r = (i === N-1) ? -Infinity : arr[i+1];
        if(arr[i] > l && arr[i] > r){
            result.push(arr[i]);
        }
    }
    return result;


}

console.log(findLocalPeak(7, [4, 2, 3, 1, 5, 6, 4]));

// let arr = [15,31,8,2,1,9,4]

// console.log(arr);
// console.log(arr.sort());
