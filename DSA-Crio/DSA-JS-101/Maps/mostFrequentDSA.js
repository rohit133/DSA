/**
 * @param {string} text
 * @return {[character, number]}
 */

function mostFrequentDSA(text) {
    //implement this function
    let hasMap = new Map();
    let maxCount = 0;
    let maxWord = "";
    for(let word of text){
        hasMap.set(word, (hasMap.get(word) || 0) + 1);
    }

    for(let [ch, freq] of hasMap){
        if(freq > maxCount){
            maxWord = ch;
            maxCount = freq;
        } else if (freq === maxCount){
            if(ch < maxWord)
                maxWord = ch;
        }
    }
    return [maxWord, maxCount];
}


// console.log(mostFrequentDSA("Hello world How are you nice to meet you @1223 !--23 hi "))
console.log(mostFrequentDSA("Hello world Hello world Hello world Hello world Hello world"))
console.log(mostFrequentDSA("aaaabbaabbabbbcn iisd okkn ll@@11odkol okk1-----92 1- "))
