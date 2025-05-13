
function removeDuplicate(arr) {
    let result = new Set([]);
    for(let i = 0; i < arr.length; i++){
        if(!result.has(arr[i])){
            result.add(arr[i]);
        }
    }
    return Array.from(result);
}



let arr = [1,1,1,2,2,2,3,3,4,4,5];
console.log(removeDuplicate(arr));