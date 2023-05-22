import HistoricoTable from "../Historico";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { ConsultarHistorico } from "../db/BancoDeDados";

const Notas = () => {
  <GlobalStyle />
  const [historico, setHistorico] = useState([]);
  const fetchHistorico = async () => {
    const notas1 = await ConsultarHistorico(localStorage.getItem("email"));
    setHistorico(notas1);
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  return (
    <>
      <HistoricoTable historico={historico} />
    </>
  );
};
export default Notas;
