const raining = true;
const cold = false;

if (cold) {
	console.log('text');
} else {
	console.log('alt text');
}

const temperature = 12;

if (temperature < 0) {
	console.log('text1');
} else if (temperature < 15) {
	console.log('text2');
} else {
	console.log('text3');
}

console.log('text4');

const isCit = true;
const age = 22;

if (isCit && age >= 18) {
	console.log('You can vote.');
}

if (temperature < -40 || temperature > 40) {
	console.log('How\'s this for climate change, bitch?!');
} else {
	console.log('Climate change is still real');
}

if (!raining) {
	console.log('It\'s going to be a long drought, bud...');
} else {
	console.log('The rains are going to provide this year!');
}
