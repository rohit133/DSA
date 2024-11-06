""""
Easy Question 4:
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Please implement encode and decode
"""

import time
start_time = time.time()

def encode(strs):
    res = ''
    for s in strs:
        res += str(len(s)) + '#' + s
    return res

def decode(str):
    res, i = [], 0
    while i < len(str):
        j = i 
        while str[j] != '#':
            j += 1
        lenght = int(str[i:j])
        res.append(str[j+1: j+1+lenght]) 
        i = j + 1 + lenght            
    return res



# Test your code here!

print(encode(["neet","code","love","you"]))
print(decode('4#neet4#code4#love3#you'))

end_time = time.time()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"Time Taken by your code: {elapsed_time:.4f} ms")