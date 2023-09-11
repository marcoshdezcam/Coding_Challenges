function xorStrings_2(input: string) {
  // now we can read/parse input
  const firstString = input.slice(0, input.indexOf("\n")).replace(/ /g, "");
  const secondString = input
    .slice(input.indexOf("\n") + 1, input.length)
    .replace(/ /g, "");
  let xorString = "";

  for (const index in firstString) {
    if (
      (firstString[index] == "0" && secondString[index] == "0") ||
      (firstString[index] == "1" && secondString[index] == "1")
    ) {
      xorString = xorString + "0";
    } else {
      xorString = xorString + "1";
    }
  }

  console.log(xorString);
  return xorString;
}
