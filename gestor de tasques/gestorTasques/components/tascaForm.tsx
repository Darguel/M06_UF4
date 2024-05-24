import React, { useState } from 'react';

export default function TascaForm({ funcAfegirTasca }) {
    const [textTasca, setTextTasca] = useState('');

    const canviTextTasca = (e) => {
        setTextTasca(e.target.value);
    };

    const enviarForm = (e) => {
        e.preventDefault();
        const tascaNova = {
            text: textTasca,
            completada: false
        };
        funcAfegirTasca(tascaNova);
        setTextTasca('');
    };

    return (
        <div>
            <form onSubmit={enviarForm}>
                <input
                    type="text"
                    placeholder="Titulo Tarea"
                    value={textTasca}
                    onChange={canviTextTasca}
                />
                <button type="submit">Agregar Tarea</button>
            </form>
        </div>
    );
}
