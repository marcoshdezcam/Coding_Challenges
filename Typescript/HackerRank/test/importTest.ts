import * as fs from "fs";

export function fileAsString(filePath: string): string {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

export function fileAsArray(filePath: string): number[] {
  try {
    const fileContent: string = fs.readFileSync(filePath, "utf8");
    let contentAsArray: string[] = fileContent.split(" ");
    let numArray: number[] = contentAsArray.map(Number);
    return numArray;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

module.exports = {
  fileAsString,
  fileAsArray,
};
