const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const north = [0, 1];
const east = [1, 0];
const south = [0, -1];
const west = [-1, 0];

/*
each movement indicating string (e.g. 'north') is linked to an array for movement (e.g. north = [0, 1])
movement array needs to be added to current position array
movement array - m-array-x[0], m-array-y[1]
current position array: c-array[0] += m-array[0]; c-array[1] += m-array[1]
store the new thing into new current array
*/

let currentPosition = [0, 0];
console.log(currentPosition[0] + north[0],
  currentPosition[1] + north[1]);
*/

const finalPosition = function (array) {
  // Start with the initial position of parade
  let currentPosition = [0, 0];
  // Need to iterate through each movement operation
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'north') {
        currentPosition[0] += north[0];
        currentPosition[1] += north[1];
    }
    if (array[i] === 'east') {
        currentPosition[0] += east[0];
        currentPosition[1] += east[1];
    }
    if (array[i] === 'south') {
        currentPosition[0] += south[0];
        currentPosition[1] += south[1];
    }
    if (array[i] === 'west') {
        currentPosition[0] += west[0];
        currentPosition[1] += west[1];
    }
  }
  return currentPosition;
}

finalPosition(moves);
console.log(finalPosition(moves));