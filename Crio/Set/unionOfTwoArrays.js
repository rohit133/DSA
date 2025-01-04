function unionOfTwoArrays(A, B) {
    //implement this function
    let resultSet = new Set();
    let resultArr = A.concat(B);
    for(let ele of resultArr){
        resultSet.add(ele);
    }
    let Result = Array.from(resultSet);
    return Result.sort((a,b) => a-b);


}

// console.log(unionOfTwoArrays([1, 2, 3, 4, 5], [1, 2, 3]))
console.log(unionOfTwoArrays([5,8,7], [1, 7, 8, 5]))
