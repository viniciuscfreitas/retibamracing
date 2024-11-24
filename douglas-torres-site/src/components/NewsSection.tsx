    import React from "react";

    const news = [
        {
            id: 1,
            title: "A Retibam Racing Revela Estratégias Vencedoras",
            description: "Descubra os detalhes das estratégias que levaram Douglas Torres às vitórias mais marcantes.",
            link: "#",
            image: "/assets/retibam-strategy.jpg",
        },
        {
            id: 2,
            title: "Douglas Torres: A Jornada de um Campeão",
            description: "Acompanhe os desafios e superações do piloto nas pistas mais difíceis do mundo.",
            link: "#",
            image: "/assets/douglas-champion.jpg",
        },
        {
            id: 3,
            title: "Retibam Racing: Inovações na Fórmula Truck",
            description: "Saiba como a Retibam Racing está redefinindo os padrões de inovação e performance.",
            link: "#",
            image: "/assets/retibam-innovation.jpg",
        },
    ];

    const NewsSection: React.FC = () => {
        return (
            <section className="bg-gradient-to-t from-[#001A3D] via-[#002B59] to-[#001A3D] py-16 relative">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center text-[#FF6A00] mb-8">
                        NEWS
                    </h2>
                    <p className="text-lg text-center text-gray-300 mb-12">
                        Últimas novidades sobre <span className="text-[#FF6A00]">Douglas Torres</span> e{" "}
                        <span className="text-[#FF6A00]">Retibam Racing</span>!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#001A3D] text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-[#FF6A00]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{item.description}</p>
                                    <a
                                        href={item.link}
                                        className="text-[#FF6A00] font-bold hover:underline"
                                    >
                                        Leia mais
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="#"
                            className="bg-[#FF6A00] text-white py-3 px-6 rounded-lg font-bold text-lg shadow-md hover:bg-[#e65a00] transition-all duration-300"
                        >
                            Blog Completo
                        </a>
                    </div>
                </div>
            </section>
        );
    };

    export default NewsSection;