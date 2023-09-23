/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Enmanuel De los Santos';
let currentYear = new Date().getFullYear()
let profilePicture = 'images/profilePicture.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream"];
foodElement.innerHTML = favoriteFoods; 

let singleFavoriteFood = "Lasagna";

favoriteFoods.push(singleFavoriteFood);

foodElement.innerHTML += '<br>' + favoriteFoods;

favoriteFoods.shift();

foodElement.innerHTML += `<br>` + favoriteFoods;

favoriteFoods.pop();

foodElement.innerHTML += `<br>` + favoriteFoods;



