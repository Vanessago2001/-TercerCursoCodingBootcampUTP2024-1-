import React, { useState, useEffect } from "react";
import "../hojaestilo/cate.css";

function Endpoint() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326")
      .then((res) => res.json())
      .then((data) => setProductos(data.results))
      .catch((error) => setError("No se pudo obtener la información"));
  }, []);

  return (
    <main className="contenedor-productos">
      {error && <h1>{error}</h1>}
      {productos.map((producto) => (
        <div className="contenedor-producto" key={producto.id}>
          <img src={producto.thumbnail} alt={producto.title} />
          <h5>{producto.title}</h5>
          <h4>Precio: {producto.price}</h4>
        </div>
      ))}
    </main>
  );
}

export default Endpoint;
