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

}
console.log(calcularMedia(4, 0));
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

export const media_tarefa = (T1, T2) => {
  return calcularMedia(T1, T2);
};

export const media_prova = (P1, P2, PSUB) => {
  let media = 0;
  if (PSUB > P1 && P1 <= P2) {

    media = calcularMedia(PSUB, P2)

  }
  else if (PSUB > P2 && P2 <= P1) {
    media = calcularMedia(PSUB, P1)
  }
  console.log(typeof PSUB)
  return media;
};

export const media_final = (Disciplina, P1, P2, T1, T2, PI, PSUB) => {
  const peso_prova = cic_calculos[Disciplina].peso_prova;
  const peso_tarefa = cic_calculos[Disciplina].peso_tarefa;
  let media_f = 0
  let media_prova_valor = 0
  if (PSUB > P1 && P1 <= P2) {

    media_prova_valor = media_prova(PSUB, P2)

  }
  else if (PSUB > P2 && P2 <= P1) {
    media_prova_valor = media_prova(PSUB, P1)
  }


  media_f =
    (media_prova_valor * peso_prova + media_tarefa(T1, T2) * peso_tarefa) *
    0.9 +
    PI * 0.1;
  console.log(PSUB, media_prova_valor, media_f)
  return media_f.toFixed(1);
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

