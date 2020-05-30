const exampleArray1 = [1, 2];
const exampleArray2 = [3, 4, 5];
const exampleArray3 = [6, 7, 8, 9];
const exampleArray4 = [10, 11];

const concat = (a, b) => [...a].concat(b);
const concatExtended = (...inputArrays) => [].concat(...inputArrays);

console.log("Example array 1: ", exampleArray1);
console.log("Example array 2: ", exampleArray2);
console.log("Example array 3: ", exampleArray3);
console.log("Example array 4: ", exampleArray4);
console.log("Concat: ", concat(exampleArray1, exampleArray2));
console.log("Concat Extended: ", concatExtended(exampleArray1, exampleArray2, exampleArray3, exampleArray4));
