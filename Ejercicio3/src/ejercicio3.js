const exampleObject = {
    key1: "value1",
    key2: "value3",
    key3: "value3",
}

function clone(source) {
    return Object.assign({}, source);
}

console.log("Example object: ", exampleObject);
console.log("Clone: ", clone(exampleObject));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return {...target, ...source};
}

console.log("First Object: ", a);
console.log("Second Object: ", b);
console.log("Merge: ", merge(a, b));