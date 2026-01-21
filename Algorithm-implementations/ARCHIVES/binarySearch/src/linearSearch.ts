// searching algorithms

// Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.


let theArray = [3, 6, 9, 33, 66, 99, 36, 69, 96]    // no need to sort

let theAnotherArray = ['Sam', 'Starboy', 'Tris', 'Stargirl', 'Life', 'Universe', '&', 'Whatever', 'tf', 'lies', 'beyond...', 'wtf, right?', 'Origins', 'Eternity', 'The Beginning of the end', 'Singularity', 'FML'].sort()

// normal search, O(n!)
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}



// binary search algorithm, O(log n)
function binarySearch(arr, target, start = 0, end = arr.length - 1) {

    // dry
    let pointerIndex = Math.floor((start + end) / 2)
    let currentIndexValue = arr[pointerIndex]
    console.log(start, end, pointerIndex, currentIndexValue)

    // not found!
    if (start > end) {
        console.log('\nTarget Not Found!')
        return -1;
    }

    // found :)
    if (currentIndexValue === target) {
        console.log(`Target ${target} found at the index of ${pointerIndex} :)`)
        return pointerIndex;
    }

    // over, recursive🔁
    if (currentIndexValue > target) {
        return binarySearch(arr, target, start, pointerIndex - 1)
    }

    // under, recursive🔁
    if (currentIndexValue < target) {
        return binarySearch(arr, target, pointerIndex + 1, end)
    }

}



// console.log(search(theArray, 99))

// console.log(binarySearch(theArray, 69))
// console.log(theArray)

// console.log(theAnotherArray)
console.log(binarySearch(theAnotherArray, ''))


// idk, something just doesn't feel right...

// shit happens, life goes on...