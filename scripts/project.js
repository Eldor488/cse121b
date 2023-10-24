

const API_URL = "https://superheroapi.com/api/";
const ACCESS_TOKEN = "6505858966191130"; 

const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('superhero-search');

const superheroImage = document.getElementById('superhero-image');
const superheroName = document.getElementById('superhero-name');
const intelligence = document.getElementById('intelligence');
const strength = document.getElementById('strength');
const speed = document.getElementById('speed');
const durability = document.getElementById('durability');
const power = document.getElementById('power');
const combat = document.getElementById('combat');
const fullName = document.getElementById('full-name');
const alterEgos = document.getElementById('alter-egos');
const aliases = document.getElementById('aliases');
const placeOfBirth = document.getElementById('place-of-birth');
const firstAppearance = document.getElementById('first-appearance');
const publisher = document.getElementById('publisher');
const alignment = document.getElementById('alignment');
const gender = document.getElementById('gender');
const race = document.getElementById('race');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const eyeColor = document.getElementById('eye-color');
const hairColor = document.getElementById('hair-color');
const occupation = document.getElementById('occupation');
const base = document.getElementById('base');
const groupAffiliation = document.getElementById('group-affiliation');
const relatives = document.getElementById('relatives');

searchButton.addEventListener('click', function() {
    const superHeroID = searchInput.value.trim();

    if(superHeroID) {
        // Construct the URL
        const searchUrl = `${API_URL}${ACCESS_TOKEN}/${superHeroID}`;

        fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data here
            if(data && data.results && data.results.length > 0) {
                const superheroData = data.results[0];
                
                // Populate the HTML elements with the data
                superheroImage.src = superheroData.image.url;
                superheroName.textContent = superheroData.name;
                intelligence.textContent = superheroData.powerstats.intelligence;
                strength.textContent = superheroData.powerstats.strength;
                speed.textContent = superheroData.powerstats.speed;
                durability.textContent = superheroData.powerstats.durability;
                power.textContent = superheroData.powerstats.power;
                combat.textContent = superheroData.powerstats.combat;
                fullName.textContent = superheroData.biography['full-name'];
                alterEgos.textContent = superheroData.biography['alter-egos'];
                aliases.textContent = superheroData.biography.aliases.join(', ');
                placeOfBirth.textContent = superheroData.biography['place-of-birth'];
                firstAppearance.textContent = superheroData.biography['first-appearance'];
                publisher.textContent = superheroData.biography.publisher;
                alignment.textContent = superheroData.biography.alignment;
                gender.textContent = superheroData.appearance.gender;
                race.textContent = superheroData.appearance.race;
                height.textContent = superheroData.appearance.height.join(' / ');
                weight.textContent = superheroData.appearance.weight.join(' / ');
                eyeColor.textContent = superheroData.appearance['eye-color'];
                hairColor.textContent = superheroData.appearance['hair-color'];
                occupation.textContent = superheroData.work.occupation;
                base.textContent = superheroData.work.base;
                groupAffiliation.textContent = superheroData.connections['group-affiliation'];
                relatives.textContent = superheroData.connections.relatives;

            } else {
                console.log("No results found for the given superhero name.");
            }
        })
        .catch(error => {
            console.error("Error fetching the superhero data:", error);
        });
    } else {
        console.log("Please enter a superhero name to search.");
    }
});
