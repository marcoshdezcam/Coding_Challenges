function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  if (x1 == x2 && v1 == v2) return "YES";
  if ((v1 > v2 && x1 > x2) || (v2 > v1 && x2 > x1)) return "NO";
  const jumps: number = (x2 - x1) / (v1 - v2);

  if (jumps > 0 && Number.isInteger(jumps)) {
    return "YES";
  } else {
    return "NO";
  }
}
