function lonelyInteger(s: number[]): number {
  let uniqueElement: number = 0;
  for (let element in s) {
    console.log(element);

    const elementOccurrences: number = s.filter(
      (item) => item == s[element]
    ).length;
    console.log(elementOccurrences);

    if (elementOccurrences == 1) {
      uniqueElement = s[element];
    }
  }
  return uniqueElement;
}

const integers: number[] = [1, 2, 3, 4, 3, 2, 1];
const result: number = lonelyInteger(integers);
console.log(result);
