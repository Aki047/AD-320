// Wait for the webpage content to fully load before running any JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and the list where dog groups will be displayed
    const randomButton = document.getElementById('random-btn');
    const groupsButton = document.getElementById('groups-btn');
    const groupsList = document.getElementById('groups-list');

    // Add an event listener to the random button
    randomButton.addEventListener('click', function() {
        // Fetch some cool dog facts from the internet
        fetch('https://dogapi.dog/api/v2/facts')
            .then(response => {
                // Check if the response from the server is good
                if (!response.ok) {
                    throw new Error('Oops! There was a problem fetching the dog facts: ' + response.statusText);
                }
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                // Find the spot on the webpage where we want to put the facts
                const breedFact = document.getElementById('breed-fact');
                breedFact.innerHTML = ''; // Clear out any old facts
                // If we got some cool facts...
                if (data && data.data && data.data.length > 0) {
                    // Pick a random fact to display
                    const randomIndex = Math.floor(Math.random() * data.data.length);
                    // Show the random fact on the webpage
                    breedFact.textContent = data.data[randomIndex].attributes.body;
                } else {
                    // If there are no facts available, let the user know
                    breedFact.textContent = 'Sorry, no facts available right now!';
                }
            })
            .catch(error => console.error(error)); // Uh-oh! Something went wrong, let's log the error
    });

    // Add an event listener to the groups button
    groupsButton.addEventListener('click', function() {
        // Fetch information about dog groups from the internet
        fetch('https://dogapi.dog/api/v2/groups')
            .then(response => {
                // Check if we got a good response from the server
                if (!response.ok) {
                    throw new Error('Oops! There was a problem fetching the dog groups: ' + response.statusText);
                }
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                // Clear out any old dog groups from the webpage
                groupsList.innerHTML = '';
                if (data && data.data && data.data.length > 0) {
                    // Loop through each group and display its name
                    data.data.forEach(group => {
                        const li = document.createElement('li');
                        li.textContent = `Group Name: ${group.attributes.name}`;
                        groupsList.appendChild(li);
                    });
                } else {
                    // If there are no groups available, let the user know
                    groupsList.innerHTML = '<li>Sorry, no dog groups available right now!</li>';
                }
            })
            .catch(error => console.error(error)); // Oops! Something went wrong, let's log the error
    });
});

