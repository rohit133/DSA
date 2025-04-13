function distinctNumbersBasic(nums) {
    //implement this function
    let resultSet = new Set();
    for(let num of nums){
        resultSet.add(num);
    }
    return (resultSet.size);
}

console.log(distinctNumbersBasic([2, 3, 2, 2, 3]))