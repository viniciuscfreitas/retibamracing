import React from "react";

// Define the type for driver ranking data
type Driver = {
    position: number;
    name: string;
    team: string;
    points: number;
    flag: string; // Path to the country flag
};

const driversRanking: Driver[] = [
    { position: 1, name: "Rafael Fleck", team: "Equipe", points: 620, flag: "/assets/flags/brazil.png" },
    { position: 2, name: "Pedro Muffato", team: "Equipe", points: 533, flag: "/assets/flags/brazil.png" },
    { position: 3, name: "Tulio Bendo", team: "Equipe", points: 525, flag: "/assets/flags/brazil.png" },
    { position: 29, name: "Douglas Torres", team: "Retibam Racing", points: 19, flag: "/assets/flags/brazil.png" },
];

const Classification: React.FC = () => {
    return (
        <section id="classification" className="bg-gradient-to-t from-black to-[#001A3D] text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-[#FF6A00] text-center tracking-wide mb-12">
                    CLASSIFICAÇÃO 2024
                </h2>
                <div className="overflow-x-auto mx-auto max-w-5xl shadow-md hover:shadow-lg rounded-lg">
                    <table
                        className="table-auto w-full text-left border-collapse"
                        aria-label="Tabela de classificação dos pilotos"
                    >
                        <thead>
                        <tr className="bg-[#001A3D] text-[#FF6A00]">
                            <th className="px-6 py-4 rounded-tl-lg">Posição</th>
                            <th className="px-6 py-4">Piloto</th>
                            <th className="px-6 py-4">Equipe</th>
                            <th className="px-6 py-4 rounded-tr-lg">Pontos</th>
                        </tr>
                        </thead>
                        <tbody>
                        {driversRanking.map((driver) => (
                            <tr
                                key={driver.position}
                                className={`bg-[#002D5C] ${
                                    driver.name === "Douglas Torres" ? "border-l-4 border-[#FF6A00]" : ""
                                } hover:bg-[#003A70] transition-colors`}
                            >
                                <td className="px-6 py-4 text-[#FF6A00] font-bold">{driver.position}</td>
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <img
                                        src={driver.flag}
                                        alt={`Bandeira de ${driver.name}`}
                                        className="w-6 h-4 rounded shadow"
                                    />
                                    <span>{driver.name}</span>
                                </td>
                                <td className="px-6 py-4">{driver.team}</td>
                                <td className="px-6 py-4 text-[#FF6A00] font-bold">{driver.points}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-8 py-3 bg-[#FF6A00] hover:bg-[#FF4500] text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 w-full md:w-auto">
                        Ver Classificação Completa
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Classification;