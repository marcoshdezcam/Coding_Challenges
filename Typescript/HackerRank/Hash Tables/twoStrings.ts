function twoStrings(s1: string, s2: string): string {
  // Write your code here
  let isSharingSubstring: string = "NO";

  const stringSet: Set<string> = new Set();
  for (const char of s1) {
    stringSet.add(char);
  }
  for (const char of s2) {
    if (stringSet.has(char)) {
      isSharingSubstring = "YES";
    }
  }

  return isSharingSubstring;
}
