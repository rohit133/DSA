"""
Easy Question 3:
Write a program that takes an array of integers as input and outputs the array in reverse order.
"""
    
def getReverseArr(arr):
    newArr = []
    for i in range((len(arr)-1), -1, -1):
        newArr.append(arr[i])
    return newArr

print(getReverseArr([1,2,4,5,6,7]))
print(getReverseArr([2,4,12,5,3,1]))
print(getReverseArr([2,4,12,5,3,2]))