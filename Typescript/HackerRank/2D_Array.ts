function hourglassSum(arr: number[][]): number {
  // Write your code here
  let lineSums: number[][] = [[], [], [], [], [], []];
  let hourglassesSums: number[] = [];

  // Create array of sums for each 3 elements of a headlamp
  for (const line in arr) {
    for (let col = 0; col < arr[line].length - 2; col++) {
      let line3ItemsSum: number =
        arr[line][col] + arr[line][col + 1] + arr[line][col + 2];
      lineSums[line].push(line3ItemsSum);
    }
  }
  // Create an array with all the headlamp sums
  for (let line = 0; line < lineSums[0].length; line++) {
    for (let col = 0; col < lineSums[line].length; col++) {
      let hourglassSum: number =
        lineSums[line][col] +
        lineSums[Number(line) + 2][col] +
        arr[Number(line) + 1][col + 1];
      hourglassesSums.push(hourglassSum);
    }
  }
  let highestHourGlassSums: number[] = hourglassesSums.sort((a, b) => a - b);

  return highestHourGlassSums[highestHourGlassSums.length - 1];
}
