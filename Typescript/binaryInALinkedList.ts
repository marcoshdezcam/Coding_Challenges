function binary2Decimal(num) {
  return num
    .split("")
    .reverse()
    .reduce(function (x, y, i) {
      return y === "1" ? x + BigInt(2) ** BigInt(i) : x;
    }, BigInt(0));
}

function getNumber(binary) {
  let binaryNumber = "";
  let currentNode = binary;
  while (currentNode) {
    binaryNumber += currentNode.data;
    currentNode = currentNode.next;
  }
  const decimalNum = binary2Decimal(binaryNumber);

  return decimalNum;
}
