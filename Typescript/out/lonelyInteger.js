function lonelyInteger(s) {
    let uniqueElement = 0;
    for (let element in s) {
        console.log(element);
        const elementOccurrences = s.filter((item) => item == s[element]).length;
        console.log(elementOccurrences);
        if (elementOccurrences == 1) {
            uniqueElement = s[element];
        }
    }
    return uniqueElement;
}
const integers = [1, 2, 3, 4, 3, 2, 1];
//# sourceMappingURL=lonelyInteger.js.map