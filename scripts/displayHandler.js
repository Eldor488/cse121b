// const updateElementText = (elementId, text) => {
//     document.getElementById(elementId).innerText = text;
// };

// const updateElementHTML = (elementId, html) => {
//     document.getElementById(elementId).innerHTML = html;
// };

// const updateElementSrc = (elementId, src) => {
//     const element = document.getElementById(elementId);
//     element.src = src;
//     element.style.display = 'block';
// };

// export const displaySuperheroData = (data) => {
//     // Biography section
//     updateElementText('full-name', data.biography['full-name']);
//     updateElementText('alter-egos', data.biography['alter-egos']);
//     updateElementText('aliases', data.biography['aliases']);
//     updateElementText('place-of-birth', data.biography['place-of-birth']);
//     updateElementText('first-appearance', data.biography['first-appearance']);
//     updateElementText('publisher', data.biography['publisher']);
//     updateElementText('alignment', data.biography['alignment']);

//     // Power stats section
//     updateElementText('intelligence', data.powerstats.intelligence);
//     updateElementText('strength', data.powerstats.strength);
//     updateElementText('speed', data.powerstats.speed);
//     updateElementText('durability', data.powerstats.durability);
//     updateElementText('power', data.powerstats.power);
//     updateElementText('combat', data.powerstats.combat);

//     // Appearance section 
//     updateElementHTML('gender', data.appearance.gender);
//     updateElementHTML('race', data.appearance.race);
//     updateElementHTML('height', data.appearance.height.join(' / ')); // Assuming it's an array
//     updateElementHTML('weight', data.appearance.weight.join(' / ')); // Assuming it's an array
//     updateElementHTML('eye-color', data.appearance['eye-color']);
//     updateElementHTML('hair-color', data.appearance['hair-color']);

//     // Work section
//     updateElementHTML('occupation', data.work.occupation);
//     updateElementHTML('base', data.work.base);

//     // Connections section
//     updateElementHTML('group-affiliation', data.connections['group-affiliation']);
//     updateElementHTML('relatives', data.connections.relatives);

//     // Image section
//     updateElementSrc('hero-image', data.image.url);
// };

// export const displayErrorMessage = (message) => {
//     document.getElementById('results').innerText = message;
// };


// displayHandler.js

const updateElementText = (elementId, text) => {
    document.getElementById(elementId).innerText = text;
};

const updateElementHTML = (elementId, html) => {
    document.getElementById(elementId).innerHTML = html;
};

const updateElementSrc = (elementId, src) => {
    const element = document.getElementById(elementId);
    element.src = src;
    element.style.display = 'block';
};

export const displaySuperheroData = (data) => {
    // Define mappings for easier looping
    const biographyMappings = {
        'full-name': data.biography['full-name'],
        'alter-egos': data.biography['alter-egos'],
        'aliases': data.biography['aliases'],
        'place-of-birth': data.biography['place-of-birth'],
        'first-appearance': data.biography['first-appearance'],
        'publisher': data.biography['publisher'],
        'alignment': data.biography['alignment']
    };

    const powerStatsMappings = {
        'intelligence': data.powerstats.intelligence,
        'strength': data.powerstats.strength,
        'speed': data.powerstats.speed,
        'durability': data.powerstats.durability,
        'power': data.powerstats.power,
        'combat': data.powerstats.combat
    };

    // Loop through the mappings and update the text
    for (let id in biographyMappings) {
        updateElementText(id, biographyMappings[id]);
    }

    for (let id in powerStatsMappings) {
        updateElementText(id, powerStatsMappings[id]);
    }

    // Appearance section 
    updateElementHTML('gender', data.appearance.gender);
    updateElementHTML('race', data.appearance.race);
    updateElementHTML('height', data.appearance.height.join(' / ')); // Assuming it's an array
    updateElementHTML('weight', data.appearance.weight.join(' / ')); // Assuming it's an array
    updateElementHTML('eye-color', data.appearance['eye-color']);
    updateElementHTML('hair-color', data.appearance['hair-color']);

    // Work section
    updateElementHTML('occupation', data.work.occupation);
    updateElementHTML('base', data.work.base);

    // Connections section
    updateElementHTML('group-affiliation', data.connections['group-affiliation']);
    updateElementHTML('relatives', data.connections.relatives);

    // Image section
    updateElementSrc('hero-image', data.image.url);
};

export const displayErrorMessage = (message) => {
    document.getElementById('results').innerText = message;
};
