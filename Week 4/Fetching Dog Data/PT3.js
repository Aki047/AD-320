document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const breedSelect = document.getElementById('breed-select');
    const breedDetailsDiv = document.getElementById('breed-details');

    // Function to fetch details of a specific breed by its ID
    async function fetchBreedDetails(breedId) {
        try {
            // Make a request to the API for the breed details
            const response = await fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`);
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            const data = await response.json();
            // Extract and return the attributes object directly
            return data.data.attributes;
        } catch (error) {
            // Log any errors that occur during fetching
            console.error('Error fetching breed details:', error);
        }
    }

    // Function to display breed details in the HTML
    function displayBreedDetails(breedData) {
        // Update the HTML content with the breed details
        breedDetailsDiv.innerHTML = `
            <h2>${breedData.name}</h2>
            <p><strong>Description:</strong> ${breedData.description}</p>
            <p><strong>Life Span:</strong> ${breedData.life.min}-${breedData.life.max} years</p>
            <p><strong>Weight:</strong> Male: ${breedData.male_weight.min}-${breedData.male_weight.max} kg, Female: ${breedData.female_weight.min}-${breedData.female_weight.max} kg</p>
            <p><strong>Hypoallergenic:</strong> ${breedData.hypoallergenic ? 'Yes' : 'No'}</p>
        `;
    }

    // Function to fetch list of breeds and populate the dropdown
    async function fetchBreedsAndPopulateDropdown() {
        try {
            // Make a request to the API for the list of breeds
            const response = await fetch('https://dogapi.dog/api/v2/breeds');
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            const data = await response.json();
            // Extract the list of breeds
            const breeds = data.data;
            // Populate the dropdown with breed options
            breeds.forEach(breed => {
                const option = document.createElement('option');
                option.value = breed.id;
                option.textContent = breed.attributes.name;
                breedSelect.appendChild(option);
            });
        } catch (error) {
            // Log any errors that occur during fetching
            console.error('Error fetching breeds:', error);
        }
    }

    // Event listener for dropdown change
    breedSelect.addEventListener('change', async () => {
        // Get the selected breed ID from the dropdown
        const selectedBreedId = breedSelect.value;
        // Check if a breed is selected
        if (selectedBreedId) {
            // Fetch details of the selected breed
            const breedDetails = await fetchBreedDetails(selectedBreedId);
            // Display the details of the selected breed
            displayBreedDetails(breedDetails);
        }
    });

    // Initialize breed dropdown on page load
    fetchBreedsAndPopulateDropdown();
});
