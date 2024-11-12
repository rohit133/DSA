/** 2418. Sort the People
 * You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
 * For each index i, names[i] and heights[i] denote the name and height of the ith person.
 * Return names sorted in descending order by the people's heights.
 */



/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let heightMap = {};
    for(let i=0; i<names.length; i++){
        heightMap[heights[i]] = names[i]
    }
    return (Object.values(heightMap).reverse())
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))
console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]))
