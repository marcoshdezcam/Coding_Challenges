module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  canCompleteCircuit: function (A, B) {
    // Track starting index && Determine if we have completed a lap
    let startingIndex = -1,
      currentGasLoad = 0;

    // Iterate over both arrays using the same loop A[i] and B[i]
    // A => Amount of gas we can fill
    // B => Gas needed to move

    // A = [3, 2, 3]
    // B = [2, 1, 2]
    //  currentIndex == 0
    // A = 3  | B = 2
    // currentIndex == 1
    // A = 2 | B = 1
    // currentIndex == 2
    // A = 3 | B = 2

    for (let currentIndex = 0; currentIndex <= A.length; currentIndex++) {
      // If A <= B Increase our starting index NOT ENOUGH GAS // JUST MOVE
      if (currentGasLoad < B[currentIndex]) {
        console.log("Not enough gas");
        continue;
      }
      // Check if lap is already completed - RETURN startingIndex
      if (startingIndex == currentIndex) {
        console.log("Lap Completed");
        return startingIndex;
      }

      if (startingIndex == -1) {
        console.log("First time");
        startingIndex = currentIndex;
      }

      // ENOUGH gas -> Fill gas tank - Start tracking
      console.log("Enough gas");
      currentGasLoad = currentGasLoad + A[currentIndex] - B[currentIndex];
      console.log(currentGasLoad);

      // IF We are at the end of the array - reset currentIndex
      //if (currentIndex == A.length) {
      //    currentIndex = 0
      //};
    }

    // Return -1 if failed
    return startingIndex;
  },
};
