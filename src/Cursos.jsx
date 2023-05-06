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
export const media_final = (disciplina, P1, P2, T1, T2, pi) => {
  let media_f =
    ((P1 + P2) / 2) * cic_calculos[disciplina].peso_prova +
    ((T1 + T2) / 2) * cic_calculos[disciplina].peso_tarefa +
    pi * 0.1;
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
export const cic_calculos = {
  Algoritmo: {
    peso_prova: 0.5,
    peso_tarefa: 0.5,
  },
  "Banco de Dados": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  Cálculo: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Desenvolvimento Ágil": {
    peso_prova: 0.5,
    peso_tarefa: 0.5,
  },
  Estatística: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  Física: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Front End": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  Interface: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  Legislação: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Lógica de Programação": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Matemática Discreta": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  Modelagem: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  POO: {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  Paradigmas: {
    peso_prova: 1,
    peso_tarefa: 0,
  },
  "Projeto Integrador": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
};
