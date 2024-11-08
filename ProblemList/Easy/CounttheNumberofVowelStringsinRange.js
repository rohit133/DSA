/** 2586. Count the Number of Vowel Strings in Range
 * You are given a 0-indexed array of string words and two integers left and right.
 * A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
 * Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].
 */

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let result = 0;
  const VOWELS = ["a", "e", "i", "o", "u"];
  for (let i = left; i <= right; i++) {
    if (
      VOWELS.includes(words[i][0]) &&
      VOWELS.includes(words[i].at(-1))
    ) {
      result++;
    }
  }
  return result;
};

console.log(vowelStrings(["are", "amy", "u"], (left = 0), (right = 2)));
