// Function to fetch details of a specific breed
function fetchBreedDetails(breedName) {
    // Construct the URL for fetching breed details
    const url = `https://dog.ceo/api/breed/${breedName}/images/random`;

    // Fetch breed details from the API
    fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response to JSON format
            return response.json();
        })
        .then(data => {
            // Display breed details
            displayBreedDetails(breedName, data);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch request
            console.error('Error fetching breed details:', error);
        });
}

// Function to display breed details
function displayBreedDetails(breedName, imageData) {
    // Check if image data is available
    if (imageData && imageData.status === 'success') {
        // Get the URL of the image
        const imageUrl = imageData.message;
        // Log breed details to console
        console.log(`Breed: ${breedName}`);
        console.log(`Image URL: ${imageUrl}`);
    } else {
        // Log error message if image data is not available
        console.error('Unable to fetch image for breed:', breedName);
    }
}

// Test output
const testBreed = 'labrador'; // Replace with the breed you want to test
fetchBreedDetails(testBreed);
