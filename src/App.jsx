import React from "react";
import Homepage from "./Routes/Homepage.jsx";
import Contato from "./Routes/Contato.jsx";
import Login from "./Routes/Login.jsx";
import Notas from "./Routes/Notas.jsx";
import Cic from "./Routes/Cic.jsx";
import Calculadora from "./Routes/Calculadora.jsx";
import Layout from "./Layout/layout.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import CursosLayout from "./Layout/CursosLayout.jsx";
import "./Component/NavaBar.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/Office365 - Login" element={<Login />} /></Route>
      <Route element={<Layout />}>
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="/Notas" element={<Notas />} />F
        <Route path="/Contato" element={<Contato />} />
        <Route element={<CursosLayout />}>
          <Route path="/Ciência da Computação" element={<Cic />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
