function countingValleys(steps: number, path: string): number {
  let letters: string[] = path.split("");
  let valleys: number = 0;

  let hikeUp: string[] = [];
  let hikeDown: string[] = [];

  letters.forEach((letter) => {
    letter == "U" ? hikeUp.push(letter) : hikeDown.push(letter);
    if (hikeUp.length == hikeDown.length) {
      letter == "U" ? valleys++ : null;
    }
  });

  //? Return number of valleys traversed
  return valleys;
}
