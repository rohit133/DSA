"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
"""

import time
start_time = time.time()

def sumTwo(arr, target):
    sum = 0
    for element in arr:
        if element == target:
            pass
        
    




print(sumTwo([2,7,11,15], 9))
end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")