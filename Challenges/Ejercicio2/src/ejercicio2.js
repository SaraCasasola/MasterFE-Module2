/*************************
 * 
 * APARTADO A 
 * 
 *************************/

const deepGet = (informationObject, ...routeIdentifiers) => 
    routeIdentifiers.reduce((accumulator, currentValue) => accumulator && accumulator[currentValue], informationObject);


const myObjectA = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};
  
console.log("Apartado A");
console.log(deepGet(myObjectA, "x"));
console.log(deepGet(myObjectA, "a"));
console.log(deepGet(myObjectA, "b"));
console.log(deepGet(myObjectA, "b", "c"));
console.log(deepGet(myObjectA, "b", "d", "f", "g"));
console.log(deepGet(myObjectA));

/************************/

/*************************
 * 
 * APARTADO B 
 * 
 *************************/

const deepSet = (valueToSet, informationObject, ...routeIdentifiers) => {
  let length = routeIdentifiers.length;

  routeIdentifiers.forEach((key, index) => {
    if (index === length - 1) {
      informationObject[key] = valueToSet;
      return;
    }

    if (!informationObject[key]) {
      informationObject[key] = {};
    }
    informationObject = informationObject[key];
  });
}

const myObjectB = {};

console.log("Apartado B");
deepSet(1, myObjectB, "a", "b");
console.log(JSON.stringify(myObjectB));
deepSet(2, myObjectB, "a", "c");
console.log(JSON.stringify(myObjectB));
deepSet(3, myObjectB, "a");
console.log(JSON.stringify(myObjectB));
deepSet(4, myObjectB);
console.log(JSON.stringify(myObjectB));

/************************/

