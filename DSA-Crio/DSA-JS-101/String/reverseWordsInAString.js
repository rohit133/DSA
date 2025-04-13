function reverseWords(arr) {
    const result = []
    //implement this function
    for(let i = arr.length; i >= 0; i--){
        result.push(arr[i]);
    }
    return result.join(" ");
  
}
function reverseWordsInAString(s) {
    return reverseWords(s.split(" ").filter((word) => word !== ""));
}

console.log(reverseWordsInAString("the sky is blue")); // "blue is sky the"
console.log(reverseWordsInAString(" the sky is blue")); // "blue is sky the"
console.log(reverseWordsInAString("the sky  is   blue ")); // "blue is sky the"
