import React from 'react';

const Button = ({ title }) => {
    return (
        <button className="bg-secondary-color hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 uppercase text-sm tracking-wider w-max">
            {title}
        </button>
    );
};

export default Button;
