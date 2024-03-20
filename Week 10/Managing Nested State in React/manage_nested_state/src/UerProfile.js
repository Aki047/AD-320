// Importing necessary React hooks
import React, { useState } from 'react';

// Defining the UserProfile functional component
const UserProfile = () => {
    // Initializing state with a userProfile object that includes nested address details
    const [userProfile, setUserProfile] = useState({
        name: 'John Doe', // Default name for visualization
        email: 'john@example.com', // Default email for visualization
        address: {
            street: '',
            city: '',
            country: ''
        }
    });

    // Function to update the address in the userProfile state
    // It uses a functional update to ensure immutability of state
    const updateAddress = (street, city, country) => {
        setUserProfile(prevState => ({
            ...prevState, // Spreading the previous state to maintain other properties
            address: { street, city, country } // Updating only the address part
        }));
    };

    // Rendering the component UI
    return (
        <div>
            {/* Input field for the street with an onChange handler
                It updates the userProfile's address maintaining the immutability */}
            <input
                type="text"
                value={userProfile.address.street}
                onChange={e => updateAddress(e.target.value, userProfile.address.city, userProfile.address.country)}
                placeholder="Street"
            />

            {/* Input field for the city with an onChange handler
                Similar to the street input, but updates the city part of the address */}
            <input
                type="text"
                value={userProfile.address.city}
                onChange={e => updateAddress(userProfile.address.street, e.target.value, userProfile.address.country)}
                placeholder="City"
            />

            {/* Input field for the country with an onChange handler
                Updates the country part of the address, keeping the rest of the userProfile unchanged */}
            <input
                type="text"
                value={userProfile.address.country}
                onChange={e => updateAddress(userProfile.address.street, userProfile.address.city, e.target.value)}
                placeholder="Country"
            />

            {/* Displaying the updated user profile information */}
            <div>
                <h3>Profile Info:</h3>
                {/* Displaying name and email from userProfile state */}
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
                {/* Displaying the address combining street, city, and country */}
                <p>Address: {`${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.country}`}</p>
            </div>
        </div>
    );
};

// Exporting UserProfile component for use in other parts of the application
export default UserProfile;
