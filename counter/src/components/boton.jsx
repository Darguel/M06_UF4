const Boton = ({ text, onClick, esClick }) => {
    const claseBoton = esClick ? 'btnClick' : 'btnReiniciar';

  
  return (
    <button className={claseBoton} onClick={onClick}>
      {text}
    </button>
  );
};

export default Boton;