function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function findLCM(numbers: number[]): number {
  return numbers.reduce((acc, val) => lcm(acc, val), 1);
}

function findCommonMultiples(numbers: number[], limit: number) {
  const commonMultiples: number[] = [];
  const commonLCM = findLCM(numbers);

  for (let i = commonLCM; i <= limit; i += commonLCM) {
    commonMultiples.push(i);
  }

  return commonMultiples;
}

function findCommonFactors(numbers: number[]): number[] {
  let commonGCD = numbers.reduce((a, b) => gcd(a, b));

  let commongFactors: number[] = [];
  for (let i = 1; i <= commonGCD; i++) {
    if (commonGCD % i === 0) {
      commongFactors.push(i);
    }
  }

  return commongFactors;
}

function findCommonNumbers(multiples: number[], factors: number[]): number[] {
  let commonNumbers: number[] = multiples.filter((multiple) =>
    factors.includes(multiple)
  );

  return commonNumbers;
}

function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  const commonMultiples = findCommonMultiples(a, 100);
  const commonFactors = findCommonFactors(b);

  let numsBetweenArrays: number[] = findCommonNumbers(
    commonMultiples,
    commonFactors
  );

  return numsBetweenArrays.length;
}
