//1. Declare a variable on each type using two options: plain creation, creation with constructor.
const numberVar = 32;
const stringVar = 'Product Owner';
const booleanVar = true;
const nullVar = null;
let undefinedVar; 
const objectVar = { a: 'prior experience', b: 'resume'};
const bigIntVar = BigInt(9007199254740991);

class User {
  constructor(first,last) {
    this.firstName = first;
    this.lastName = last;
  }
}
let applicant = new User ('Michael', 'Jacobson'); 
console.log(applicant,stringVar,numberVar,booleanVar,nullVar,undefinedVar,objectVar,bigIntVar);

//2. Use operator typeof on each of them.

console.log(typeof numberVar); 
console.log(typeof stringVar);
console.log(typeof booleanVar);
console.log(typeof nullVar); 
console.log(typeof undefinedVar);
console.log(typeof objectVar);
console.log(typeof bigIntVar);

//3. Demonstrate object's references.

let objectValue = { age: 32, position: 'product owner', priorExperience: true };
let anotherObjectValue = objectValue;
anotherObjectValue.age = 34;
anotherObjectValue.priorExperience = false; 

console.log(objectValue);
console.log(anotherObjectValue);

//4. Demonstrate string's backticks features.

console.log(`${stringVar} is ${numberVar} years old and his CPR number is ${bigIntVar}`);

//5. Declare an array containing different data types.

const candidate = [ age = 32, position = 'product owner', priorExperience = true, gender = 'male', bankAccount = BigInt(9007199254740991)]; 
console.log(candidate);

//6. Iterate through it and collect amount of each data type to object.

candidate.forEach(function(item) {
  console.log(typeof item); 
  console.log(Object.keys(item).lenght);
});

const array = [120, 45, 66, 88, true, false],
  types = {};

array.forEach(v => types[typeof v] = true);

console.log(types);
console.log(Object.keys(types).length);