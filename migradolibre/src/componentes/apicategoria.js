import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/categories")
      .then((response) => response.json())
      .then((data) => {
        const formattedCategories = data.map((category) => ({
          id: category.id,
          name: category.name,
          children: category.children_categories || [],
        }));
        setCategorias(formattedCategories);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const renderCategory = (category) => {
    const isExpanded = expandedCategories[category.id];
    return (
      <li key={category.id}>
        <button onClick={() => toggleCategory(category.id)}>
          {isExpanded ? "-" : "+"}
        </button>
        <Link to={`/${category.id}`}>{category.name}</Link>
        {isExpanded && category.children && (
          <ul>
            {category.children.map((child) => renderCategory(child))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="menu">
      <ul>
        {categorias.map((categoria) => renderCategory(categoria))}
      </ul>
    </nav>
  );
}

export default Categorias;
