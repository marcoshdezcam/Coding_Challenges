export function singleMutation(str: string, str2: string): boolean | number {
  // Return 1 => Character deletion
  if (str.length === str2.length - 1) return 1;
  // Return 0 => Character insertion
  if (str.length === str2.length + 1) return 0;
  // Return TRUE if 2 strings are the same
  if (str.length === str2.length) {
    for (let charIndex: number = 0; charIndex < str.length; charIndex++) {
      const charA: string = str[charIndex], charB = str2[charIndex];
      if (charA !== charB) return false
    }
    return true;
  }

  // Return FALSE if no condition is met
  return false;
}

console.log({
  "Same string": singleMutation("abcd", "abcd")
})
