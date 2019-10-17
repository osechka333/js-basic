const user = {
  name: 'Test',
  surname: 'Testing',
};

function greetUser(user, getNameFunc) {
  return `I am happy to see you ${getNameFunc(user)}`;
}

/**
 * @param field - name of property in object
 */
const getGreetNameByField = (field) => {
};

//wrap in console log to check
greetUser(user, getGreetNameByField('name')); // I am happy to see you Test
greetUser(user, getGreetNameByField('surname')); // I am happy to see you Testing
greetUser(user, getGreetNameByField('nickname')); //'
