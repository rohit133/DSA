/**
 * 
 * @param [Number] arr 
 * @param [Number] without 
 * 
 * @returns [Number] Result
 */

function removeListedValues(arr, without) {
    let resultArr = [];
    for(let i=0; i<arr.length; i++){
        if(!without.includes(arr[i]))
            resultArr.push(arr[i]);
    }
    return resultArr
}
removeListedValues([1, 2, 2, 3, 1, 2], [2, 3]);


function removeListedValues(arr, without) {
    return arr.filter(value => !without.includes(value));
}
removeListedValues([1, 2, 2, 3, 1, 2], [2, 3]);
