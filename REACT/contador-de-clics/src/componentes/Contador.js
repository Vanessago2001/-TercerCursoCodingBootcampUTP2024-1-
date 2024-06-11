import React from "react";
import "../hoja-de-estilo/contador.css";

function Contador ({ numClics }) {
  return (
    <div className="contador">
      {numClics}
    </div>
  );
}

export default Contador;