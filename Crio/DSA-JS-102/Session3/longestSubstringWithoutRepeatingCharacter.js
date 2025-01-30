/**
 * @param {string} s
 * @return {number}
 */
function longestSubstringWithoutRepeatingCharacter(s) {
    let map = new Map();
    let left=0, ans=0;
    for(let right =0; right<s.length; right++){
        let prev = map.get(s[right]);
        if(prev !== undefined && prev >= left){
            left = prev + 1;
        }
        map.set(s[right], right);
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}
