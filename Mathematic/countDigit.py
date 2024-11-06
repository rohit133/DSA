def conutDigit(num):
    r = 0
    while(num > 0):
        num = num // 10
        r +=1
    return r
print(conutDigit(34))