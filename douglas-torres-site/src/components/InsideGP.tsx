import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const races = [
    {
        id: 1,
        title: "Rivera",
        date: "24/03",
        location: "Uruguai",
        schedule: [
            { session: "Treino 1", time: "sex 07:00 - 08:30" },
            { session: "Treino 2", time: "sex 11:00 - 12:30" },
            { session: "Treino 3", time: "sab 08:00 - 09:00" },
            { session: "Qualificação", time: "sab 11:00 - 12:00" },
            { session: "Corrida", time: "dom 11:00 - 13:00" },
        ],
        flag: "/assets/uruguay-flag.png",
        trackImage: "/assets/rivera.png",
    },
    {
        id: 2,
        title: "Guaporé",
        date: "21/04",
        location: "Brasil",
        schedule: [
            { session: "Treino 1", time: "sex 07:00 - 08:30" },
            { session: "Treino 2", time: "sex 11:00 - 12:30" },
            { session: "Treino 3", time: "sab 08:00 - 09:00" },
            { session: "Qualificação", time: "sab 11:00 - 12:00" },
            { session: "Corrida", time: "dom 11:00 - 13:00" },
        ],
        flag: "/assets/brazil-flag.png",
        trackImage: "/assets/guapore.png",
    },
    // Adicione mais corridas conforme necessário
];

const InsideGP: React.FC = () => {
    return (
        <section
            id="inside-gp"
            className="relative bg-gradient-to-b from-[#003E82] to-[#001A3D] py-20"
        >
            {/* Gradiente Superior */}
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-t from-[#003E82] to-transparent"></div>

            <div className="container mx-auto px-6 text-center">
                {/* Título */}
                <h2 className="text-5xl font-bold text-[#FF6A00] tracking-wide mb-6">
                    Calendário 2024
                </h2>
                <div className="mx-auto w-16 h-1 bg-[#FF6A00] mb-8"></div>
                <p className="text-lg text-white mb-12">
                    Confira as datas, locais e horários das corridas da temporada 2024!
                </p>

                {/* Swiper */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="overflow-hidden"
                >
                    {races.map((race) => (
                        <SwiperSlide key={race.id}>
                            <div
                                className="bg-[#002B59] p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transform hover:scale-105 transition-all"
                                data-aos="fade-up"
                            >
                                {/* Informação sobre a corrida */}
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl font-bold text-[#FF6A00] mb-2">
                                        {race.title}
                                    </h3>
                                    <p className="text-lg text-gray-300">
                                        {race.date} - {race.location}
                                    </p>
                                    <ul className="mt-4">
                                        {race.schedule.map((session, index) => (
                                            <li
                                                key={index}
                                                className="text-gray-200 text-sm mb-2"
                                            >
                                        <span className="text-[#FF6A00] font-semibold">
                                            {session.session}:
                                        </span>{" "}
                                                {session.time}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Imagem do circuito */}
                                <div className="flex-1 flex justify-center">
                                    <img
                                        src={race.trackImage}
                                        alt={`Circuito de ${race.title}`}
                                        className="w-64 h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Gradiente Inferior */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#001A3D]"></div>
        </section>
    );
};

export default InsideGP;