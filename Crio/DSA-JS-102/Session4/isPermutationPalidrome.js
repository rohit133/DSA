/**
 * @param {string} s
 * @return {boolean}
 */

function isPermutationPalidrome(s){
    //implement this function
    let freqMap = new Map();
    let oddFreq = 0;
    for(let i=0; i<s.length; i++){
        if(freqMap.has(s[i])){
            freqMap.set(s[i], freqMap.get(s[i])+1);
        } else {
            freqMap.set(s[i], 1);
        }
    }
  
    for(let val of freqMap.values()){
        if(val % 2 == 1){
            oddFreq ++;
        }
    }
    if(oddFreq > 1){
        return false;
    }
    return true;
}