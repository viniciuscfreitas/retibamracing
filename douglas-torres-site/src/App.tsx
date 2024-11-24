import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import InsideGP from "./components/InsideGP";
import NewsSection from "./components/NewsSection";
import Classification from "./components/Classification";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className="bg-[#001A3D] text-white font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Main Sections */}
            <main>
                <Hero />
                <About />
                <InsideGP />
                <NewsSection />
                <Classification />
                <Partners />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;