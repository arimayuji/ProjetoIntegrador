import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import "./Historico.css"

const statusAprovacao = (nota) => {
    if (nota >= 6) {
        return <td style={{ color: "blue" }}>Aprovado</td>
    }
    return <td style={{ color: "red" }}>Reprovado</td>
}
const HistoricoTable = ({ historico }) => {
    const [historicoData, setHistoricoData] = useState(historico);

    useEffect(() => {
        setHistoricoData(historico);
    }, [historico]);

    return (
        <>
            <div className="table-responsive">
                <Table variant="blue" className="table" >
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
                    <tbody>
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
            </div>
        </>
    );
};

export default HistoricoTable;