

function maxRepeatingWord(N, arr) {
    //implement this function
    let result = new Map();
    let maxCount = 0;
    let maxWord = '';

    for(let word of arr){
        let count = result.get(word) || 0;
        result.set(word, count + 1);
        
        let curretWord = result.get(word)
        if(curretWord > maxCount){
            maxCount = curretWord;
            maxWord = word
        } else if (curretWord === maxCount && word < maxWord){
            maxWord = word
        }
    }

    return maxWord;

}

console.log(maxRepeatingWord(5, ['hello', 'world', 'for', 'crio', 'crio']))