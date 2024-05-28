"""
Intermediate Question:
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
"""

from collections import defaultdict
import time
start_time = time.time()

def groupAnagrams(strs):
    anagram_map = defaultdict(list)
    result = []
    for s in strs:
        sorted_s =tuple(sorted(s))
        anagram_map[sorted_s].append(s)   
    for values in anagram_map.values():
        result.append(values)
    return result



print(groupAnagrams(["act","pots","tops","cat","stop","hat"]))



end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")