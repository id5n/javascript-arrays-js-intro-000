var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element) {
  var firstArray = [1];
  var newArray = [element, ...firstArray];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  
  const beginningArray = [1];

  //beginningArray = [element, 1];
  beginningArray.unshift(element);
  return beginningArray;
}
