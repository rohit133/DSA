function reverseWords(arr) {
    const result = []
    for(let i = arr.length; i >= 0; i--){
        result.push(arr[i]);
    }
    return result.join("");
  
}

function reverseCharacters(str) {
    //implement this function
    let result =[]
    str.split(" ").forEach(element => {
        result.push(reverseWords(element));
    })
    return result.join(" ");
}



console.log(reverseCharacters("the sky is blue")) // eth yks si eulb