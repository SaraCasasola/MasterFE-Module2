const exampleArray = [1, 2, 3, 4, 5];

const head = ([firstElement]) => firstElement;
    
const tail = ([, ...inputArray]) => inputArray;

const init = (inputArray) => inputArray.slice(0, -1);

const last = (inputArray) => [...inputArray].pop();

console.log("Example array: ", exampleArray);
console.log("Head: ", head(exampleArray));
console.log("Tail: ", tail(exampleArray));
console.log("Init: ", init(exampleArray));
console.log("Last: ", last(exampleArray));
console.log("Example array: ", exampleArray);