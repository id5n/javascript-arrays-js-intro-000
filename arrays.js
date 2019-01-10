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
  var arrFirst = [1];
  var arrNew = [...arrFirst, element];
  return arrNew;
}

// Review later
var destructivelyAddElementToEndOfArray = function(array, element) {
  var arrEnd = [1];
  arrEnd.push(element);
  return arrEnd;
}

var accessElementInArray = function(array, index) {
  var arrAccess = [1, 2, 3];
  return arrAccess[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  var arrBegin = [1, 2, 3];
  arrBegin.shift();
  return arrBegin;
}

var removeElementFromBeginningOfArray = function(array) {
  arrBegin = [1, 2, 3];
  arrBegin.slice(0);
  return arrBegin;
}
