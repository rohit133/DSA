function lengthOfLongestSubstringKDistinct(s, k) {
  let hm = new Map();
  let left = 0, answer = 0;

  for (let right = 0; right < s.length; right++) {

    let charRight = s.charAt(right);
    
    let oldFreq = hm.get(charRight) || 0;
    hm.set(charRight, oldFreq + 1);

    while (hm.size > k) {
      let charLeft = s.charAt(left);
      hm.set(charLeft, hm.get(charLeft) - 1);
      if (hm.get(charLeft) == 0) {
        hm.delete(charLeft);
      }
      left++;
    }
    if (right - left + 1 > answer) {
      answer = right - left + 1;
    }
  }
  return answer;
}
