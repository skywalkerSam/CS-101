// The Fisher Yates Shuffle Algorithm with TypeScript

let theArray: string[] = [
  "Sam",
  "Starboy",
  "Tris",
  "Stargirl",
  "Life",
  "Universe",
  "&",
  "Whatever",
  "tf",
  "lies",
  "beyond...",
  "wtf, right?",
  "Origins",
  "Eternity",
  "The Beginning of the end",
  "Singularity",
  "FML",
  "Fuck",
  "Just",
  "Fuckin'",
  "Die",
  "Already",
  "...",
].sort();


let shuffledArray: string[] = [];

// let fisherCalled: boolean = true;
export function fisherYates(someArray) {
  const min: number = 0;
  let max: number = theArray.length;
  let randomIndex: number = 0;
  for (max >= min; max--; ) {
    randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    shuffledArray.push(theArray[randomIndex]);
    theArray.splice(randomIndex, 1);
    // console.log(min, max, randomIndex);
    // console.log(theArray, shuffledArray);
  }

  return shuffledArray;
}


// console.log(theArray)
// console.log(shuffledArray);
// fisherYates();
// console.log(shuffledArray)
// console.log(theArray);

console.log(fisherYates(theArray));
