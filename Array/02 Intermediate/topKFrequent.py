"""
Intermediate Question:
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
"""

import time
start_time = time.time()

def topKFrequent(nums, k):
    count = {}
    freq = [[] for i in range(len(nums)+1)]
    for n in nums:
        count[n] = 1 + count.get(n, 0)
    for n,c in count.items():
        freq[c].append(n)
    res = []
    for i in range(len(freq) - 1, 0, -1):
        for n in freq[i]:
            res.append(n)
            if len(res) == k:
                return res
        
        

print(topKFrequent([1,1,1,2,2,3,3,3], 2))



end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")