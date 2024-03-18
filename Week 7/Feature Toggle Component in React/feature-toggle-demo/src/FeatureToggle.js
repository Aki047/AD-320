import React from 'react';

// Define a functional component called FeatureToggle

const FeatureToggle = ({ isEnabled, featureName }) => {
    return (
        <div>
            {isEnabled ? (
                <p>Feature {featureName} is enabled</p>
            ) : (
                <p>Feature {featureName} is disabled</p>
            )}
        </div>
    );
};
// Export the FeatureToggle component

export default FeatureToggle;
