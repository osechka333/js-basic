/*eslint-disable no-console, no-use-before-define */
//`codeToMissingComplexityElement` present mapping missing element in complexity of password.
//Implement function `getMissingComplexityElementCode` which will return relevant code of missing complexity element.
//Implement function `getErrorMessage` which will log relevant message on missing element.

const codeToMissingComplexityElement = {
  0: 'length',
  1: 'capital letter',
  2: 'special character',
  3: 'cannot be empty'
};

function getMissingComplexityElementCode(password) {
  if (!password) {
    return getErrorMessage(3);
  }
  if (password.length < 10) {
    return getErrorMessage(0);
  }
  if (password.toLowerCase() === password) {
    return getErrorMessage(1);
  }
  if (!password.match(/\W+/)) {
    return getErrorMessage[2];
  }
  return 'Success';
}
function getErrorMessage(errorCode) {
  switch (errorCode) {
  case 0:
    return 'The password should contain at least 10 symbols';
    //return codeToMissingComplexityElement[0];
  case 1:
    return 'The password should contain at least 1 capital letter';
    //return codeToMissingComplexityElement[1];
  case 2:
    return 'The password should contain at least 1 special letter';
    //return codeToMissingComplexityElement[2];
  case 3:
    return 'The password should not be empty';
    //return codeToMissingComplexityElement[3];
  default:
    return 'Password is incorrect';
  }
}
console.log(getMissingComplexityElementCode('ewrew123Q!'));
