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
    // Biography section
    updateElementText('full-name', data.biography['full-name']);
    updateElementText('alter-egos', data.biography['alter-egos']);
    updateElementText('aliases', data.biography['aliases']);
    updateElementText('place-of-birth', data.biography['place-of-birth']);
    updateElementText('first-appearance', data.biography['first-appearance']);
    updateElementText('publisher', data.biography['publisher']);
    updateElementText('alignment', data.biography['alignment']);

    // Power stats section
    updateElementText('intelligence', data.powerstats.intelligence);
    updateElementText('strength', data.powerstats.strength);
    updateElementText('speed', data.powerstats.speed);
    updateElementText('durability', data.powerstats.durability);
    updateElementText('power', data.powerstats.power);
    updateElementText('combat', data.powerstats.combat);

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


