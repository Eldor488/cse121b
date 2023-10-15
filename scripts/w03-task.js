/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2) {
    return number1 + number2;
}
function addNumbers(){
    let addNumbers1 = Number(document.querySelector("#add1").value);
    let addNumbers2 = Number(document.querySelector("#add2").value);
    return document.querySelector("#sum").value = add(addNumbers1,addNumbers2);   
}
document.querySelector("#addNumbers").addEventListener("click",addNumbers);
/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number2 - number1;
}
function subtractNumbers() {
    let subtractNumbers1 = Number(document.querySelector("#subtract1").value);
    let subtractNumbers2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumbers1,subtractNumbers2);
}
document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (number1,number2) =>
{
    return number1 * number2;
}
let multiplyNumbers = () =>
{
    let multiplyNumbers1 = Number(document.querySelector("#factor1").value);
    let multiplyNumbers2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumbers1,multiplyNumbers2);
}
document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers);
/* Open Function Use - Divide Numbers */
let divide = (number1,number2) =>
{
    return number2 / number1;
}
let divideNumbers = (number1,number2) => 
{
    let dividedNumber1 = Number(document.querySelector("#dividend").value);
    let dividedNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector('#quotient').value = divide(dividedNumber1,dividedNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click",divideNumbers);

/* Decision Structure */
let date1 = new Date();
let currentDate = date1.getFullYear();
document.querySelector("#year").innerHTML = currentDate;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter(n => n/2);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter(x => x % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = Number(numbers.reduce(add,0));
/* Output Multiplied by 2 Array */
let multiplied = numbers.map(x => (x) *2);
document.querySelector("#multiplied").innerHTML = multiplied;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = Number(multipliedNumbers.reduce(add,0));
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;

function validateInput(input) {
    // Remove non-numeric characters using a regular expression
    input.value = input.value.replace(/[^0-9]/g, '');} 