import React from "react";

const Calendar: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Calendário de Corridas</h2>
            <ul className="mt-4">
                <li>01/12/2024: Corrida em Interlagos</li>
                <li>15/12/2024: Grande Prêmio Curitiba</li>
            </ul>
        </div>
    );
};

export default Calendar;