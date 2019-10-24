/*eslint-disable no-console, prefer-template */
//1. Assign string with unicode to a variable.
const unicodeString = '\u{1F60D}';
console.log(unicodeString);
//2. Declare a variable with string with escaped symbols.
const chapterStructure = 'Title \nFamous Author Quote \' and notes \\';
console.log(chapterStructure);
//3. Declare a variable which will contain name of your favourite animal.
const myAnimal = 'Puppy';
//4. Log a message `My favourite animal is ` with dynamic variable from previous task.
console.log(`My favourite animal is ${myAnimal}`);
//5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.
const author = { firstName: 'michael', lastName: 'crichton' };
function paramCapitalized(param) {
  const paramCapitalized = param.charAt(0).toUpperCase() + param.slice(1);
  return paramCapitalized;
}
console.log(paramCapitalized(author.firstName) + ' ' + paramCapitalized(author.lastName));
//6. Declare a function which will receive password string. Check is password strong enough:
// - should contain at least one capital letter;
// - length no less than 8 characters.
// - should contain at least one special character.
const password = 'wA23422ie';
function isPasswordStrong(passwordValue) {
    if (passwordValue.match(/[A-Z]/)
      && passwordValue.length >= 8
      && passwordValue.match(/[\W]/)) {
          return true;
      }
      return false;
}

console.log(isPasswordStrong(password) ? 'Welcome' : 'Your password is not strong! It must be at least 8 characters long with 1 capital letter and a special symbol');

