/*eslint-disable no-console, func-names*/
//1. Implement `getGreetNameByField` which will return function which will return object value by provided field.

const user = {
  name: 'Test',
  surname: 'Testing',
};

function greetUser(user, func) { // getNameFunc - function that takes any parameter
  return `I am happy to see you ${func(user)}`; //= getGreetNameByField('name')(user);
}

/**
 * @param field - key in object
 */
const getGreetNameByField = (field) => {
  return function (userObject) {
    return userObject[field];
  };
};

//wrap in console log to check
console.log(greetUser(user, getGreetNameByField('name'))); // I am happy to see you Test
console.log(greetUser(user, getGreetNameByField('surname'))); // I am happy to see you Testing
console.log(greetUser(user, getGreetNameByField('nickname'))); //'
