/** 2744. Find Maximum Number of String Pairs   
 * You are given a 0-indexed array words consisting of distinct strings.    
 * The string words[i] can be paired with the string words[j] if:
    * The string words[i] is equal to the reversed string of words[j].
    * 0 <= i < j < words.length.
* Return the maximum number of pairs that can be formed from the array words.

** Note that each string can belong in at most one pair. 
 */



/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let counter = 0;
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            if(words[i][0] === words[j][1]){
                if(words[i][1] === words[j][0]){
                    counter++;
                }
            }
        }
    }
    return counter;
};

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))