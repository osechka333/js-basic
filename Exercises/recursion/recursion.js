/*eslint-disable no-console*/
//1. Make a function which will flat passed array i. e. : ``[1, [2, 3], [4, [5]]]` ->  [1, 2, 3, 4, 5]
function updateArray(object) {
  if (!Array.isArray(object)) {
    return object;
  }
  let results = [];
  object.forEach((element) => {
    results = results.concat(updateArray(element));
  });
  return results;
}
console.log(updateArray([1, [2, 3], [4, [5]]]));
