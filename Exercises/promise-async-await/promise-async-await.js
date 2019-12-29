/*eslint-disable no-console*/
//Tasks:
//1. Make function which will return promise which will resolve in passed to function amount of milliseconds.
const util = require('util');

function callFunction(func, ms) {
  return new Promise(resolve => {
    console.log('Start: ');
    setTimeout(() => {
      console.log('End: ');
      try {
        resolve(func);
      } catch (error) {
        console.log(error);
      }
    }, ms);
  });
}
const fakeAjax = async () => {
  const random = Math.random();
  console.log(random);
  if (random > 0.5) {
    return { status: 200 };
  }

  throw new Error('Server error!');
};
//2. Using `fakeAjax` do 3 parallel requests.
//3. Catch errors but only for failed executions.
const firstPromise = util.promisify(fakeAjax);
const secondPromise = util.promisify(fakeAjax);
const thirdPromise = util.promisify(fakeAjax);

async function finalResults() {
  await Promise.all([firstPromise(), secondPromise(), thirdPromise()]).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
}
finalResults();

//4. Call `fakeAjax` do 3 request in serial.
//5. Using your `delay` function from first task add delay between each serial request.
async function serialFlow() {
  for (let i = 1; i < 4; i++) {
    const result = await callFunction(fakeAjax(), i * 1000)
      .catch(error => {
        console.log(error);
      });
    console.log(result);
  }
}
serialFlow();
