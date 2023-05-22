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
      "Projeto Integrador II",
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

const resultado = (tipoMedia, resultado, classe) => {
  return (
    <span className={classe}>
      {tipoMedia}: {resultado}
    </span>
  );
};

const calcularMedia = (nota1, nota2) => {
  let media = (nota1 + nota2) / 2;
  if (isNaN(media) || (nota1 === 0 && nota2 === 0)) {
    media = 0;
  }
  return media.toFixed(1);
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

export const display_media_tarefa = (T1, T2) => {
  const media = media_tarefa(T1, T2);
  if (media >= 6) {
    return resultado("Média Tarefa", media, "resultado_p");
  } else {
    if (isNaN(media)) {
      return resultado("Média Tarefa", 0, "resultado_np");
    }
    return resultado("Média Tarefa", media, "resultado_np");
  }
};

export const display_media_prova = (P1, P2) => {
  const media = media_prova(P1, P2);
  if (media >= 6) {
    return resultado("Média Prova", media, "resultado_p");
  } else {
    if (isNaN(media)) {
      return resultado("Média Prova", 0, "resultado_np");
    }
    return resultado("Média Prova", media, "resultado_np");
  }
};

export const display_media_final = (Disciplina, P1, P2, T1, T2, PI) => {
  const media = media_final(Disciplina, P1, P2, T1, T2, PI);
  if (media >= 6) {
    return resultado("Média Final", media, "resultado_p");
  } else {
    if (isNaN(media)) {
      return resultado("Média Final", 0, "resultado_np");
    }
    return resultado("Média Final", media, "resultado_np");
  }
};

export const cic_calculos = {
  Algoritmo: {
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
