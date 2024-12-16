function stringPalindrome(str) {
    //implement this function
    let reversed = ''
    for(let idx = str.length-1; idx >= 0; idx--){
        reversed += str[idx];
    }
    console.log(reversed)
    if(str === reversed){
        return true;
    } else {
        return false;
    }
}
let result = stringPalindrome('madam');
console.log(result);