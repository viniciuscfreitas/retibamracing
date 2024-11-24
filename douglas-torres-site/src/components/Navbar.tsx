// Navbar Component
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled ? "bg-[#002B59] shadow-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold text-[#FF6A00] hover:scale-105 transition-transform">
                    Douglas Torres
                </div>
                <ul className="flex space-x-6 text-sm uppercase text-white tracking-wide">
                    {["Início", "Sobre", "Corridas", "Galeria", "Contato"].map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-[#FF6A00] transition-all"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;