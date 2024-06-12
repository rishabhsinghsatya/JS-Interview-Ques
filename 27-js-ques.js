//sayHi is a function that, when called, returns the result of an immediately invoked function expression (IIFE).
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
