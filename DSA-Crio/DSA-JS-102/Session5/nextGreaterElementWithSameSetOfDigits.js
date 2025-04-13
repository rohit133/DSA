/**
 * @param {number} n
 * @return {number}
 */
function reverse(arr, start, end){
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
function nextGreaterElementWithSameSetOfDigits(n) {
    //implement this function
    let digits = n.toString().split('');
    let i =digits.length-2;
    while(i >= 0){
        if(digits[i] < digits[i+1]){
            break;
        }
        i--;
    }
    if(i < 0){
        return -1;
    }

    let j = digits.length-1;
    while(j >= 0){
        if(digits[j] > digits[i]){
            break;
        }
        j--;
    }
    [digits[i], digits[j]] = [digits[j], digits[i]];
    reverse(digits, i+1, digits.length-1);
    return parseInt(digits.join(''));
}


console.log(nextGreaterElementWithSameSetOfDigits(202));