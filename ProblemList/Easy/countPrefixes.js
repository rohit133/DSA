/** 2255. Count Prefixes of a Given String
 * You are given a string array `words` and a string `s`, where `words[i]` and `s` comprise only of lowercase English letters.
 * Return the number of strings in `words` that are a prefix of `s`.
 * A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    return words.filter( word => s.indexOf(word) == 0).length;
};
console.log(
    countPrefixes(
    [
        "feh","w","w","lwd","c","s","vk","zwlv","n","w","sw","qrd","w",
        "w","mqe","w","w","w","gb","w","qy", "xs","br","w", "rypg","wh",
        "g","w","w","fh","w","w","sccy"
    ], 
    'w')
);