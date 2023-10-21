/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

const templesList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {templesList.forEach(temple => {
    const article = document.createElement('article');
    const templeName = document.createElement('h3');
    templeName.innerHTML = temple.templeName;
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.location;
    // document.article.appendChild(templeName);
    // document.article.appendChild(templeImage);
    // document.templesElement.appendChild(article);
    // These corrections are necessary because 
    // appendChild is a method that should be called on the parent element to 
    // which you want to append a child element. 
    // In your original code, document. would cause errors because document does not have properties named article or templesElement. Instead, you 
    // should use the variables article and templesElement that you have already defined.

});}



/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
