/*eslint-disable no-param-reassign*/
//1. Create a object and using `defineProperty` define not writable property, not enumerable property and not
//  configurable property. (PS: in real programming life I think you will never use it :) just for you to know)
const car = {};
Object.defineProperty(car, 'properties', {
  value: 'mechanical',
  configurable: false,
  enumerable: false,
  writable: false
});
//2. Make a function which will delete object key by reference, and other one - pure function.
const minivan = {
  mark: 'Volkswagen Type 2',
  doors: 6,
  year: 1990,
};
function removeKey(obj, key) {
  delete obj[key];
}
removeKey(minivan, 'doors');

const pure = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};
pure(minivan, 'year');
//3. Pass object values to function using destruction.
const sedan = {
  label: 'Suzuki',
  doors: 4
};
const { label, doors } = sedan;
pure(sedan, 'label');
//console.log(sedan.label)
//4. Add key/value to object using dynamic key value.
const mark = 'name';
const newCar = {
  [mark]: 'Mercedes-Benz',
  year: 2017
};
//console.log(newCar);
//#Additional

//1. Generate array with keys, and array with values. Iterate through arrays and assign key/values to object.
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = ['100', '200', '300'];
const object = {};
const results = Object.assign(object, ...arrayOne.map((n, index) => ({ [n]: arrayTwo[index] })));
//console.log(results);
