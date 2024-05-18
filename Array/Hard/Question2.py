"""
Hard Question 2:
Implement an algorithm to find the subarray with the largest sum within a given array of integers. The subarray must contain at least one element.
"""

# import time
# start_time = time.time()

# Write your function below:
def findSecondMaxSum(arr):
    max_sum = float('-inf')
    current_sum = 0
    for num in arr:
        current_sum += num
        if current_sum > max_sum:
            max_sum = current_sum      
        if current_sum < 0:
            current_sum = 0
    return max_sum



print(findSecondMaxSum([-2,1,-3,4,-1,2,1,-5,4]))
print(findSecondMaxSum([-1]))
print(findSecondMaxSum([5,4,-1,7,8]))




# end_time = time.time()
# elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
# print(f"Time Taken by your code: {elapsed_time:.4f} ms")