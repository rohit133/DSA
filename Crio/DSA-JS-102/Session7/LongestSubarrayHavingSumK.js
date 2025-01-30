
function longestSubarrayHavingSumK(n,K,A) {
    const um = new Map();
    let sum = 0;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        sum += A[i];
        if (sum == K)
            ans = i + 1;

        if (!um.has(sum))
            um.set(sum, i);

        if (um.has(sum - K)) {
            if (ans < (i - um.get(sum - K)))
                ans = i - um.get(sum - K);
        }
    }
    return ans;
}