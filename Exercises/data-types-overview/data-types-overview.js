//1. Declare a variable on each type using two options: plain creation, creation with constructor.
let numberVar = 32;
let stringVar = 'Product Owner';
let booleanVar = true;
let nullVar = null;
let undefinedVar; 
let objectVar = { a: 'prior experience', b: 'resume'};
let bigIntVar = BigInt(9007199254740991);

console.log(stringVar,numberVar,booleanVar,nullVar,undefinedVar,objectVar,bigIntVar);

//2. Use operator typeof on each of them.

console.log(typeof numberVar); 
console.log(typeof stringVar);
console.log(typeof booleanVar);
console.log(typeof nullVar); 
console.log(typeof undefinedVar);
console.log(typeof objectVar);
console.log(typeof bigIntVar);

//3. Demonstrate object's references.

objectValue = { age: 32, position: 'product owner', priorExperience: true };
objectValue.age = 34;
objectValue.priorExperience = false; 

console.log(objectValue);

//4. Demonstrate string's backticks features.

console.log(`${stringVar} is ${numberVar} years old and his CPR number is ${bigIntVar}`);

//5. Declare an array containing different data types.

let candidate = [ age = 32, position = 'product owner', priorExperience = true, gender = 'male', illness = null, bankAccount = BigInt(9007199254740991)]; 

console.log(candidate);

//6. Iterate through it and collect amount of each data type to object.

candidate.forEach(function(element) {
  console.log(typeof element);
});