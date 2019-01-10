var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element) {
  var firstArray = [1];
  var newArray = [element, ...firstArray];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {

  beginningArray = [1];

  beginningArray.unshift(element);


  return beginningArray;
}


var addElementToEndOfArray = function(array, element) {
  var firstArray = [1];
  var newArray = [...firstArray, element];
  return newArray;
}


var destructivelyAddElementToEndOfArray = function(array, element) {

  endArray = [1];

  endArray.unshift(element);


  return endArray;
}
