"""
Hard Question 3:
Given two sorted arrays, merge them into a single sorted array without using any extra space. The resulting array should be sorted in non-decreasing order.
"""

import time
start_time = time.time()

# Write your function below:


def merge(arr1, arr2, m, n):
    # Initialize pointers
    i = m - 1  # Last element of arr1
    j = n - 1  # Last element of arr2
    k = m + n - 1  # Last position of merged array

    # Iterate and merge from the end
    while i >= 0 and j >= 0:
        if arr1[i] > arr2[j]:
            arr1[k] = arr1[i]
            i -= 1
        else:
            arr1[k] = arr2[j]
            j -= 1
        k -= 1

    # Copy remaining elements of arr2, if any
    while j >= 0:
        arr1[k] = arr2[j]
        j -= 1
        k -= 1

# Example usage:
arr1 = [1, 3, 5, 7, 0, 0, 0, 0]  # Assuming arr1 has enough space to hold elements of arr2
arr2 = [2, 4, 6, 8]
m = 4  # Number of initial elements in arr1
n = 4  # Number of elements in arr2

merge(arr1, arr2, m, n)
print(arr1)  # Output: [1, 2, 3, 4, 5, 6, 7, 8]





end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")