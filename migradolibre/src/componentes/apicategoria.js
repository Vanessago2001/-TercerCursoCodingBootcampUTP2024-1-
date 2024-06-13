import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categorias() {
  const categoriesID = []
  const [categorias, setCategorias] = useState([]);
  const [categoriasExpandidas, setCategoriasExpandidas] = useState({});
  
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326")
      .then((respuesta) => respuesta.json())
      .then((data)=>{
        data.results.map((item)=>{
          if(!categoriesID.includes(item.category_id)){
            categoriesID.push(item.category_id)
          }
        })
      })
      .then(console.log(categoriesID))
  }, []);
  

  const toggleCategoria = (categoriaId) => {
    setCategoriasExpandidas((prev) => ({
      ...prev,
      [categoriaId]: !prev[categoriaId],
    }));
  };

  return (
    <nav className="menu">
      <h1>Categorías</h1>
      <ul>
        {categorias.map((categoria) => 
          <div>
            <p>{categoria.name}</p>
            <p>{categoria.subcategories}</p>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Categorias;
