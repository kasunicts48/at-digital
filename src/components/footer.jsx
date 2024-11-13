import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary-color text-white py-8">
            <div className="flex flex-col md:flex-row justify-between px-2 sm:px-10">
                <div className="mb-6 w-auto md:w-[450px] px-6">
                    <img src="/logo.png" alt="AT Digital" className="w-72" />
                    <p className="mt-4 ">
                        Your goal is our target. Not anything in between. We use online marketing platforms and tools to
                        achieve single objective - your business results.
                    </p>
                </div>
                <div className="flex sm:flex-row flex-col gap-8 px-6">
                    <div>
                        <h3 className="font-bold mb-4">Our Technologies</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#">ReactJS</a>
                            </li>
                            <li>
                                <a href="#">Gatsby</a>
                            </li>
                            <li>
                                <a href="#">NextJS</a>
                            </li>
                            <li>
                                <a href="#">NodeJS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#">Social Media Marketing</a>
                            </li>
                            <li>
                                <a href="#">Web & Mobile App Development</a>
                            </li>
                            <li>
                                <a href="#">Data & Analytics</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mt-8 text-center">
                <hr className="md:w-2/3 w-11/12 py-2" />
                <div className="flex gap-3">
                    <div>Privacy Policy</div>|<div>Terms & Conditions</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
