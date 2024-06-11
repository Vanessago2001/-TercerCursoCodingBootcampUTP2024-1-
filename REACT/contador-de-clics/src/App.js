import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumclics] = useState (0);

  const manejarClic = () => {
    setNumclics (numClics + 1);
  }

  const reiniciarContador =() => {
    setNumclics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
        <Boton 
        texto='clic'
        esBotonDeClic={true} 
        manejarClic={manejarClic} />
        <Boton 
        texto='reiniciar'
        esBotonDeClic={false} 
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;