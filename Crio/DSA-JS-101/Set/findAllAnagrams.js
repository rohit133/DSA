function isAnagram(set, element) {
  for (let word of element) {
    if (!set.has(word)) {
      return false;
    }
  }
  return true;
}

function findAllAnagrams(str, arr) {
  // implemet this function
  let set = new Set();
  let ans = [];
  for (let ch of str) {
    set.add(ch);
  }
  for (let ele of arr) {
    if (isAnagram(set, ele)) {
      ans.push(ele);
    }
  }
  return ans.sort();
}
console.log(findAllAnagrams("abc", ["cab", "bac", "xyz"]))
console.log(findAllAnagrams("crio", ["iocr", "croi", "irco", "mxyn"]));
