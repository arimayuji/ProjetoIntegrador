import SobreNos from "./Routes/SobreNos.jsx";
import Homepage from "./Routes/Homepage.jsx";
import Contato from "./Routes/Contato.jsx";
import Notas from "./Routes/Notas.jsx";
import Cic from "./Routes/Cic.jsx";
import Calculadora from "./Routes/Calculadora.jsx";
import Layout from "./Layout/layout.jsx";
import Login from "./Routes/Login.jsx";
import LogOutLayout from "./Layout/LogOutLayout.jsx";
import Office from "./Routes/Office.jsx";
import CursosLayout from "./Layout/CursosLayout.jsx";
import "./Component/NavaBar.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<LogOutLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/Office365" element={<Office />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="/Notas" element={<Notas />} />
        <Route path="/Contato" element={<Contato />} />
        <Route element={<CursosLayout />}>
          <Route path="/Ciência_da_Computação" element={<Cic />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
