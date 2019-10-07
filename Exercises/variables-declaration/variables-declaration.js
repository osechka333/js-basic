//1. Declare a variable which will be encapsulated from global scope

let price = 50; 
let discount = 17; 

if (price === 50) {
  let total = price - discount;
  console.log(total);
}

//2. Declare a variable which will appear in global object.

var userTemperature = 96.8;

console.log(userTemperature);

//3. Declare two variables which will be same-names but contain different values.
let userAge = 21;

function AgeValidator(){
  let userAge = 17; 

  Age = (userAge < 18) ? 'Forbidden to vote' : 'Allowed to vote';

  console.log(Age);
}
AgeValidator();

//4. Declare a variable with hoisting.

console.log(minTemperaturePrague);

var minTemperaturePrague; 
