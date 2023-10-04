let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const startWithB = names.filter((name) => name.charAt(0) === 'B');

const namesLength = names.map((name) => name.length);

const sumedUpLenght = names.reduce((accumulator, currentValue) => {return accumulator + currentValue},  '');

const averageLenght = sumedUpLenght.length / names.length; 
 
console.log(averageLenght); 

// Improved version 

const averageLenght2 = names.reduce((total, name) => total + name.length, 0) / names.length;
