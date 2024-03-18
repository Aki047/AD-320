import React from 'react';
import UserProfile from './UserProfile';
import './App.css';

const App = () => {
    return (
        <div>
            <div className="container">
                <div><UserProfile name="Jane Doe" email="jane.doe@example.com" /></div>
            </div>
        </div>
    );
};

export default App;

