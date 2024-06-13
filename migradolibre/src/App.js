import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./hojaestilo/api.css"
import "./App.css"
import Categorias from "./componentes/apicategoria"
import Api from "../src/componentes/api";

function App() {
  return (
    <Router>
      <div className="app">
        <Categorias />
      </div>
      <div className="App"> 
      < Api/>
      </div>
    </Router>
  );
}

export default App;
