//1. Declare a variable on each type using two options: plain creation, creation with constructor.
let age = 32;
let position = 'Product Owner';
let priorExperience = true; 
let otherDetails = null; 

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
}
let candidate = new User ('Michael', 'Jacobson'); //3. Demonstrate object's references.

console.log(candidate,age,position,priorExperience,otherDetails);

//2. Use operator typeof on each of them.

console.log(typeof age); 
console.log(typeof position);
console.log(typeof priorExperience);
console.log(typeof otherDetails); 
console.log(typeof (User));

//4. Demonstrate string's backticks features.

console.log(String.raw`Backticks' feature`);