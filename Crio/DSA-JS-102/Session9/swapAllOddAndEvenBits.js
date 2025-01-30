function swapAllOddAndEvenBits(n) {
  // Implement it here
  for (let i = 0n; i < 64n; i += 2n) {
    let a, b;

    if ((n & (1n << i)) == 0n) {
      a = 0n;
    } else {
      a = 1n;
    }

    if ((n & (1n << (i + 1n))) > 0n) {
      b = 1n;
    } else {
      b = 0n;
    }

    if (a !== b) {
      n ^= (1n << i);
      n ^= (1n << (i + 1n));
    }
  }
  return n;
}
