function isPalidrome(s) {
    // Using Two-Pointer Technique
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right])
            return false;
        left++;
        right--;
    }
    return true;
}
//# sourceMappingURL=validPalindrome.js.map