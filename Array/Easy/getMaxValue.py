"""
Easy Question 2:
How would you find the maximum value in an array of integers? Write a simple algorithm for this.
"""

import time
start_time = time.time()

def getMaxValue(arr):
    max_value = 0
    for i in range(len(arr)):
        print(f"Current max value : {max_value} and arrya: {arr[i]}")
        if arr[i] > max_value:
            max_value = arr[i]
    return max_value

print(getMaxValue([2,4,1,3,5,34]))
print(getMaxValue([2,4,12,5,3]))
print(getMaxValue([18,4,1,3,5,13]))


end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")