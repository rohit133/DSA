"""
Easy Question: 
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.
O(n) time without using the division operation?
"""

import time
start_time = time.time()

def productExceptSelf(nums):
    result = []
    for n in nums:
        pass
    return result






print(productExceptSelf([1,2,4,6]))
print(productExceptSelf([-1,0,1,2,3]))



end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")
