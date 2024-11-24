import React from "react";

const Gallery: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Galeria</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <img src="/assets/img1.jpg" alt="Imagem 1" className="w-full" />
                <img src="/assets/img2.jpg" alt="Imagem 2" className="w-full" />
                <img src="/assets/img3.jpg" alt="Imagem 3" className="w-full" />
            </div>
        </div>
    );
};

export default Gallery;