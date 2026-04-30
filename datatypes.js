let age=28;
console.log(typeof age); // Output: number

let name="srikanth";
console.log(typeof name); // Output: string

let isStudent=true;
console.log(typeof isStudent); // Output: boolean

let person;
console.log(typeof person); // Output: undefined

let bigIntValue=9007199254740991n;
console.log(typeof bigIntValue); // Output: bigint

let order=null;
console.log(typeof order);// Output: object (this is a known quirk in JavaScript, null is considered an object type)

let names=["srikanth","sri","kumar",26,true,null];
console.log(typeof names); // Output: object (arrays are a type of object in JavaScript)