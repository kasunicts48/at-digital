import React, { useState } from 'react';

const navbarList = [
    { navText: 'Home' },
    { navText: 'Service' },
    { navText: 'About us' },
    { navText: 'Contact us' },
    { navText: 'Careers' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-6 lg:pr-20 bg-primary-color text-white">
            {/* Logo */}
            <img src="/logo.png" alt="Logo"></img>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8">
                {navbarList.map((item) => {
                    return (
                        <a href="#services" className="hover:text-gray-300 font-medium">
                            {item.navText.toUpperCase()}
                        </a>
                    );
                })}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-3xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </button>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-white text-black transform ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button
                    className="text-3xl font-semibold absolute top-4 right-6"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    ✕
                </button>
                <div className="flex flex-col items-start p-5 space-y-8 text-lg z-50">
                    {/* Close Button */}
                    {navbarList.map((item) => {
                        return (
                            <a href="#services" className="hover:text-gray-500">
                                {item.navText.toUpperCase()}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
