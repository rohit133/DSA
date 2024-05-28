"""
Easy Question :
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
"""

import time
start_time = time.time()

def containsDuplicate(nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        duplicate_keys = set(nums)
        return len(duplicate_keys) != len(nums)


print(containsDuplicate([2,4,1,3,5,34]))


end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")