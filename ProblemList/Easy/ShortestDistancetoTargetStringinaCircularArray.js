/** 2515. Shortest Distance to Target String in a Circular Array
 * You are given a 0-indexed circular string array words and a string target.
 * A circular array means that the array's end connects to the array's beginning.
 * Formally, the next element of words[i] is words[(i + 1) % n] and
 * the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.
 * Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.
 * Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  let left = startIndex;
  let right = startIndex;
  let step = 0;
  let n = words.length;

  if (!words.includes(target)) {
    return -1;
  }

  while (step <= n) {
    if (words[left] === target || words[right] === target) {
      return step;
    } else {
      right = (right + 1) % n;
      left = (left - 1 + n) % n;
    }
    step++;
  }
};

let words = ["hello", "i", "am", "leetcode", "hello"];
let target = "hello";
let startIndex = 1;

console.log(closetTarget(words, target, startIndex));
