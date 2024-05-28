"""
Easy Question: 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
"""
import time
start_time = time.time()




def isAnagram(s, t):
    return sorted(s) == sorted(t)

def isAnagramUsingHash(s, t):
    if len(s) != len(t):
        return False
    counterS, counterT = {}, {}
    for i in range(len(s)):
        counterS[s[i]] = 1 + counterS.get(s[i], 0)
        counterT[t[i]] = 1 + counterT.get(t[i], 0)
    for c in counterS:
        if counterS[c] != counterT.get(c, 0):
            return False
    return True


print(isAnagramUsingHash("anagram", "nagaram"))
print(isAnagram("rat", "cat"))


end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")