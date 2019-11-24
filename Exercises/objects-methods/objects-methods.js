/*eslint-disable no-console, guard-for-in*/
//1. Make function which will take object and iterate through it's keys and log pairs `key` : `value` using Object' static methods.
const clinic = {
  countryOrigin: 'Denmark',
  type: 'Healthcare',
  workersNumber: 300
};
function iterate(object) {
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}
iterate(clinic);

// another implementation with static method
function iterateWithStatic(object) {
  return Object.entries(object).map(([key, value]) => `${key}: ${object[key]}`);
}
console.log(iterateWithStatic(clinic));
