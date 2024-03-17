let characterData;

function fetchCharacter() {
    // Fetch data from API
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
            // Filter characters with images
            const charactersWithImages = data.filter(character => character.image);
            // Choose a random character from the filtered list
            characterData = charactersWithImages[Math.floor(Math.random() * charactersWithImages.length)];
            // Call startGame() after fetching and setting the character data
            startGame();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function startGame() {
    const profile = document.getElementById('profile');
    profile.innerHTML = ''; // Clear previous content

    const playAgainButton = document.getElementById('play-again-button');
    playAgainButton.style.display = 'none';

    // Display the Guess_Who.png image
    const guessWhoImage = document.createElement('img');
    guessWhoImage.src = 'Guess_Who.png';
    guessWhoImage.alt = 'Guess Who Image';
    profile.appendChild(guessWhoImage);

    // Create elements for hints
    const hints = document.createElement('div');
    hints.classList.add('hints');
    if (characterData) {
        if (characterData.gender !== null) {
            const genderHint = document.createElement('p');
            genderHint.textContent = `Gender: ${characterData.gender}`;
            hints.appendChild(genderHint);
        }
        if (characterData.house !== null) {
            const houseHint = document.createElement('p');
            houseHint.textContent = `House: ${characterData.house}`;
            hints.appendChild(houseHint);
        }
        if (characterData.eyeColour !== null) {
            const eyeColourHint = document.createElement('p');
            eyeColourHint.textContent = `Eye Colour: ${characterData.eyeColour}`;
            hints.appendChild(eyeColourHint);
        }
        if (characterData.hogwartsStudent !== null && characterData.hogwartsStudent) {
            const hogwartsStudentHint = document.createElement('p');
            hogwartsStudentHint.textContent = 'Hogwarts Student';
            hints.appendChild(hogwartsStudentHint);
        }
        if (characterData.hogwartsStaff && characterData.hogwartsStaff !== null) {
            const hogwartsStaffHint = document.createElement('p');
            hogwartsStaffHint.textContent = 'Hogwarts Staff';
            hints.appendChild(hogwartsStaffHint);
        }
        if (characterData.wand !== null) {
            const wandHint = document.createElement('p');
            wandHint.textContent = `Wand: Wood - ${characterData.wand.wood}, Core - ${characterData.wand.core}, Length - ${characterData.wand.length}`;
            hints.appendChild(wandHint);
        }
        if (characterData.patronus !== null) {
            const patronusHint = document.createElement('p');
            patronusHint.textContent = `Patronus: ${characterData.patronus}`;
            hints.appendChild(patronusHint);
        }
    }
    profile.appendChild(hints);

    const revealButton = document.getElementById('reveal-button');
    revealButton.style.display = 'block';

    playAgainButton.style.display = 'none';

}

function revealCharacter() {
    const profile = document.getElementById('profile');
    // Clear previous content - No longer needed because we're replacing the content below
    profile.innerHTML = ''; // Clear previous content
    // Show character image
    if (characterData && characterData.image) {
        const characterImage = document.createElement('img');
        characterImage.src = characterData.image;
        characterImage.alt = characterData.name;
        profile.appendChild(characterImage);
    }
    // Show character details
    if (characterData) {
        const details = document.createElement('div');
        details.classList.add('character-details');

        if (characterData.name) {
            const name = document.createElement('p');
            name.textContent = `Name: ${characterData.name}`;
            details.appendChild(name);
        }
        if (characterData.alternate_names && characterData.alternate_names.length > 0) {
            const alternateNames = document.createElement('p');
            alternateNames.textContent = `Alternate Names: ${characterData.alternate_names.join(', ')}`;
            details.appendChild(alternateNames);
        }
        if (characterData.alive !== undefined) {
            const aliveStatus = document.createElement('p');
            aliveStatus.textContent = characterData.alive ? 'Alive' : 'Deceased';
            details.appendChild(aliveStatus);
        }
        if (characterData.actor) {
            const actor = document.createElement('p');
            actor.textContent = `Portrayed by: ${characterData.actor}`;
            details.appendChild(actor);
        }
        profile.appendChild(details);

        // Show Play Again button
        const playAgainButton = document.getElementById('play-again-button');
        playAgainButton.style.display = 'block';

        const revealButton = document.getElementById('reveal-button');
        revealButton.style.display = 'none';
    }
}

