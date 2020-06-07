/*************************
 * 
 * APARTADO A 
 * 
 *************************/

const flatArray = arrayToFlat => arrayToFlat.flat(Infinity);

/************************/

/*************************
 * 
 * APARTADO B 
 * 
 *************************/

interface NestedArray<T> extends Array<NestedArray<T> | T> {}

function flatTypedArray<T>(arrayToFlat: Array<NestedArray<T> | T>): Array<T> {
  return arrayToFlat.flat(Infinity);
}

/************************/

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
console.log("Apartado A: ", flatArray(sample));
console.log("Apartado B: ", flatTypedArray<number>(sample));
console.log("Original: ", sample);