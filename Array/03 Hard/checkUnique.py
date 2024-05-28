"""
Hard Question 1:
You are given an array of integers where each element appears twice except for one. Write a function to find the element that appears only once.
"""

import time
start_time = time.time()

# Write your function below:
def checkUnique(arr):
    result = 0
    for num in arr:
        result = result ^ num 
    return result

print(checkUnique([2, 2, 1, 1, 5]))
print(checkUnique([4, 1, 2, 1, 2]))
print(checkUnique([3, 5, 6, 5, 6, 3, 7]))


end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")