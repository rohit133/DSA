function getGCD(a,b){
    if(b == 0)
        return a
    return getGCD(b, a%b);
}
function gcdOfArray(arr) {
    let ans = 0;
    for(let elm of arr){
        ans = getGCD(ans , elm)
    }
    return ans;
}

console.log(gcdOfArray([4, 6, 8, 16]))