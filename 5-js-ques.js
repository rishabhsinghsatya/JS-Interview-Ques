let a = { greeting: "Hi" };

let z = a;
z.greeting = "Bye";
console.log(a.greeting); //Bye

// In JavaScript, objects are assigned and passed by reference. This means that when you assign an object to another variable, both variables refer to the same object in memory. Any changes made to the object through one variable will be reflected when accessed through the other variable.
