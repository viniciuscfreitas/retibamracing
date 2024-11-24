import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="h-screen bg-gradient-to-b from-[#002B59] via-[#001A3D] to-black flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#002B59] to-[#FF6A00] opacity-10 blur-3xl"></div>
            <div className="text-center text-white relative z-10">
                <h1 className="text-6xl md:text-7xl font-bold uppercase text-[#FF6A00] animate-fade-in-down">
                    Douglas Torres
                </h1>
                <p className="text-xl md:text-2xl mt-4 text-gray-300">
                    Piloto de Fórmula Truck -{" "}
                    <span className="text-[#FF6A00]">Retibam Racing</span>
                </p>
                <div className="mt-6 mx-auto w-24 h-1 bg-[#FF6A00] rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;