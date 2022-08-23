/* 
Array with three stations.
Each station has three properties: name, capacity, type.
*/


/*
We want to feed the correct stations (capacity >= 20, type = school || commounity center) into an array for correct stations
let goodStations = [];
*/

/* 
This function should cycle through the array
property by index: type = stations[x][2], capacity = stations[x][1]
conditional of sufficing both type && capacity 
gets printed to the goodStations array
chooseStations will print goodStations
*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(array) {
  const goodStations = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] >= 20) {
      if (array[i][2] === 'school' || array[i][2] === 'community centre') {
        goodStations.push(`${array[i][0]}`);
      }
    } 
  }
  return goodStations;
}
console.log(chooseStations(stations));

