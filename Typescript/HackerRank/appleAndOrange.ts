function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  // Write your code here
  const samsHouse: number[] = [s, t];
  const appleTree: number = a,
    orangeTree: number = b;
  let numApples: number = 0,
    numOranges = 0;

  for (let apple of apples) {
    let applePos = appleTree + apple;
    applePos >= samsHouse[0] && applePos <= samsHouse[1] ? numApples++ : null;
  }
  for (let orange of oranges) {
    let orangePos = orangeTree + orange;
    orangePos >= samsHouse[0] && orangePos <= samsHouse[1]
      ? numOranges++
      : null;
  }
  console.log(numApples);
  console.log(numOranges);
}

const apples: number[] = [-2, 2, 1];
const oranges: number[] = [5, -6];

console.log(countApplesAndOranges(5, 15, 3, 2, apples, oranges));
