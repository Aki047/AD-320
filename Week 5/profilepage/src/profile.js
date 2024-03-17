import React from 'react';
import profileImage from './profile.jpg';

const Profile = () => {
    return (
        <div className="wrapper">
            <div className="profile">
                <img src={profileImage} alt="Profile" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}/>
                <div className="profile-info">
                    <h2>Hello, my name is Holly.</h2>
                    <p>My name is Holly, I'm a student and IT Professional located in Seattle, Washington.</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
