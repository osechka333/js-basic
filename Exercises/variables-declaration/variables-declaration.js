//1. Declare a variable which will be encapsulated from global scope

let price = 50; 

function TotalCount () {
  let discount = 17; 
  let total = price - discount; 

  console.log(total);
}
TotalCount();
//2. Declare a variable which will appear in global object.

let userTemperature = 96.8;

let fToCel = (userTemperature -32) * 5/9;

console.log(fToCel);

//3. Declare two variables which will be same-names but contain different values.
let userAge = 21;

function AgeValidator(){
  let userAge = 17; 

  Age = (userAge < 18) ? 'Forbidden to vote' : 'Allowed to vote';

  console.log(Age);
}
AgeValidator();

//4. Declare a variable with hoisting.

minTemperaturePrague = 3;
var minTemperaturePrague; 

console.log(minTemperaturePrague);
