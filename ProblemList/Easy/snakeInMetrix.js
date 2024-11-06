
/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let x = 0, y = 0;
    commands.forEach((c) => {
        if(c === 'UP'){
            x -= 1
        } else if (c === 'DOWN') {
            x +=1
        } else if (c === 'RIGHT') {
            y += 1
        } else if (c === 'LEFT'){
            y -=1
        }
    })
    return (x * n) + y;

};

console.log(finalPositionOfSnake(2, ["RIGHT","DOWN"]))