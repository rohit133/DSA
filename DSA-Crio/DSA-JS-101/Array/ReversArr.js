// function ReversArr(arr){
//     let result = []
//     for(let i = arr.length-1; i>=0; i--){
//         result.push(arr[i]);
//     }
//     return result;
// }


function ReversArr(arr){
    let temp, l = 0, r = arr.length-1;
    while (r > l){    
        temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}

console.log(ReversArr([1,2,3,4,5,6,7,8,9]))
