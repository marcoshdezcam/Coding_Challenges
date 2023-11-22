function gradingStudents(grades: number[]): number[] {
  // Write your code here
  let roundedGrades: number[] = [];

  for (let grade of grades) {
    if (grade < 38) {
      roundedGrades.push(grade);
      continue;
    }
    let remainder: number = grade % 5;
    if (remainder >= 3) {
      let roundedGrade: number = grade + (5 - remainder);
      roundedGrades.push(roundedGrade);
    } else {
      roundedGrades.push(grade);
    }
  }

  return roundedGrades;
}
