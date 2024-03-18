import React from 'react';
import './App.css';
import FeatureToggle from './FeatureToggle';

// Define the App functional component

function App() {
  return (
      <div className="App">
        <h1>Feature Toggle Demo</h1>
        <FeatureToggle isEnabled={true} featureName="Dashboard" />
        <FeatureToggle isEnabled={false} featureName="Analytics" />
        <FeatureToggle isEnabled={true} featureName="Notifications" />
      </div>
  );
}
// Export the App component

export default App;

