/*eslint-disable no-console, prefer-template*/
//1. Get `100` using `+` operator and numeric value `10`.
const myVariable = 10 + '0';
console.log(myVariable);
//2. You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.

const amazonGeneralRevenue = 'Amazon annual revenue of US$232.887 billion';
const revenue = parseFloat(amazonGeneralRevenue.match(/([\d.]+)\s+/));
console.log(revenue);

function calculateIncome(number) {
  return number / 12;
}
console.log(calculateIncome(revenue));

//3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.
let userLogins = 0;
function countUserLogins() {
  return `Number of users logged in the system: ${++userLogins} and users tried to log in: ${++userLogins}`;
}
console.log(countUserLogins(userLogins));
