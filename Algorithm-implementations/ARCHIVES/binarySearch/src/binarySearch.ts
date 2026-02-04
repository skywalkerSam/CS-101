// binarySearch, returns the index on the `actual` array...

let theArray: string[] | number[] = [
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
];

// sort
let sortedArray: string[] | number[] = theArray
  .map((value) => value.toLowerCase())
  .sort();

// for testing
export function sortThis(arr) {
  return arr.map((value) => value.toLowerCase()).sort();
}

export function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  sortThis(arr); //for testing

  let pointerIndex: number = Math.floor((start + end) / 2);
  let indexValue: number = arr[pointerIndex];
  console.log(start, end, pointerIndex, indexValue);

  // failed
  if (start > end) {
    console.log("\nNot Found!!");
    return -1;
  }

  // found
  if (indexValue === target) {
    console.log(`${target} found at ${pointerIndex} :)`);
    return pointerIndex;
  }

  // overshoot
  if (indexValue > target) {
    return binarySearch(arr, target, start, pointerIndex - 1);
  }

  // undershoot
  if (indexValue < target) {
    return binarySearch(arr, target, pointerIndex + 1, end);
  }
}

console.log(binarySearch(theArray, "fml"));
// console.log(theArray)
