import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Contato</h2>
            <form className="mt-4">
                <label className="block mb-2">Nome:</label>
                <input type="text" className="w-full border p-2" />

                <label className="block mt-4 mb-2">Email:</label>
                <input type="email" className="w-full border p-2" />

                <label className="block mt-4 mb-2">Mensagem:</label>
                <textarea className="w-full border p-2"></textarea>

                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;