/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */



function equalPartition(n, arr) {

    // Calculating Prefix
    let prefixArr = new Array(n);
    prefixArr[0] = arr[0]
    for(let i=1; i<n; i++)
        prefixArr[i] = prefixArr[i-1] + arr[i];


    // Calculating Suffix
    let suffixArr = new Array(n);
    suffixArr[n-1] = arr[n-1]
    for(let i = n-2; i >= 0; i--)
        suffixArr[i] = suffixArr[i+1] + arr[i];

    for(let i = 0; i<n; i++){
        if(prefixArr[i-1] == suffixArr[i+1]) return i;
    }
}

let n = 4
let arr = [1,4,2,5]

let partitionIndex = equalPartition(n, arr);
console.log(partitionIndex);
