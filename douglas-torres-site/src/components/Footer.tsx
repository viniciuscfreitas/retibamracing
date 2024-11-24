import React from "react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-[#001A3D] py-10 text-gray-300"
            aria-labelledby="footer-heading"
        >
            {/* Decorative Top Line */}
            <div className="w-full h-1 bg-gradient-to-r from-[#FF6A00] to-[#0056B3] mb-6"></div>

            <div className="container mx-auto px-4 text-center">
                {/* Branding */}
                <div className="flex justify-center items-center mb-6">
                    <h2
                        id="footer-heading"
                        className="text-3xl font-bold text-[#FF6A00]"
                    >
                        Retibam Racing
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav aria-label="Footer Navigation">
                    <ul className="flex justify-center space-x-8 text-sm mb-6">
                        {["Início", "Sobre", "Corridas", "Galeria", "Contato"].map(
                            (link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="hover:text-[#FF6A00] transition duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div
                    className="flex justify-center space-x-6 mb-6"
                    aria-label="Redes Sociais"
                >
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#FF6A00] transition duration-300"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#FF6A00] transition duration-300"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#FF6A00] transition duration-300"
                        aria-label="Twitter"
                    >
                        <i className="fab fa-twitter text-lg"></i>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-sm">
                    &copy; {currentYear} Retibam Racing. Todos os direitos reservados.
                    Desenvolvido por Agência AEI.
                </div>
            </div>
        </footer>
    );
};

export default Footer;