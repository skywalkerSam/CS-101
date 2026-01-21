import { expect, test } from "vitest";

let array: string[] = ["hello", "world", "wtf", "fml", "idk"];

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

import { fisherYates } from "./src/fisherYates";
test("fisherYates", () => {
  expect(fisherYates(theArray)).toBe(theArray);     // FAIL means that it works ;)
});
