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
  for (i = 0; i < array.length; i++) {
    sayHello(array[i]);
  }
  return 
}

console.log(greetingIter(guestList));