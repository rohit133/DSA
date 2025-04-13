
function mycode(original) {
    var result = "";
    for (let currIndex = 0; currIndex < original.length; currIndex++) {
        let char = original[currIndex];
        console.log(char)
        if (/[0-9]/.test(char)) {
            result += char;
        } else if (/[a-z]/.test(char)) {
            let rotations;
            if(currIndex == 0){
                rotations = 2;
                result += String.fromCharCode('a'.charCodeAt(0) + (((char.charCodeAt(0) - 'a'.charCodeAt(0)) - rotations + 26) % 26))
                console.log("Rotating with 2",result)
            } else if (currIndex % 15 == 0) {
                rotations = 3;
                result += String.fromCharCode('a'.charCodeAt(0) + (((char.charCodeAt(0) - 'a'.charCodeAt(0)) - rotations + 26) % 26))
                console.log("Rotating with 3",result)
            } else if (currIndex % 5 == 0) {
                rotations = 9;
                result += String.fromCharCode('a'.charCodeAt(0) + (((char.charCodeAt(0) - 'a'.charCodeAt(0)) - rotations + 26) % 26))
                console.log("Rotating with 9",result)
            } else if (currIndex % 3 == 0) {
                rotations = 5;
                result += String.fromCharCode('a'.charCodeAt(0) + (((char.charCodeAt(0) - 'a'.charCodeAt(0)) - rotations + 26) % 26))
                console.log("Rotating with 3",result)
            } else {
                rotations = 2;
                result += String.fromCharCode('a'.charCodeAt(0) + (((char.charCodeAt(0) - 'a'.charCodeAt(0)) - rotations + 26) % 26))
                console.log("Rotating with 2",result)
            }
        } else {
            result += char;
        }
    }
    return result;
}
// result = mycode("r0h1tsharma");
result = mycode("aklajewlfjk");
console.log(result);
