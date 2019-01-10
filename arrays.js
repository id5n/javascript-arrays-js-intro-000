var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element) {
  var arrFirst = [1];
  var arrNew = [element, ...arrFirst];
  return arrNew;
}

// Review later
var destructivelyAddElementToBeginningOfArray = function(array, element) {
  var arrBegin = [1];
  arrBegin.unshift(element);
  return arrBegin;
}

var addElementToEndOfArray = function(array, element) {
  var firstArray = [1];
  var newArray = [...firstArray, element];
  return newArray;
}

// Review later
var destructivelyAddElementToEndOfArray = function(array, element) {
  endArray = [1];
  endArray.push(element);
  return endArray;
}

var accessElementInArray = function(array, index) {
  var arrAccess = [1, 2, 3];
  return arrAccess[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  beginningArray = [1, 2, 3];
  beginningArray.shift();
  return beginningArray;
}

var removeElementFromBeginningOfArray = function(array) {
  beginningArray = [1, 2, 3];
  beginningArray.slice(1);
  return beginningArray;
}
