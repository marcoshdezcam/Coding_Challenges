export function versatileSum(num1?: number, num2?: number): any {
  if (num1 === undefined) return versatileSum;

  if (num2 === undefined) {
    return function innerAddition(num3?: number): any {
      if (num3 === undefined) {
        return innerAddition;
      }
      return num1 + num3;
    }
  }

  return num1 + num2;
}
