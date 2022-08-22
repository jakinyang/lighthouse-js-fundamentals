/*
const sayHello = function () {
  console.log('Hello, world');
}
*/

const sayHello = function (name) {
  console.log(`Hello, ${name}`);
}

sayHello("Caliban");
sayHello('Miranda');
sayHello('ferdinand');

let guestList = ['Ferdinand', 'Miranda', 'Caliban'];

const greetingIter = function(array) {
  let greeting = '';
  for (i = 0; i < array.length; i++) {
    greeting += sayHello(array[i]);
  }
  return greeting;
}

console.log(greetingIter(guestList));

const helloToConsole = function (name) {
    console.log(`Hello, ${name}`);
}

helloToConsole('John');

const returnHello = function(name) {
  return `Hello, ${name}`;
}

const greeting = returnHello('John');
console.log(greeting);

const isEven = function(num) {
  return num % 2 === 0;
}

console.log(isEven(10));