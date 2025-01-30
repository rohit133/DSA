function zigzagConversion(n, s, rows) {
    if (rows === 1 || rows === n) {
        return s;
    }

    let result = "";
    let cycle = 2 * rows - 2;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j + i < n; j += cycle) {
            result += s[j + i];
            if (i !== 0 && i !== rows - 1 && j + cycle - i < n) {
                result += s[j + cycle - i];
        
            }
        }
    }

    return result;
}