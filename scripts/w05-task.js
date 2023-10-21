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
    document.article.appendChild(templeName);
    document.article.appendChild(templeImage);
    document.templesElement.appendChild(article);
});}



/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
