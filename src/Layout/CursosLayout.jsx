import "./Layout.css";
import "./CursosLayout.css";
import { Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalStyle } from "../GlobalStyle";
import { useState } from "react";
import {
  cic_calculos,
  cic_semestres,
  media_final,
  media_prova,
  media_tarefa,
} from "../Cursos";

// transforma cada disciplina da lista cic_semestres em options HTML dentro do select (l.38-44)
const disciplinas = (semestre) => {
  return cic_semestres[semestre].disciplinas.map((disciplina, chave) => (
    <option key={chave}>{disciplina}</option>
  ));
};

const validateInput = (value) => {
  const intValue = parseInt(value);
  return intValue >= 0;
};
const CursosLayout = () => {
  const schema = yup.object().shape({
    P1: yup
      .number()
      .positive()
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .required("Nota Inválida")
      .min(0)
      .max(10),
    P2: yup
      .number()
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .positive()
      .min(0)
      .max(10),
    T1: yup
      .number()
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .positive()
      .min(0)
      .max(10),
    T2: yup
      .number()
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .positive()
      .min(0)
      .max(10),
    PI: yup
      .number()
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .positive()
      .min(0)
      .max(10),
  });
  const [semestre, setSemestre] = useState(0);
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [t1, setT1] = useState(0);
  const [t2, setT2] = useState(0);
  const [pi, setPi] = useState(0);
  const [disciplina, setDisciplina] = useState("Banco de Dados");
  const [display, setDisplay] = useState(false);
  // mode : apenas verifica os campos em determinado evento (onSubmit)
  const {
    register,
    handleSubmit,
    reset,
    // utilizado para capturar erroros de dados,
    formState: { isSubmitted, isValid, errors },
  } = useForm({
    // apenas verifica os campos quando ocorrer o Submit
    defaultValues: { T1: 0.0, T2: 0.0, P1: 0.0, P2: 0.0, PI: 0.0 },
    resolver: yupResolver(schema),
  });
  const submit_valid = isSubmitted && isValid;
  // resultados do forms quando ocorrer o submit
  const form_result = (data) => {
    console.log(data);
  };
  return (
    <>
      <GlobalStyle />
      <div className="root-cursos">
        <Outlet />
        <form onSubmit={handleSubmit(form_result)}>
          <label htmlFor="Semestre" id="Semestre">
            Semestre :
          </label>
          <select
            {...register("Semestre")}
            name="Semestre"
            id="Semestre"
            onChange={(e) => {
              setSemestre(Number(e.target.value));
            }}
          >
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
          </select>
          <label htmlFor="Disciplinas" id="Disciplinas">
            Disciplina :
          </label>
          <select
            {...register("Disciplinas")}
            name="Disciplinas"
            id="Disciplinas"
            onChange={(e) => {
              setDisciplina(e.target.value);
            }}
          >
            {disciplinas(semestre)}
          </select>
          <p className="error-txt">{errors.P1?.message}</p>
          <label htmlFor="P1"> P1 :</label>
          <input
            {...register("P1")}
            onChange={(e) => {
              let p1 = parseInt(e.target.value);
              setP1(p1);
            }}
            name="P1"
            id="P1"
          />
          <p className="error-txt">{errors.P2?.message}</p>
          <label htmlFor="P2">P2 :</label>
          <input
            {...register("P2")}
            name="P2"
            id="P2"
            onChange={(e) => {
              let p2 = parseInt(e.target.value);
              setP2(p2);
            }}
          />
          <p className="error-txt">{errors.T1?.message}</p>
          <label htmlFor="T1">T1 :</label>
          <input
            {...register("T1")}
            name="T1"
            id="T1"
            onChange={(e) => {
              let t1 = parseInt(e.target.value);
              setT1(t1);
            }}
          />
          <p className="error-txt">{errors.T1?.message}</p>
          <label htmlFor="T2">T2 :</label>
          <input
            {...register("T2")}
            name="T2"
            id="T2"
            onChange={(e) => {
              let t2 = parseInt(e.target.value);
              setT2(t2);
            }}
          />
          <p className="error-txt">{errors.T2?.message}</p>
          <label htmlFor="PI">Projeto Integrador :</label>
          <input
            {...register("PI")}
            name="PI"
            id="PI"
            onChange={(e) => {
              let pi = parseInt(e.target.value);
              setPi(pi);
            }}
          />
          <p className="error-txt">{errors.PI?.message}</p>
          <button
            type="submit"
            onClick={() => {
              setDisplay(true);
            }}
            style={{ display: submit_valid ? "none" : "flex" }}
          >
            Calcular
          </button>
          <span
            className="resultados"
            style={{ display: display ? "flex" : "none" }}
          >
            {isSubmitted && isValid && (
              <>
                {media_tarefa(t1, t2)}
                {media_prova(p1, p2)}
                {media_final(disciplina, p1, p2, t1, t2, pi)}
                {
                  <button
                    type="submit"
                    className="limpa_btn"
                    onClick={() => {
                      setDisplay(false);
                      // altera o valor do campo
                      reset({
                        P1: 0,
                        P2: 0,
                        T1: 0,
                        T2: 0,
                        PI: 0,
                      });
                      // altera o valor da variavel
                      setP1(0);
                      setP2(0);
                      setT1(0);
                      setT2(0);
                      setPi(0);
                    }}
                  >
                    Limpar Resultados
                  </button>
                }
              </>
            )}
          </span>
        </form>
      </div>
    </>
  );
};
export default CursosLayout;
