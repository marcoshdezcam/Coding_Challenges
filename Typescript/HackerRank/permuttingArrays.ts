function twoArrays(k: number, A: number[], B: number[]): string {
  const arrayA: number[] = A.sort((a, b) => {
    return a - b;
  });
  const arrayB: number[] = B.sort((a, b) => {
    return b - a;
  });

  for (const item in arrayA) {
    if (arrayA[item] + arrayB[item] < k) {
      // Change position on B untiL sum > k
      console.log("NO");
      return "NO";
    }
  }
  console.log("YES");
  return "YES";
}

const testCase1 = {
  A: [18, 73, 55, 59, 37, 13, 1, 33],
  B: [81, 11, 77, 49, 65, 26, 29, 49],
  K: 91,
};

const testCase2 = {
  A: [84, 2, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2],
  B: [53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8, 19],
  K: 94,
};

const testCase3 = {
  A: [66, 66, 32, 75, 77, 34, 23, 35],
  B: [61, 17, 52, 20, 48, 11, 50, 5],
  K: 88,
};

const testCase4 = {
  A: [11, 16, 43, 5, 25, 22, 19, 32, 10, 26, 2, 42, 16, 1],
  B: [33, 1, 1, 20, 26, 7, 17, 39, 23, 34, 10, 11, 38, 20],
  K: 45,
};

const testCase5 = {
  A: [15, 16, 44, 58, 5, 10, 16, 9, 4, 20, 24],
  B: [37, 45, 41, 46, 8, 23, 59, 57, 51, 44, 59],
  K: 59,
};

console.log(twoArrays(testCase1.K, testCase2.A, testCase3.B));
