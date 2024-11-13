import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="m-2 bg-lavender rounded-sm text-left">
            <div
                className="px-6 py-4 cursor-pointer flex justify-between items-center w-full"
                onClick={toggleAccordion}
            >
                <h2 className={`text-lg font-semibold ${isOpen ? 'text-analogous-color-one' : 'text-black'} `}>
                    {question}
                </h2>
                <button className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                        <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 1H15"
                                stroke="#6B3CC9"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 1V15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 8H15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-6 pb-4 text-left w-full text-gray-500">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
