type Cylinder = {
  height: number;
  cylinder: number[];
};

function getHeight(cylinder: number[]) {
  let height = 0;
  cylinder.forEach((value, index) => {
    return (height += value);
  });
  return height;
}

function equalHeights(cyl1: Cylinder, cyl2: Cylinder, cyl3: Cylinder): boolean {
  return cyl1.height == cyl2.height && cyl2.height == cyl3.height;
}

function removeFromCylinder(cyl: Cylinder): number {
  cyl.height = cyl.height - cyl.cylinder.shift();
  return cyl.height;
}

function getTallest(cyl1: Cylinder, cyl2: Cylinder, cyl3: Cylinder): Cylinder {
  if (cyl1.height > cyl2.height && cyl1.height > cyl3.height) return cyl1;
  if (cyl2.height > cyl1.height && cyl2.height > cyl3.height) return cyl2;
  if (cyl3.height > cyl1.height && cyl3.height > cyl2.height) return cyl3;
}

function equalStacks(h1: number[], h2: number[], h3: number[]): number {
  let cyl1: Cylinder = {
    height: getHeight(h1),
    cylinder: h1,
  };
  let cyl2: Cylinder = {
    height: getHeight(h2),
    cylinder: h2,
  };
  let cyl3: Cylinder = {
    height: getHeight(h3),
    cylinder: h3,
  };

  while (!equalHeights(cyl1, cyl2, cyl3)) {
    let tallest: Cylinder = getTallest(cyl1, cyl2, cyl3);
    removeFromCylinder(tallest);
  }

  return cyl1.height;
}

equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]);
