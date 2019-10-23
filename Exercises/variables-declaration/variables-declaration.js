//1. Declare a variable which will be encapsulated from global scope

/*eslint-disable no-undef, no-console, no-var, vars-on-top, no-use-before-define*/

const price = 50;
const discount = 17;
if (price === 50) {
  const total = price - discount;
  console.log(total);
}
//2. Declare a variable which will appear in global object.
const userTemperature = 96.8;
console.log(userTemperature);
//3. Declare two variables which will be same-names but contain different values.
let age;
const userAge = 21;
function AgeValidator() {
  const userAge = 17;
  age = userAge < 18 ? 'Forbidden to vote' : 'Allowed to vote';
  console.log(age);
}
AgeValidator();
const a = 4; {
  const a = 5;
}
//4. Declare a variable with hoisting.
console.log(minTemperaturePrague);
var minTemperaturePrague;
