/* W05: Programming Tasks */

/* Declare and initialize global variables */


let templesList = [];

/* async displayTemples Function */
function  displayTemples (temples)  {
    let templesElement = document.querySelector('#temples');
    temples.forEach(temple => {
        const article = document.createElement('article');
        const templeName = document.createElement('h3');
        templeName.innerHTML = temple.templeName;
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;
        article.appendChild(templeName);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    });
   
}




/* async getTemples Function using fetch()*/
getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    const data = await response.json();
    templesList = data;
    displayTemples(templesList);

}

/* reset Function */
function reset () {
    console.log("RESET");
    document.getElementById('temples').innerHTML = "";
}

// Call the reset function




// Should log the actual HTML element, not null or undefined


/* sortBy Function */

function sortBy(temples) {
    reset();
    const compareDate = new Date(1950, 0, 1);
    let filter = document.querySelector('#sortBy').value;
    console.log("sortBy function called with filter:", filter);
    let currTemples;
    switch (filter) {
        case 'utah':

            currTemples = temples.filter(function(temple) {return temple.location.includes('Utah')})
            displayTemples(currTemples);
            console.log(currTemples);
            break;
        case 'notutah':
            currTemples = temples.filter(function(temple) {return !temple.location.includes('Utah')})
            displayTemples(currTemples);
            console.log(currTemples);
            break;
        case 'older':
            displayTemples(temples.filter(function(temple)  {
                const templeDate = new Date(temple.dedicated.split(', ').reverse().join('-'));
                console.log(temples);
                return templeDate < compareDate;}));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
    }
};

/* Event Listener */

document.querySelector('#sortBy').addEventListener('change', function() {
    sortBy(templesList)
});

getTemples();