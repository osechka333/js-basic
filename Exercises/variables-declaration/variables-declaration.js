//1. Declare a variable which will be encapsulated from global scope

let price = 50; 
let discount = 17; 

if (price === 50) {
  let total = price - discount;
  console.log(total);
}

//2. Declare a variable which will appear in global object.
userTemperature = 96.8;

console.log(userTemperature);

//3. Declare two variables which will be same-names but contain different values.
let age;
let userAge = 21;

function AgeValidator(){
  let userAge = 17; 

  age = (userAge < 18) ? 'Forbidden to vote' : 'Allowed to vote';

  console.log(age);
}
AgeValidator();

const a = 4; 
{
  const a = 5; 

  console.log(a);
}
console.log(a);

//4. Declare a variable with hoisting.

console.log(minTemperaturePrague);
var minTemperaturePrague; 
