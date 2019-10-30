/*eslint func-names: ["error", "never"]*/
/*eslint-disable no-console*/
//1. Create a function declaration, function expression, lambda function, and using function object.
//function declaration
function getName(obj) {
  return obj.name || 'Anonymus';
}
console.log(getName({ name: 'Olha' }));

//function expression
const getMainName = function (obj) {
  return (obj && obj.name) || 'Anonymus';
};
console.log(getMainName({ name: 'Michael' }));

//lamda function and using function object
const getObjName = obj => (obj && obj.name) || 'Anonymus';
console.log(getObjName({ name: '' }));

//2. Get parameters amount of function `takeMyParametersAmount`.
function takeMyParametersAmount(a, b, c) {
  return a + b + c;
}
console.log(takeMyParametersAmount(17, 1, 1));

//3. Create a function and log all passed parameters to it. Check the `length` of this function.

const arr = [5, 8, 3, 4, 17, 19, 100];
const func = arr.sort((a, b) => a - b);
console.log(func);
console.log(func.length);

//4. Using anonymous function encapsulate function body from global scope.
const results = function () {
  function inside(x) {
    return x * 100;
  }
  return inside;
};
console.log(results()(4));
