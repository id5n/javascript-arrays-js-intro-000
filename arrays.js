var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element) {
  var firstArray = [1];
  var newArray = [element, ...firstArray];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  // var firstArray = [element, 1];
  var beginningArray = [1];

  beginningArray = [firstArray.unshift(element), 1];
  return firstArray;
}
