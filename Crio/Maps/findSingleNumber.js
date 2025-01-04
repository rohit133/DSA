function findSingleNumber(arr) {
    const result = new Map();
    let count = 1;
    for(let num of arr){
        if(result.has(num)) 
            result.set(num, result.get(num) + 1);
        else 
            result.set(num, 1);
    }

    for(let [num,count] of result){
        if (count == 1)
            return num;
    }
}

console.log(findSingleNumber([2, 2, 1]))