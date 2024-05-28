"""
Intermediate Question:
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
"""

import time
start_time = time.time()

def topKFrequent(nums, k):
    duplicate_keys = set(nums)
    return len(duplicate_keys) != len(nums)




print(topKFrequent([1,1,1,2,2,3], 2))



end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")