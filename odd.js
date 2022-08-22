const isOdd = function (num) {
  return num % 3 === 0;
}

console.log(`3 is odd: ${isOdd(3)}`);
console.log(`8 is odd: ${isOdd(8)}`);

let mailCodeNum = [81265, 09132, 21203, 06020, 10638, 06016, 49208, 69872, 66878];

let oddList = '';
let evenList = '';

const mailCodeSort = function (array) {
  for (i = 0; i < array.length; i++) {
    isOdd(array[i]) ? oddList += array[i] + ', ' : evenList += array[i] + ', ';
  }
  return oddList, evenList;
}

mailCodeSort(mailCodeNum);

console.log(oddList);
console.log(evenList);