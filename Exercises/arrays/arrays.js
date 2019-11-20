//1. Make a function which will generate array with random length and random values.
function generateArray() {
  const arrayRandom = Math.floor(Math.random() * 100);
  const arrayValues = new Array(arrayRandom);
  for (let i = 0; i < arrayValues.length; i++) {
    arrayValues[i] = Math.floor(Math.random() * 10);
  }
  return arrayValues;
}
//another implementation with Array.from
function generatedArray() {
  return Array.from(new Array(Math.floor(Math.random() * 100)), () => Math.floor(Math.random() * 100));
}

//console.log(generatedArray());
//2. Make a function which will take array and return copy of it.
function arrayCopy(array) {
  return [...array];
}
//console.log(arrayCopy([1,2]));
//3. Make a function which will take array and element and return a index of element in array.
function array(arr, element) {
  return arr.indexOf(element) === -1 ? 'Element is not found' : arr.indexOf(element);
}
//console.log(array([1,2,3], 2));
//4. Make function which will take two arrays and return association of them.
function associationArray(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayOne);
}
//console.log(associationArray([1, 7],[2, 4]));
//5. Make function that will change element in array by index using reference, and other one - pure function.
function pureArray(array, index) {
  const newArray = [...array];
  newArray[index] = Math.floor(Math.random() * 10); //or use splice for bigger index or non-existing index in the array
  return newArray;
}
//console.log(pureArray([17,3,12,3,1],1));

function changeArray(array, index) {
  array.splice(index, 1, Math.floor(Math.random() * 10));
  return array;
}
//console.log(changeArray([17,3,12,3,1],1));
