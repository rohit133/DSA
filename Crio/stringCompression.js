/**
 * @param {string} s
 * @return {string}
 */
function stringCompression(s) {
  let output = "",
    ch = "#",
    freq = 0;    
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] !== ch) {
      if (ch !== "#") {
        output += ch + freq;
      }
      freq = 1;
      ch = s[idx];
    } else freq++;
  }
  if (ch !== "#") {
    output += ch + freq;
  }
  if(output.length >= s.length) return s;
  return output;
}

console.log(stringCompression("aabccccc")); // a2b1c5

// console.log(stringCompression("bbbbbbbweeweccccc")) // b7we2wec5

// console.log(stringCompression("aaaaaaaaaawerrrrrr")) // a10wer6
