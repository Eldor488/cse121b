export const fetchSuperheroData = (id, callback, errorCallback) => {
    fetch(`https://hero-cors-bridge-22c75d718e5f.herokuapp.com/https://superheroapi.com/api/6505858966191130/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.response && data.response === "error") {
                errorCallback('Invalid superhero ID or data not available.');
                return;
            }
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            errorCallback('Failed to fetch superhero data.');
        });
};

