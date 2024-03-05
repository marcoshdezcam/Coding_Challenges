interface Sighting {
  birdId: number;
  frequency: number;
}

function migratoryBirds(arr: number[]): number {
  let sightings: Sighting[] = [];

  arr.forEach((birdType, index) => {
    let frequency: number = sightings[birdType]
      ? sightings[birdType].frequency + 1
      : 1;

    let newSighting: Sighting = { birdId: birdType, frequency: frequency };
    sightings[birdType]
      ? (sightings[birdType].frequency = frequency)
      : (sightings[birdType] = newSighting);
  });

  sightings.sort((a: Sighting, b: Sighting) => {
    // Order in descencing order
    return b.frequency - a.frequency;
  });

  return sightings[0].birdId;
}
