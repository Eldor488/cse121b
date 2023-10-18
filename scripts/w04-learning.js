const array = [1, 2, 3];

array.forEach(function(number) {
    console.log(number);
});

console.log("Finished");

function calculate(number1, number2, result) {
    result(number1 + number2);
    console.log(`The result is ${result}`);
}

function displayResult(num) {
    console.log(result);
}