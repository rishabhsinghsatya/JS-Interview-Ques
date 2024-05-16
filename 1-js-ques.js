function showData() {
  console.log("Variable name is:", name); //Variable name is: undefined
  console.log("Variable name is:", age); //ReferenceError: Cannot access 'age' before initialization
  var name = "john doe";
  let age = 50;
}

//var name and let age declarations are hoisted to the top of the function scope.
//However, only the declaration of var name is hoisted, not its initialization (name = "john doe"). So, when you try to log name before its initialization, it will output undefined.
//For let age, both declaration and initialization happen in the same statement, so age remains uninitialized until that line is executed. Accessing age before its initialization will result in a ReferenceError.
