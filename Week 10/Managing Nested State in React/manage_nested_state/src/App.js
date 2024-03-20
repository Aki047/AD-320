// Importing React and the UserProfile component
import React from 'react';
import UserProfile from './UerProfile';

// Defining the main App component
const App = () => {
  // Render function to display the main application UI
  return (
      <div className="App">
        {/* Application title */}
        <h1>User Profile Manager</h1>

        {/* Embedding the UserProfile component to manage and display user profile information */}
        <UserProfile />

        {/* Additional components or features can be added here */}
      </div>
  );
}

// Exporting App component for use in the application
export default App;
