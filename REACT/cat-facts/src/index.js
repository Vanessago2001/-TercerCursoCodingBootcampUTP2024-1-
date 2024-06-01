import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';



function App() {
  const [catImage, setCatImage] = useState('');
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    obtenerNuevoHechoYImagen(); 
  }, []);


  function obtenerNuevoHechoYImagen() {

    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => setCatImage(data[0].url))
      .catch(error => console.error('Error fetching cat image:', error));


    fetch('https://cat-fact.herokuapp.com/facts/random')
      .then(response => response.json())
      .then(data => setCatFact(data.text))
      .catch(error => console.error('Error fetching cat fact:', error));
  }

  return (
    <div className="App">
      <div className="cat-image">
        {catImage && <img src={catImage} alt="Imagen de gato" />}
      </div>
      <div className="cat-fact">
        <p>{catFact}</p>
      </div>
      <button onClick={obtenerNuevoHechoYImagen}>Obtener hecho y imagen</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
