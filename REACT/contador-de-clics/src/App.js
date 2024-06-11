import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/logo.png';

function App() {

  const manejarClic = () => {
    console.log("clic");
  }

  const reiniciarContador =() => {
    console.log('Reiniciar');
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <contador numClics='5'/>
      <div className='contenedor-principal'>
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