function repeatedString(s, n) {
    let counterOfAs = s.match(RegExp("a", "g")).length;
    const numberOfRepeatedStrings = Math.trunc(n / s.length);
    let totalAs = numberOfRepeatedStrings * counterOfAs;
    const nModS = n % s.length;
    for (let i = 0; i < nModS; i++) {
        s[i] == "a" ? totalAs++ : null;
    }
    return totalAs;
}
console.log(repeatedString("aba", 10));
//# sourceMappingURL=repeatedString.js.map