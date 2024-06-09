import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/circ.png';

function App() {
  const manejarClic = () => {
    console.log("clic");
  }
  const reiniciarContador = () => {
    console.log("Reiniciar")
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
      <img
      className='freeCodeCamp-logo'
      src={freeCodeCampLogo}
      alt='logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto='clicl'
          esBotonDeClic={true} 
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false} 
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;