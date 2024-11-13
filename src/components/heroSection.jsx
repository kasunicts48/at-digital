import React from 'react';
import Button from './button';

const HeroSection = () => {
    return (
        <div className="relative -z-50">
            <img src="/hero_image.jpg" alt="hero image" className=" w-full -z-10" />
            <div className="relative 2xl:bottom-96 xl:bottom-96 lg:bottom-96 lg:left-20 p-10 lg:max-w-2xl bg-gradient-to-r from-emerald-400 to-cyan-400">
                <h1 className="text-4xl md:text-5xl font-bold  text-white mb-6 leading-tight">
                    We Crush Your Competitors, Goals, And Sales Records - Without The B.S
                </h1>
                <Button title={'Get Free Consultation'} />
            </div>
        </div>
    );
};

export default HeroSection;
