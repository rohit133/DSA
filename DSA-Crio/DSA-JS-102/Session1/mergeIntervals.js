
/**
 * @param {number} n
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(n, intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [];
    for(let curr of intervals){
        const last = result.length == 0 ? null : result[result.length -1];
        if(!last || last[1] < curr[0])
            result.push(curr);
        else
            last[1] = Math.max(last[1], curr[1]);
    }
    // let resultArr = new Array(result);
    // for(let idx =0; idx < result.length; idx++)
    //     resultArr[idx] = result[idx];
    return result;
}



let n = 4

let intervals = [[1,3], [2,6], [8,10], [15,18]];


let mergedIntervals = mergeIntervals(n, intervals);

for(let i in mergedIntervals)
    console.log(`${mergedIntervals[i][0]} ${mergedIntervals[i][1]} \n`);

