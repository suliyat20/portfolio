// A small program that output my full name in javascript

// arrow function that receives 3 parameters (my first name, my last name and my middle name) and output the correct form as written on my valid documents.
const outputMyName = (firstName, lastName, middleName) =>
  console.log(`I am ${lastName}, ${firstName} ${middleName}`);

outputMyName("Abdulsamad", "Ali", "Tolulope");
//output: I am Ali, Abdulsamad Tolulope
