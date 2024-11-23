function checkMagazine(magazine: string[], note: string[]): void {
  // Write your code here
  let isReplicable: boolean = true;
  note.forEach((noteWord) => {
    const indexInMagazine = magazine.indexOf(noteWord);
    if (indexInMagazine === -1) {
      isReplicable = false;
    } else {
      magazine.splice(indexInMagazine, 1);
    }
  });

  isReplicable ? console.log("Yes") : console.log("No");
}
