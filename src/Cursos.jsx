// lista dos semestres do curso Ciência da Computação
export const cic_semestres = [
  {
    semestre: 1,
    disciplinas: [
      "Banco de Dados",
      "Modelagem Orientada a Objetos",
      "Lógica de Programação",
      "Programação Orientada a Objetos",
      "Projeto Integrador I",
    ],
  },
  {
    semestre: 2,
    disciplinas: [
      "Interface",
      "Front End",
      "Matemática Discreta",
      "Legislação",
      "Estatística",
    ],
  },
  {
    semestre: 3,
    disciplinas: [
      "Física e Modelagem Computacional",
      "Cálculo Computacional",
      "Algoritmos e Estrutura de dados",
      "Desenvolvimento Ágil",
      "Paradigmas",
      "Projeto Integrador III",
    ],
  },
];
export const sistemas_semestres = [
  {
    semestre: 1,
    disciplinas: [
      "Banco de Dados",
      "Modelagem Orientada a Objetos",
      "Lógica de Programação",
      "Programação Orientada a Objetos",
      "Projeto Integrador I",
    ],
  },
  {
    semestre: 2,
    disciplinas: [
      "Interface",
      "Front End",
      "Matemática Discreta",
      "Legislação",
      "Estatística",
    ],
  },
  {
    semestre: 3,
    disciplinas: [
      "Física e Modelagem Computacional",
      "Cálculo e Pesquisa Operacional",
      "Teoria Geral dos Sistemas",
      "Estrutura de Dados",
      "Paradigmas",
      "FrameWorks Low Code",
      "Projeto Integrador III",
    ],
  },
];
// devolve um elemento span que contem o  resultado calculado da media especificada
const resultado_0 = (tipoMedia, resultado, classe) => {
  return (
    <span className={classe}>
      {tipoMedia} : {resultado}
    </span>
  );
};

export const media_tarefa = (T1, T2) => {
  let media_t = (T1 + T2) / 2;
  if (media_t >= 6) {
    return resultado_0("Média Tarefa", media_t.toFixed(1), "resultado_p");
  } else {
    if (isNaN(media_t)) {
      return resultado_0("Média Tarefa", 0, "resultado_np");
    }
    return resultado_0("Média Tarefa", media_t.toFixed(1), "resultado_np");
  }
};
export const media_prova = (P1, P2) => {
  let media_p = (P1 + P2) / 2;
  if (media_p >= 6) {
    return resultado_0("Média Prova", media_p.toFixed(1), "resultado_p");
  } else {
    if (isNaN(media_p)) {
      return resultado_0("Média Prova", 0, "resultado_np");
    }
    return resultado_0("Média Prova", media_p.toFixed(1), "resultado_np");
  }
};
export const media_final = (Disciplina, P1, P2, T1, T2, PI) => {
  let media_f =
    ((P1 + P2) / 2) * cic_calculos[Disciplina].peso_prova +
    ((T1 + T2) / 2) * cic_calculos[Disciplina].peso_tarefa +
    PI * 0.1;
  // retorna media tarefa,prova e final na lista medias
  if (media_f >= 6) {
    return resultado_0("Média Final", media_f.toFixed(1), "resultado_p");
  } else {
    if (isNaN(media_f)) {
      return resultado_0("Média Final", 0, "resultado_np");
    }
    return resultado_0("Média Final", media_f.toFixed(1), "resultado_np");
  }
};

// retorna media tarefa,prova e final na lista medias
const materia_pesos = (peso_prova, peso_tarefa) => {
  return {
    peso_prova: peso_prova,
    peso_tarefa: peso_tarefa,
  };
}
export const cic_calculos = {
  "Algoritmo": materia_pesos(0.5, 0.5),
  "Banco de Dados": materia_pesos(0.6, 0.4),
  "Cálculo": materia_pesos(0.6, 0.4),
  "Desenvolvimento Ágil": materia_pesos(0.5, 0.5),
  "Estatística": materia_pesos(0.6, 0.4),
  "Física": materia_pesos(0.6, 0.4),
  "Front End": materia_pesos(0.6, 0.4),
  "Interface": materia_pesos(0.6, 0.4),
  "Legislação": materia_pesos(0.6, 0.4),
  "Lógica de Programação": materia_pesos(0.6, 0.4),
  "Matemática Discreta": materia_pesos(0.6, 0.4),
  "Modelagem": materia_pesos(0.6, 0.4),
  "POO": materia_pesos(0.6, 0.4),
  "Paradigmas": materia_pesos(1, 0),
  "Projeto Integrador": materia_pesos(0.6, 0.4),
};
export const sistemas_calculos = {
  "Estrutura de Dados": materia_pesos(0.6, 0.4),
  "Banco de Dados": materia_pesos(0.6, 0.4),
  "Cálculo e Pesquisa Operacional": materia_pesos(0.7, 0.3),
  "Desenvolvimento Ágil": materia_pesos(0.5, 0.5),
  "Estatística": materia_pesos(0.6, 0.4),
  "Teoria Geral dos Sistemas": materia_pesos(0.6, 0.4),
  "FrameWork LowCode": materia_pesos(0.6, 0.4),
  "Front End": materia_pesos(0.6, 0.4),
  "Interface": materia_pesos(0.6, 0.4),
  "Legislação": materia_pesos(0.6, 0.4),
  "Lógica de Programação": materia_pesos(0.6, 0.4),
  "Matemática Discreta": materia_pesos(0.6, 0.4),
  "Modelagem": materia_pesos(0.6, 0.4),
  "POO": materia_pesos(0.6, 0.4),
  "Paradigmas": materia_pesos(1, 0),
  "Projeto Integrador": materia_pesos(0.6, 0.4),
};