/*eslint-disable no-console*/
//1. Create object and iterate through it logging pairs `key` : `value`.
const person = {
  gender: 'male',
  age: 27
};
const entries = Object.entries(person);
console.log(entries);

const arrayToFilter = Array.from(new Array(100), () => {
  const randomValue = Math.random();
  const isNumericValue = randomValue >= 0.21;

  if (isNumericValue) {
    return Math.floor(Math.random() * 10);
  }

  if (randomValue < 0.07) {
    return NaN;
  }

  if (randomValue > 0.07 && randomValue < 0.17) {
    return undefined;
  }

  return null;
});
console.log(arrayToFilter);

//2. Filter array `arrayToFilter` from non numeric values and `NaN`.
const results = arrayToFilter.filter(value => typeof value === 'number' && !isNaN(value));
console.log(results);

//3. Make while loop until sum of randomly generated values will be greater than `200` and save amount of iterations.
function sum(array) {
  let total =  0;
  let i = 0;
  while (total < 200) {
    const value = array[i];
    i++;
    if (isNaN(value)) {
      continue;
    }
    total += Number(value);
    console.log(total, i);
  }
}
sum(arrayToFilter);

function sumRandomValue() {
  let total =  0;
  let i = 0;
  while (total < 200) {
    total += Number(Math.random());
    i++;
    console.log(total, i);
  }
}
sumRandomValue();
