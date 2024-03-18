import React from 'react';

const Button = ({ children }) => {
    return (
        <button className={"Button"}>
            {children}
        </button>
    );
};

export default Button;

