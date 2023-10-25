import { fetchSuperhero, fetchSuperheroList } from './apiHandler.js';
import { displaySuperheroData, displayErrorMessage, displaySuperheroList } from './displayHandler.js';

// Function to fetch and display a single superhero based on ID
function getAndDisplaySuperhero(superheroId) {
    fetchSuperhero(superheroId)
        .then(data => {
            displaySuperheroData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayErrorMessage('Failed to fetch superhero data.');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    // Check for the search button to fetch and display a single superhero
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const superheroId = document.getElementById('superhero-search').value;
            if (superheroId) {
                getAndDisplaySuperhero(superheroId);
            } else {
                displayErrorMessage('Please enter a superhero ID.');
            }
        });
    }

    // If the current page is superheroList.html, fetch and display the list of superheroes
    
});
