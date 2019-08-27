'use strict';

//zad 1
var hello = 'Hello';
var world = 'World';
console.log(hello + ' ' + world);

//zad 2
var multiply = function multiply() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return x * y;
};

//zad 3
var average = function average() {
	for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
		items[_key] = arguments[_key];
	}

	var sum = 0;
	items.forEach(function (item) {
		return sum += argument;
	});
	return sum / items.length;
};

//zad 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//zad 5 
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstNumber = data[0],
    secondNumber = data[1],
    firstName = data[2],
    value = data[3],
    lastName = data[4];

console.log(firstName, lastName);
