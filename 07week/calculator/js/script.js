'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value += "-";
}

function multiplication() {
  document.querySelector("#results").value += "*";
}

function division() {
  document.querySelector("#results").value += "/";
}

function makeNegative(addNumber) {
 document.querySelector("#results").value += "*-1";
  equals();
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

// function removeZero (str) {
//   var good= ''
//   for(let i = 0; i < str.length; i++) {
//   if(str[i])
//   }
// }

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
});
