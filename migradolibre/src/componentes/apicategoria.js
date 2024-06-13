import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [categoriasExpandidas, setCategoriasExpandidas] = useState({});

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const categoriasObj = {};
        data.results.forEach((item) => {
          if (!categoriasObj[item.category_id]) {
            categoriasObj[item.category_id] = {
              name: item.category_name,
              subcategorias: [],
            };
          }
          categoriasObj[item.category_id].subcategorias.push(item);
        });
        setCategorias(Object.values(categoriasObj));
      });
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
        {categorias.map((categoria) => (
          <li key={categoria.category_id}>
            <div onClick={() => toggleCategoria(categoria.category_id)}>
              {categoria.name}
              {categoriasExpandidas[categoria.category_id] ? "-" : "+"}
            </div>
            {categoriasExpandidas[categoria.category_id] && (
              <ul>
                {categoria.subcategorias.map((subcategoria) => (
                  <li key={subcategoria.id}>
                    <Link to={`/${subcategoria.category_id}`}>
                      {subcategoria.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categorias;
