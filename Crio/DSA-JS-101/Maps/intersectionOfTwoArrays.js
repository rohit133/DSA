function getFreq (arr) {
    let freqMap = new Map();
    for(let num of arr){
        let count = freqMap.get(num) || 0;
        freqMap.set(num, count +1);
    }
    return freqMap;
}


function intersectionOfTwoArrays(arr1, arr2){
    let resultMap = new Map();
    let result = [];
    for(let elm of arr1){
        let freq = resultMap.get(elm) || 0;
        resultMap.set(elm, freq+1);
    }
    for(let secondElm of arr2){
        let freq = resultMap.get(secondElm) || 0;
        if(freq > 0){
            result.push(secondElm);
            resultMap.set(secondElm,freq-1)
        }
    }
    result.sort((a,b) => a-b);
    return result;

} 

console.log(intersectionOfTwoArrays([1, 2, 2, 1],[2,2]))