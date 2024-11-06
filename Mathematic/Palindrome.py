def checkPalindrome(n):
    rev = 0
    temp = n
    while temp > 0:
        rem = temp % 10
        rev = rev*10+rem
        temp = temp // 10
    return rev == n

print(checkPalindrome())
    