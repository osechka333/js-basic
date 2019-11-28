//1. Create a function - predicate which will return `true` if passed element present in array and `false` - if not.
function predicate(array, element) {
  return array.includes(element);
}
//console.log(predicate([91, 90, 89], 89));
//2. Create a function which will check that all array elements are even.
const areAllEven = array => array.every(element => element % 2 === 0);
//console.log(areAllEven([17, 22, 16]));

//another implementation with find
function checkEvenDigits(array, element) {
  if (array.find(element => element % 2 !== 0)) {
    return false;
  }
  return true;
}
//console.log(checkEvenDigits([2, 22, 16]));
//3. Create a function which will check that passed parameter is `array`;
function checkArray(obj) {
  return Array.isArray(obj);
}
//console.log(checkArray('string'));
//4. Create a function which will take `array`, `indexToInsert`, `element` and will insert passed element to provided index in array.
function addElementToArray(array, index, element) {
  array.splice(index, 1, element);
  return array;
}
//console.log(addElementToArray([1, 2, 3, 4, 5, 6], 3, 100));
