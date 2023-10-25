document.addEventListener('DOMContentLoaded', function() {

    const updateElementText = (elementId, text) => {
        document.getElementById(elementId).innerText = text;
    };

    const updateElementHTML = (elementId, html) => {
        document.getElementById(elementId).innerHTML = html;
    };

    const displaySuperheroData = (data) => {
        // Biography
        updateElementText('full-name', data.biography['full-name']);
        updateElementText('alter-egos', data.biography['alter-egos']);
        updateElementText('aliases', data.biography['aliases']);
        updateElementText('place-of-birth', data.biography['place-of-birth']);
        updateElementText('first-appearance', data.biography['first-appearance']);
        updateElementText('publisher', data.biography['publisher']);
        updateElementText('alignment', data.biography['alignment']);

        // Power stats
        updateElementText('intelligence', data.powerstats.intelligence);
        updateElementText('strength', data.powerstats.strength);
        updateElementText('speed', data.powerstats.speed);
        updateElementText('durability', data.powerstats.durability);
        updateElementText('power', data.powerstats.power);
        updateElementText('combat', data.powerstats.combat);

        // Appearance
        updateElementHTML('gender', data.appearance.gender);
        updateElementHTML('race', data.appearance.race);
        updateElementHTML('height', data.appearance.height.join(" / "));
        updateElementHTML('weight', data.appearance.weight.join(" / "));
        updateElementHTML('eye-color', data.appearance['eye-color']);
        updateElementHTML('hair-color', data.appearance['hair-color']);

        // Work
        updateElementHTML('occupation', data.work.occupation);
        updateElementHTML('base', data.work.base);

        // Connections
        updateElementHTML('group-affiliation', data.connections['group-affiliation']);
        updateElementHTML('relatives', data.connections.relatives);

        // Image
        document.getElementById('hero-image').src = data.image.url;
        document.getElementById('hero-image').style.display = 'block';
    };

    document.getElementById('search-btn').addEventListener('click', function () {
        let superheroId = document.getElementById('superhero-search').value;
        if (superheroId) {
            fetch(`https://hero-cors-bridge-22c75d718e5f.herokuapp.com/https://superheroapi.com/api/6505858966191130/${superheroId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.response && data.response === "error") {
                        document.getElementById('results').innerText = 'Invalid superhero ID or data not available.';
                        return;
                    }
                    displaySuperheroData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    document.getElementById('results').innerText = 'Failed to fetch superhero data.';
                });
        } else {
            document.getElementById('results').innerText = 'Please enter a superhero ID.';
        }
    });
});
