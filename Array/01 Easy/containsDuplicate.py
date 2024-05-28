""""
Intermediate Question 4:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
"""

import time
start_time = time.time()

def containsDuplicate(nums):    
    duplicate_keys = set(nums)
    return len(duplicate_keys) != len(nums)

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
print(containsDuplicate([1,2,3,4,5,6]))

end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")