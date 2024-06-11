
//Salvedad para que los dos resultados sean del mismo personaje se debe agregar en URL /?name="nombre"
import React, { useState, useEffect } from "react";
import "./hoja-estilo/App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/?name=Rick"
        );
        if (!response.ok) {
          throw new Error("Fallo al obtener la página");
        }
        const data = await response.json();
        const charactersData = await Promise.all(
          data.results.slice(0, 10).map(async (character) => {
            const secondImage = await fetchotroCharacters();
            return {
              ...character,
              secondImage: secondImage,
            };
          })
        );
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    const fetchotroCharacters = async () => {
      try {
        const page = Math.floor(Math.random() * 42) + 0;
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=Rick`
        );
        if (!response.ok) {
          throw new Error("Fallo al obtener la página");
        }
        const data = await response.json();
        const randomCharacter =
          data.results[Math.floor(Math.random() * data.results.length)];
        return randomCharacter ? randomCharacter.image : null;
      } catch (error) {
        console.error("Error al obtener el otro personaje:", error);
        return null;
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th colSpan={2} > Imagen </th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>
                <img src={character.image} alt={`${character.name} 1`} />
                {character.secondImage && (
                  <img
                    src={character.secondImage}
                    alt={`${character.name} 2`}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;