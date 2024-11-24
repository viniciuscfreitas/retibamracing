import React from "react";

// Define the type for partner data
type Partner = {
    name: string;
    logo: string; // Path to the logo image
};

const partners: Partner[] = [
    { name: "Richard Mille", logo: "/assets/partners/richard-mille.png" },
    { name: "Martini", logo: "/assets/partners/martini.png" },
    { name: "Schuberth", logo: "/assets/partners/schuberth.png" },
    { name: "All Road", logo: "/assets/partners/all-road.png" },
];

const Partners: React.FC = () => {
    return (
        <section
            id="partners"
            className="relative bg-[#001A3D] py-16"
            aria-labelledby="partners-heading"
        >
            {/* Decorative Top Gradient */}
            <div className="absolute inset-x-0 top-0 -mt-10 h-20 bg-gradient-to-b from-black to-[#001A3D] skew-y-2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2
                    id="partners-heading"
                    className="text-4xl font-bold text-[#FF6A00] text-center mb-6"
                >
                    PARCEIROS
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    Nossos parceiros que ajudam a impulsionar este projeto.
                </p>

                {/* Grid of Partners */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-[#002D5C] p-4 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105"
                        >
                            <img
                                src={partner.logo}
                                alt={`Logo do parceiro ${partner.name}`}
                                className="max-h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-[#001A3D] -skew-y-2"></div>
        </section>
    );
};

export default Partners;