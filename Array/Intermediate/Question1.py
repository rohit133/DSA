"""
Intermediate Question 1:
Given an array of integers, write a function to find the second largest element in the array.
"""

import time
start_time = time.time()

def findSecondLargest(arr):
    max_val = 0
    second_max_val = 0
    for i in range(len(arr)):
        if arr[i] > max_val :
            second_max_val = max_val
            max_val = arr[i]
        elif arr[i] < max_val and arr[i] > second_max_val:
            second_max_val = arr[i]
        print(f"Current max value : {max_val} - Second Max Val : {second_max_val} and arrya: {arr[i]}")
    return second_max_val
        
print(findSecondLargest([2,4,1,3,5,34]))
print(findSecondLargest([2,4,12,5,3,6]))
print(findSecondLargest([18,4,1,3,5,13]))


end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")