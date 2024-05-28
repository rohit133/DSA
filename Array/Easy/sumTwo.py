"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
"""

import time
start_time = time.time()

def sumTwo(arr, target):
    max_value = 0
    for i in range(len(arr)):
        if arr[i] > max_value:
            max_value += arr[i]
        if max_value == target:
            return True
        else: 
            continue
            

        
    




print(sumTwo([2,7,11,15], 9))
end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")