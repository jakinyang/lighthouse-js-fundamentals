let rangeArr = [];
const range = function (start, end, step) {
  let fullArr = [];
  let newArr =[];
  for (let i = start; i <= end; i++) {
    fullArr.push(i);
  }

  for (let z = 0; z < fullArr.length; z++) {
    if(step >= 0) {
      if (fullArr[z] % step === 0) {
      newArr.push(fullArr[z]);
      }
    }  
  }
  return newArr;
}

console.log(range(10, 100, 2));
// console.log(rangeArr);
console.log(range(0, 10, 2));
console.log(range(10, 30, -5));
console.log(range());