function countVowels(word) {
    let counter = 0;
    word = word.toLowerCase();
    for(let idx = 0; idx < word.length; idx++){
        console.log(word[idx])
        if(word[idx] === 'a' || word[idx] === 'e' || word[idx] === 'i' || word[idx] === 'o' || word[idx] === 'u'){
            counter += 1;
        }
    }
    return counter;
}

console.log(countVowels('AEIOU'));