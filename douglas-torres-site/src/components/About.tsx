import React from "react";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-b from-black via-[#001A3D] to-black text-white"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-12">
                {/* Left Text Section */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FF6A00]">
                        Sobre Douglas Torres
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Douglas Torres é um piloto talentoso da Fórmula Truck,
                        representando com orgulho a equipe{" "}
                        <span className="text-[#FF6A00] font-semibold">
                            Retibam Racing
                        </span>
                        . Apaixonado por velocidade, ele coleciona vitórias e
                        reconhecimento nas pistas.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Com dedicação e determinação, Douglas continua a
                        acelerar rumo ao topo, sempre buscando a vitória em cada
                        curva.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/assets/douglas-torres.jpg"
                        alt="Douglas Torres posando em frente ao seu caminhão"
                        className="rounded-lg shadow-xl border-4 border-[#FF6A00] hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;