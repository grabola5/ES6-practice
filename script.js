//zad 1
const hello = 'Hello';
const world = 'World';
console.log(`${hello} ${world}`);

//zad 2
const multiply = (x=1, y=1) => {return x*y};

//zad 3
let average = (...items) => {
	let sum = 0;
	items.forEach(item=>
		sum +=argument);
		return sum/items.length;
	};

//zad 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average (...grades);

//zad 5 
const data = [1, 4, 'Iwona', false, 'Nowak'];
const  [firstNumber, secondNumber, firstName, value, lastName] = data;
console.log(firstName, lastName);