"""
Easy Question 1:
Write a function in your preferred programming language to find the sum of all elements in an array.
"""
import time
start_time = time.time()

def sumArray(arr):
    sum = 0 
    if len(arr) <= 0:
        return 0
    else: 
        for ele in arr:
            sum += ele
    return sum 

print(sumArray([1,2,4,5]))
# should print `12`

end_time = time.time()

elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")