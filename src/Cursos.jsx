export const cic_semestres = [
  {
    semestre: 1,
    disciplinas: [
      "Banco de Dados",
      "Modelagem Orientada a Objetos",
      "Lógica de Programação",
      "Programação Orientada a Objetos",
      "Projeto Integrador ",
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
      "Projeto Integrador",
    ],
  },
  {
    semestre: 3,
    disciplinas: [
      "Física e Modelagem Computacional",
      "Cálculo Computacional",
      "Algoritmos e Estrutura de Dados",
      "Desenvolvimento Ágil",
      "Paradigmas",
      "Projeto Integrador ",
    ],
  },
];


const calcularMedia = (nota1, nota2) => {
  let media = (nota1 + nota2) / 2;
  if (isNaN(media) || (nota1 === 0 && nota2 === 0)) {
    media = 0;
  }
  return parseFloat(media).toFixed(1);
};

export const media_tarefa = (T1, T2) => {
  return calcularMedia(T1, T2);
};

export const media_prova = (P1, P2) => {
  return calcularMedia(P1, P2);
};

export const media_final = (Disciplina, P1, P2, T1, T2, PI) => {
  const peso_prova = cic_calculos[Disciplina].peso_prova;
  const peso_tarefa = cic_calculos[Disciplina].peso_tarefa;

  const media_f =
    (calcularMedia(P1, P2) * peso_prova + calcularMedia(T1, T2) * peso_tarefa) *
    0.9 +
    PI * 0.1;

  return media_f.toFixed(1);
};
export const cic_calculos = {
  "Algoritmos e Estrutura de Dados": {
    peso_prova: 0.5,
    peso_tarefa: 0.5,
  },
  "Banco de Dados": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Modelagem Orientada a Objetos": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Cálculo Computacional": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Desenvolvimento Ágil": {
    peso_prova: 0.5,
    peso_tarefa: 0.5,
  },
  "Estatística": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Física e Modelagem Computacional": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Front End": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Interface": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Legislação": {
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
  "Modelagem": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Programação Orientada a Objetos": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
  "Paradigmas": {
    peso_prova: 0.9,
    peso_tarefa: 0.1,
  },
  "Projeto Integrador": {
    peso_prova: 0.6,
    peso_tarefa: 0.4,
  },
};
