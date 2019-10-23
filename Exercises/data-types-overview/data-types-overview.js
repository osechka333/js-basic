/* eslint-disable no-new-wrappers, no-console, no-undef, no-new-object, no-array-constructor */
//1. Declare a variable on each type using two options: plain creation, creation with constructor.
const stringVar = 'Product Owner';
const booleanVar = true;
const nullVar = null;
let undefinedVar;
const numberVar = new Number(32);
const objectVar = new Object('prior experience');
const bigIntVar = BigInt(9007199254740991);
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
}
const applicant = new User('Michael', 'Jacobson');
console.log(applicant, stringVar, numberVar, booleanVar, nullVar, undefinedVar, objectVar, bigIntVar);
//2. Use operator typeof on each of them.
console.log(typeof numberVar);
console.log(typeof stringVar);
console.log(typeof booleanVar);
console.log(typeof nullVar);
console.log(typeof undefinedVar);
console.log(typeof objectVar);
console.log(typeof bigIntVar);
//3. Demonstrate object's references.
const objectValue = { age: 32, position: 'product owner', priorExperience: true };
const anotherObjectValue = objectValue;
anotherObjectValue.age = 34;
anotherObjectValue.priorExperience = false;
console.log(objectValue);
console.log(anotherObjectValue);
//4. Demonstrate string's backticks features.
console.log(`${stringVar} is ${numberVar} years old and his CPR number is ${bigIntVar}`);
//5. Declare an array containing different data types.
const candidate = [32, 'product owner', true, 'male', BigInt(9007199254740991)];
console.log(candidate);
//6. Iterate through it and collect amount of each data type to object.
const array = [120, 45, 66, 88, true, false];
const types = {};
array.forEach(v => {
  types[typeof v] = (types[typeof v] || 0) + 1;
});
console.log(types);
console.log(Object.keys(types).length);
