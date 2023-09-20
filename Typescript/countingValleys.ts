function countingValleys(steps: number, path: string): number {
  let letters: string[] = path.split("");
  let valleys: number = 0;

  letters.forEach((letter) => {
    console.log(letter);
  });
  console.log(valleys);

  //? Return number of valleys traversed
  return valleys;
}

export { countingValleys };
