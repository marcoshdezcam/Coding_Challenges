interface FruitHashMap {
  [fruitName: string]: number;
}

const fruitFlavors: FruitHashMap = {
  apple: 8,
  banana: 6,
  cherry: 9,
  durian: 10,
  elderberry: 4,
  fig: 7,
};

console.log(fruitFlavors["apple"]);

let myMap = new Map<string, number>([
  ["apple", 8],
  ["banana", 6],
  ["cherry", 9],
  ["durian", 10],
  ["elderberry", 4],
  ["fig", 7],
]);
myMap.set("apple", 8);

console.log(myMap.("apple"));
