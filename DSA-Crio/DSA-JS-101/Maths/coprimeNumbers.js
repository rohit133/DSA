function getGCD(a,b){
    if(b == 0)
        return a
    return getGCD(b, a%b);
}
function gcdOfArray(n) {
    let ans = [];
    for(let i = 0; i < n; i++){
        if(getGCD(i , n) === 1){
            ans.push(i);
        }
    }
    console.log(ans);
    return ans.length;
}

console.log(gcdOfArray(9)) 