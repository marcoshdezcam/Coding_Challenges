function matchingStrings(strings: string[], queries: string[]): number[] {
  // Write your code here
  let result: number[] = [];

  queries.forEach((query) => {
    console.log("QUERY", query);
    console.log("STRING", strings);

    const filtered: string[] = strings.filter((string) => string === query);

    result.push(filtered.length);
    console.log(filtered);
    // console.log(filtered);
  });

  console.log("RESULT", result);
  return result;
}

let strings: string[] = ["ab", "ab", "abc"];
let queries: string[] = ["ab", "abc", "bc"];

const result: number[] = matchingStrings(strings, queries);
console.log(result);
