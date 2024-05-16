"""
Easy Question 1:
Write a function in your preferred programming language to find the sum of all elements in an array.
"""

def sumArray(arr):
    sum = 0 
    if len(arr) <= 0:
        return 0
    else: 
        for i in range(len(arr)):
            sum += arr[i]
    return sum 

print(sumArray([1,2,4,5]))