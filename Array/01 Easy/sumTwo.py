"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
"""

import time
start_time = time.time()

def sumTwo(arr, target):
    result = {}
    for i in range(len(arr)): 
        diff = target - arr[i] 
        if diff in result:
            return [result[diff], i]
        result[arr[i]] = i
    


def getSum(arr, t):
    result = {}
    for i in range(len(arr)):
        diff = t - arr[i]
        if diff in result:
            return [result[diff], i]
        result[arr[i]] = i
    
    return result




     
print(getSum([1,7,11,15], 12))
end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")