function reverseString(str) {
    //implement this function
    let reversed = ''
    for(let idx = str.length-1; idx >= 0; idx--){
        reversed += str[idx];
    }
    return reversed;
}