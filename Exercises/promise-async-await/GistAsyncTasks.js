/*eslint-disable no-console, no-return-await, prefer-template, func-names, prefer-spread, prefer-arrow-callback */
//Task 1: https://gist.github.com/Mike-Savin/53fa52913e48d4f80b8ee3c4ceb4c4ff
//Rewrite this Node.js code written in callbacks using promises. Then rewrite it using async/await.
//Use utils.promisify() to promisify fs methods. You need to run the code in Node.js environment.
const util = require('util');
const fs = require('fs');

const dataDirectory = '/Users/olhapokolenko/Projects/JS/TestFolder/';

const readdir = util.promisify(fs.readdir); //to create a separate flow/task for the operation
const readFile = util.promisify(fs.readFile); //function: const readFile = function - declaring it/not calling

readdir(dataDirectory).then(files => {
  const promises = files.map(file => readFile(dataDirectory + file, 'utf8'));//collection of promises
  return Promise.all(promises);
})
  .then(fileContent => {
    console.log(fileContent);
  })
  .catch(error => {
    console.log('Error', error);
  });

//another implementation with callbacks (task)
fs.readdir(dataDirectory, (error, files) => {
  if (error) {
    console.log(error);
    return;
  }
  files.forEach(file => {
    console.log(file);
    fs.readFile(dataDirectory + file, 'utf8', (error, fileContent) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(fileContent);
    });
  });
});

//Task 2
//Rewrite code with promises with async/await syntax. The code should be tested in browser (jsbin/developer console).
async function showHouseNames() {
  const winterfellUrl = 'https://anapioficeandfire.com/api/houses/362';
  const response = await fetch(winterfellUrl);
  const json = await response.json();
  console.log(json.name);
  const cadetBranches = await Promise.all(json.cadetBranches.map(async (url) => {
    const result = await fetch(url);
    return await result.json(); //stores 2 jsons with house 170 and 215
  }));
  console.log(cadetBranches.map(res => res.name));
}
showHouseNames().catch(alert);

// for results = await Promises.all(promises);
// const results2 = [];
// for (let url of json.cadetBranches) {
//   const response = await fetch(url);
//   const json = await response.json();
//   results2.push(json)
// }

//another implementation (task)
const winterfellUrl = 'https://anapioficeandfire.com/api/houses/362';

fetch(winterfellUrl)
  .then(response => response.json())
  .then(json => {
    console.log(json.name);
    return Promise.all(json.cadetBranches.map(url => {
      return fetch(url).then(res => res.json());
    }));
  })
  .then(responses => {
    console.log(responses.map(res => res.name));
  })
  .catch(error => {
    console.log('Error happened:', error);
  });

//Task 3
//Using fetch in browser, get the first Game of Thrones book by this url: https://anapioficeandfire.com/api/books/1
//Then log the main book data like name, number of pages, release date and author.
//Then you need use characters property to get the names of first 10 characters of the book

async function getBookDetails() {
  const gamesThrones = 'https://anapioficeandfire.com/api/books/1';
  const response = await fetch(gamesThrones);
  const json = await response.json();
  console.log(json.name, json.numberOfPages, json.released, json.authors);
  const characters = await Promise.all(json.characters.slice(0, 10).map(async (url) => {
    const result = await fetch(url);
    return await result.json();
  }));
  console.log(characters.map(res => res.name));
}
getBookDetails().catch(alert);

//request all the characters one by one consequently

async function getBookDetails2() {
  const gamesThrones = 'https://anapioficeandfire.com/api/books/1';
  const response = await fetch(gamesThrones);
  const json = await response.json();
  console.log(json.name, json.numberOfPages, json.released, json.authors);
  for (const name of json.characters.slice(0, 10)) {
    const result = await fetch(name);
    const json1 = await result.json();
    console.log(json1.name);
  }
}
getBookDetails2().catch(alert);

//request all the character names with chunks by 2 (character 1 and 2 are loaded in parallel,
// then 3 and 4 should be loaded in parallel and so on)

async function printNames(array) {
  const results = await Promise.all(array.map(async (url) => {
    const resultPromise = await fetch(url);
    return await resultPromise.json();
  }));
  console.log(results.map(res => res.name));
}
async function splitArray() {
  const gamesThrones = 'https://anapioficeandfire.com/api/books/1';
  const response = await fetch(gamesThrones);
  const json = await response.json();
  const firstArray = json.characters.slice(0, 2);
  const secondArray = json.characters.slice(3, 5);
  printNames(firstArray);
  printNames(secondArray);
}
splitArray();

//Task 4
//Using example code below define a validation error class.
//Then write a promise with catch block which handles only validation errors. Any other errors should not be handled.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

async function handleError() {
  throw new ValidationError('Whoops!');
}
handleError().catch(error => {
  if (error instanceof ValidationError) {
    console.log('Error handled: ' + error.message);
  } else {
    throw error;
  }
});
//class examples

async function load() {
  const winterfellUrl = 'https://anapioficeandfire.com/api/houses/362';
  const response = await fetch(winterfellUrl);
  const json = await response.json();
  // const promises = json.swornMembers.map(async url => {
  // const response = await fetch(url);
  //   const json = await response.json();
  //   return json;
  // });
  // const results = await Promise.all(promises);
  // const results2 = [];
  // for (let url of json.swornMembers) {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   results2.push(json);
  //}
  const splitByChunks = function (array, chunkSize) {
    return [].concat.apply([], array.map(function (elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    }));
  };
  let results3 = [];

  for (const chunk of splitByChunks(json.swornMembers.slice(0, 10), 2)) {
    const promises = chunk.map(async url => {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    });
    const chunkResults = await Promise.all(promises);
    results3 = results3.concat(chunkResults);
  }
  console.log(results3.map(result => result.name));
}
load().catch(error => console.log(error.message));
