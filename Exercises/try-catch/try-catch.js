/*eslint-disable no-mixed-operators, no-console*/
//1. Make a function which will throw error with chance 50%.

function randomValues(min, max) {
  const random = Math.floor(min + Math.random() * (max + 1 - min));
  if (random === 0) {
    throw new Error('The number could not contain 0');
  }
  return random;
}
try  {
  console.log(randomValues(0, 1));
} catch (e) {
  console.error(e);
}
// 2. Make function which will execute function above, handle error and increase counter of function execution.
//Counter should save the value on each new function execution.
let counter = 0;
function countRandomValues() {
  try  {
    console.log(randomValues(0, 1));
  } catch (e) {
    console.error(e);
  } finally {
    counter++;
  }
}
countRandomValues(randomValues);
countRandomValues(randomValues);
countRandomValues(randomValues);
countRandomValues(randomValues);
countRandomValues(randomValues);
countRandomValues(randomValues);
console.log(counter);
