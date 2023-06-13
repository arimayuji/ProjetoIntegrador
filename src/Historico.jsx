import React, { useEffect, useState, useRef } from "react";
import Table from 'react-bootstrap/Table';
import html2canvas from 'html2canvas';
import "./Historico.css"

const statusAprovacao = (nota) => {
  if (nota >= 6) {
    return <td style={{ color: "blue" }}>Aprovado</td>
  }
  return <td style={{ color: "red" }}>Reprovado</td>
}

const HistoricoTable = ({ historico }) => {
  const [historicoData, setHistoricoData] = useState(historico);
  const tableRef = useRef(null);

  useEffect(() => {
    setHistoricoData(historico);
  }, [historico]);

  const handlePrint = () => {
    html2canvas(tableRef.current)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'historico.png';
        link.click();
      });
  };

  return (
    <>
      <div className="table-responsive">
        <Table variant="blue" className="table" ref={tableRef}>
          {/* Cabeçalho da tabela */}
          <thead>
            <tr>
              <th>Disciplinas</th>
              <th>P1</th>
              <th>P2</th>
              <th>PSUB</th>
              <th>T1</th>
              <th>T2</th>
              <th>PI</th>
              <th>MT</th>
              <th>MP</th>
              <th>MF</th>
              <th>Status:</th>
            </tr>
          </thead>
          {/* Corpo da tabela */}
          <tbody >
            {historicoData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.P1}</td>
                <td>{item.P2}</td>
                <td>{item.PSUB}</td>
                <td>{item.T1}</td>
                <td>{item.T2}</td>
                <td>{item.PI}</td>
                <td>{item.MT}</td>
                <td>{item.MP}</td>
                <td>{item.MF}</td>

                {statusAprovacao(item.MF)}
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={handlePrint}>Gerar Boletim</button>
      </div>
    </>
  );
};

export default HistoricoTable;
