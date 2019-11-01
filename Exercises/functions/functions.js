/*eslint func-names: ["error", "never"], wrap-iife: [2, "inside"]*/
/*eslint-disable no-console, no-new-func*/

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
  return takeMyParametersAmount.length;
}
console.log(takeMyParametersAmount(17, 1, 1));

//3. Create a function and log all passed parameters to it. Check the `length` of this function.

const arr = (...args) => {
  console.log(args, args.length);
};
arr(5, 8, 3, 4, 17, 19, 100);

//4. Using anonymous function encapsulate function body from global scope.
(function (a) { const sum = new Function('a', 'b', 'return a+b'); console.log(sum(1, 3)); })();
