let closingBracketsMap: Map<string, string> = new Map([
  ["{", "}"],
  ["[", "]"],
  ["(", ")"]
]);

export function checkParenthesis(allBrackets: string): boolean {
  let bracketStack: string[] = [];

  for (let i: number = 0; i < allBrackets.length; i++) {
    const currentBracket: string = allBrackets[i];
    if (bracketStack.length === 0) {
      bracketStack.push(currentBracket);
    } else {
      const stackLastBracket = bracketStack[bracketStack.length - 1];
      const lastClosingBracket = closingBracketsMap.get(stackLastBracket);

      currentBracket === lastClosingBracket ? bracketStack.pop()
        : bracketStack.push(currentBracket);
    }
  }

  return (bracketStack.length === 0);
}

