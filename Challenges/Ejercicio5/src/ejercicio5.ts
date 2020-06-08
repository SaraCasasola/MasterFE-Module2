
const expensiveFunction = (): number => {
  console.log("Una única llamada");
  return 3.1415;
};

/*************************
 * 
 * APARTADO A
 * 
 *************************/

const memoizeA = (func: () => number): () => number => {
  let cache: object = {};

  return (): number => {
    let key: string = "alreadyCalled";
    if (cache[key]) {
      return cache[key];
    }

    let functionReturnValue: number = func();
    cache[key] = functionReturnValue;
    return functionReturnValue; 
  }
};

const memoizedA = memoizeA(expensiveFunction);
console.log("Apartado A"); 
console.log(memoizedA()); 
console.log(memoizedA());
console.log(memoizedA()); 

/************************/

/*************************
 * 
 * APARTADO B
 * 
 *************************/

const memoizeB = (func: () => number): () => number => {let value: number; return () => {return value ? value : value=func()}}
const memoizedB = memoizeB(expensiveFunction);

console.log("Apartado B"); 
console.log(memoizedB()); 
console.log(memoizedB());
console.log(memoizedB()); 

 /************************/

 /*************************
 * 
 * APARTADO C
 * 
 *************************/

let count = 0; // Comprobacion de nº de ejecuciones

const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim());

const memoize = (func: (repetitions: number, text: string) => string) => {
  let cache = {};

  return (repetitions: number, text: string): string => {
    let cacheKey: string = text.concat(repetitions.toString());

    if (cacheKey in cache) {
      return cache[cacheKey];
    }
        
    return cache[cacheKey] = func(repetitions, text);  
  }
};

const memoizedGreet = memoize(repeatText);

console.log("Apartado C"); 
console.log(memoizedGreet(1, "pam")); 
console.log(memoizedGreet(3, "chun")); 
console.log(memoizedGreet(1, "pam")); 
console.log(memoizedGreet(3, "chun")); 
console.log(count); 

 /************************/