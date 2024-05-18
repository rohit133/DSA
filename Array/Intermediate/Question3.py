"""
Intermediate Question 3:
Write a program that rotates the elements of an array to the right by a given number of steps.
"""
import time
start_time = time.time()

def rotateElement(arr, step):
    n = len(arr)
    if(n == step):
        return arr
    else:
        step =  step % n
        return arr[-step :] + arr[: -step]

print(rotateElement([1,2,3,4,5], 4))



end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")