var ingredient1 = "breadvar"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) { return [element, ...array]
}
<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) { return [...array, element]} 
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)

  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()

  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()

  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
=======
function de
>>>>>>> f5a986db7467835d29fe82c9f8cc309ebc92ec02
