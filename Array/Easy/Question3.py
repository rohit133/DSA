"""
Easy Question 3:
Write a program that takes an array of integers as input and outputs the array in reverse order.
"""
import time
start_time = time.time()

    
def getReverseArr(arr):
    newArr = []
    for i in range((len(arr)-1), -1, -1):
        newArr.append(arr[i])
    return newArr

print(getReverseArr([1,2,4,5,6,7]))
print(getReverseArr([2,4,12,5,3,1]))
print(getReverseArr([2,4,12,5,3,2]))


end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")