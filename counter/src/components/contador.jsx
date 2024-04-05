import React, { useState } from 'react';
import Boton from './boton';

const Contador = () => {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarNum = () => {
    setNumClicks(0);
  };

  return (
    <div>
      <p className='color-texto'>Contador: {numClicks}</p>
      <Boton text="Click" onClick={incrementNum} esClick={true} />
      <Boton text="Reiniciar" onClick={reiniciarNum} esClick={false} />
    </div>
  );
};

export default Contador;