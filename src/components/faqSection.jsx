import React from 'react';
import Accordion from './accordion';

const FAQList = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
];

const FAQSection = () => {
    return (
        <div className="flex flex-col items-center text-center w-full  ">
            <div className="text-3xl font-semibold text-analogous-color-one font-popins ">
                Frequently asked questions
            </div>
            <div className="flex flex-col m-20 w-full lg:w-2/3 px-5 ">
                {FAQList.map((item) => {
                    return <Accordion question={item.question} answer={item.answer} />;
                })}
            </div>
        </div>
    );
};

export default FAQSection;
