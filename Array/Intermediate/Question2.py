"""
Intermediate Question 2:
Implement a function that removes duplicates from an array without using any built-in library functions.
"""

import time
start_time = time.time()

def removeDuplicate(arr):
    duplicate_keys = set()
    newArr = []
    for num in arr:
        if num not in duplicate_keys:
            duplicate_keys.add(num)
            newArr.append(num)
    return newArr

print(removeDuplicate([1,2,4,5,5,2,1]))



end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")