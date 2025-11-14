// map vs forEach

//?map()
// Purpose: Transforms each element of an array and returns a new array containing the transformed values. The original array remains unchanged.
// Return Value: A new array.

//? forEach()
// Purpose: Executes a provided function once for each array element, typically for side effects (e.g., logging, modifying elements in place, performing actions). It does not create a new array.
// Return Value: undefined.

//? map() does not modify the original array while forEach() can modify the original array
//! But But But [this is half correct]
//* map() also modify the original array/ can mutate the array
// read mdn doc array.prototype.map()

const arr1 = [1, 2, 3, 4];
const result1 = arr1.forEach((x, i, a) => (a[i] = x * 2));
console.log('Result from forEach', arr1, result1);

const arr2 = [1, 2, 3, 4];
const result2 = arr2.map((x, i, a) => (a[i] = x * 2));
console.log('Result from map', arr2, result2);

//Result from forEach [ 2, 4, 6, 8 ] undefined
// Result from map [ 2, 4, 6, 8 ] [ 2, 4, 6, 8 ]

//! dont add map() dosen't modify the original array while forEach() can modify the original array

//* our answer should be
//? map return the new array with result of the operation performed on each element while for it simply perform the operation on each element without returning anything

// !don't add this one extra line the map modify the map doesn't modify the original array

//? while forEach can modify the original array however it's important to note that modifying the original array with map is not recommended practice as it can lead to unexpected Behavior and make the code harder to understand and maintain it's better to use map to create a new array with the desired changes and leave the original array Unchained
