/* LESSON 3 - Programming Tasks */

/* Profile Object  */ 
const myProfile = {
    name: "Enmanuel",
    photo: '/images/profilePicture.jpg',
    favoriteFoods: ['Pizza', 'Pasta', 'Sushi', 'Tacos'],
    hobbies: ['Reading', 'Video Games', 'Coding', 'Cooking'],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
        {place: "Rexburg", length: "3 months"},
        {place: "Sao Paulo", length: "1 month"},
        {place: "Salvador, Bahia", length: "1 year and 21 months"},
        {place: "Dominican Republic", length: "Whole life"}
    );

console.log(myProfile.placesLived);

myProfile.placesLived.forEach(location => {
    console.log(`Place: ${location.place}, Length: ${location.length}`);
});



/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src= myProfile.photo;
document.getElementById("photo").alt= myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
   const liFood = document.createElement('li');
   
   liFood.innerHTML = food;
    document.getElementById('favorite-foods').appendChild(liFood);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
   const liHobby = document.createElement('li');
   
   liHobby.innerHTML = hobby;
    document.getElementById('hobbies').appendChild(liHobby);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
  const dtPlace = document.createElement('dt');
  const ddLength = document.createElement('dd');
 
   dtPlace.innerHTML = location.place;
   ddLength.innerHTML = location.length;

   document.getElementById('places-lived').appendChild(dtPlace);
  document.getElementById('places-lived').appendChild(ddLength);
});


