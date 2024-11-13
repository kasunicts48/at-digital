import React from 'react';
import Button from './button';

const ServiceSection = () => {
    return (
        <div className="flex flex-col px-10 md:px-20 w-full lg:-mt-72">
            <div className="flex flex-col sm:flex-row justify-around items-center py-10">
                <div>
                    <img src="/image 2.png" alt="service section image" className="max-w-full h-auto" />
                </div>
                <div className=" flex flex-col gap-5 w-full md:w-1/2  text-gray-800 items-center text-center sm:items-start sm:text-left">
                    <div className="text-2xl font-semibold text-analogous-color-one font-popins">
                        Web & Mobile App Development
                    </div>
                    <div className="text-2xl">
                        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which
                        tailor content and engagement methods to respond to different intents shown by your potential
                        customers who interact with your business online.
                    </div>
                    <Button title={'LEARN MORE'} />
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-around items-center py-10">
                <div className=" flex flex-col gap-5 w-full md:w-1/2   text-gray-800 items-center text-center sm:items-start sm:text-left">
                    <div className="text-2xl font-semibold text-analogous-color-one font-popins">
                        Digital Strategy Consulting
                    </div>
                    <div className="text-2xl">
                        Your digital strategy should complement the overall marketing strategy of the company. In online
                        marketing, each component will never work in isolation and every business needs a different mix.
                        We provide a clear concept and strategic overview to find the most efficient model for your
                        business.
                    </div>
                    <Button title={'LEARN MORE'} />
                </div>
                <div>
                    <img src="/image 1.png" alt="service section image" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
