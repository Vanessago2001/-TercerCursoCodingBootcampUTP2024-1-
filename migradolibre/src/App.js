import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./hojaestilo/api.css"
import "./App.css"
import Categorias from "./componentes/apicategoria"
import Api from "./componentes/api"

function App() {
  return (
    <div className="contenedor">
      <Router>
        <div className="sidebar">
          <Routes>
            <Route path="/" Component={Categorias}/>
          </Routes>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" Component={Api}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
