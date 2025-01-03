function robotReturnToOrigin(moves) {
    //implement this function
    let sum = 0;
    for(let char of moves){
        if(char == 'U') sum = sum - 1;
        if(char == 'D') sum = sum + 1;
        if(char == 'L') sum = sum - 1;
        if(char == 'R') sum = sum + 1;
    }
    return sum ? false : true;
}

console.log(robotReturnToOrigin("LL"));