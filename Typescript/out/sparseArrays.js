function matchingStrings(strings, queries) {
    // Write your code here
    let result = [];
    queries.forEach((query) => {
        console.log("QUERY", query);
        console.log("STRING", strings);
        const filtered = strings.filter((string) => string === query);
        result.push(filtered.length);
        console.log(filtered);
        // console.log(filtered);
    });
    console.log("RESULT", result);
    return result;
}
let strings = ["ab", "ab", "abc"];
let queries = ["ab", "abc", "bc"];
//# sourceMappingURL=sparseArrays.js.map