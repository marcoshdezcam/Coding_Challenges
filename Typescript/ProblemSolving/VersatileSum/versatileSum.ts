export function versatileSum(num1: number, num2?: number): any {
  if (num2 === undefined) {
    return function (num3: number) {
      return num1 + num3;
    }
  }

  return num1 + num2;
}

const total1: number = versatileSum(3, 4);
const total2: number = versatileSum(10, 12);
const total3: number = versatileSum(3)(7);

console.log({
  total1,
  total2,
  total3
})
