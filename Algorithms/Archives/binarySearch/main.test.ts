import { expect, test } from "vitest";
import { sortThis } from "./src/binarySearch";
import { binarySearch } from "./src/binarySearch";

let array: string[] = ["hello", "world", "wtf", "fml", "idk"];

test("Sorted Array", () => {
  expect(sortThis(array)).toStrictEqual([
    "fml",
    "hello",
    "idk",
    "world",
    "wtf",
  ]);
});

test("Binary Search", () => {
  expect(binarySearch(array, "wtf")).toBe(2);
});

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
];

test("Another BS", () => {
  expect(binarySearch(theArray, "Universe")).toBe(5);
});
