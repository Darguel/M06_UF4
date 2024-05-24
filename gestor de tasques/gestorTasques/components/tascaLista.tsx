import { useState } from 'react';
import React from "react";
import Tasca from './tasca';
import TascaForm from './tascaForm';
import '../style/style.css';

type Tasca = {
  id: number;
  text: string;
  completada: boolean;
};

export default function TascaLista() {

    const [tasques, setTasques] = useState<Tasca[]>([]);

    const afegirTasca = (tasca: { text: string }) => {
        const tasquesActuals = [...tasques, { id: tasques.length, text: tasca.text, completada: false }];
        setTasques(tasquesActuals);
    };
    const eliminarTasca = (id: number) => { // También cambié el tipo de 'any' a 'number'
        const tasquesRestants = tasques.filter((tasca) => tasca.id !== id);
        setTasques(tasquesRestants);
    };
    const completarTasca = (id: number) => { // También cambié el tipo de 'any' a 'number'
        const tasquesActuals = tasques.map((tasca) =>
            tasca.id === id ? { ...tasca, completada: !tasca.completada } : tasca
        );
        setTasques(tasquesActuals);
    };

    return (
        <div className="ListaTasca">
            <h2>Mis tareas</h2>
            <TascaForm funcAfegirTasca={afegirTasca} />
            {tasques.map((tasca) => (
                <Tasca
                    key={tasca.id}
                    id={tasca.id}
                    text={tasca.text}
                    completada={tasca.completada}
                    eliminarTasca={eliminarTasca}
                    completarTasca={completarTasca}
                />
            ))}
        </div>
    )
}
