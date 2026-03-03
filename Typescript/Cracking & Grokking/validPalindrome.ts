function isAlphanumeric(char: string): boolean {
  return /[\p{L}\p{N}]/u.test(char);
}

function isAlphabeticPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;
  console.log({
    s,
  });

  while (left < right) {
    // Skip non-alphanumeric characters from the left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    // Skip non-alphanumeric characters from the right
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log({
  testcase1: isAlphabeticPalindrome('Z'),
  testCase2: isAlphabeticPalindrome(`abc123cba`),
});
