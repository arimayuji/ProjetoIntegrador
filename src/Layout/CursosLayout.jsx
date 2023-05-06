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

const CursosLayout = () => {
  const schema = yup.object().shape({
    P1: yup
      .number()
      .nullable(true, "Campo vazio")
      .positive("Apenas números positivos")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .required("Preencher Campo")
      .min(0, "Valor menor que 0")
      .max(10, "Valor maior que 10"),
    P2: yup
      .number()
      .nullable(true, "Campo vazio")
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .typeError("Inserir um número válido")
      .required("Preencher Campo")
      .test("is-between", "Nota Inválida", function (valor) {
        return valor >= 0.0 && valor <= 10.0;
      })
      .positive("Apenas números positivos")
      .min(0, "Valor menor que 0")
      .max(10, "Valor maior que 10"),
    T1: yup
      .number()
      .nullable(true, "Campo vazio")
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .typeError("Inserir um número válido")
      .required("Preencher Campo")
      .test("is-between", "Nota Inválida", function (valor) {
        return valor >= 0.0 && valor <= 10.0;
      })
      .positive()
      .min(0, "Valor menor que 0")
      .max(10, "Valor maior que 10"),
    T2: yup
      .number()
      .nullable(true, "Campo vazio")
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .positive()
      .min(0, "Valor menor que 0")
      .max(10, "Valor maior que 10"),
    PI: yup
      .number("valor errado")
      .nullable(true, "Campo vazio")
      .required("Nota Inválida")
      .test("is-between", "Nota Inválida", function (value) {
        return value >= 0.0 && value <= 10.0;
      })
      .positive()
      .min(0, "Valor menor que 0")
      .max(10, "Valor maior que 10"),
  });
  const [form, setForm] = useState({
    semestre: 0,
    P1: 0,
    P2: 0,
    T1: 0,
    T2: 0,
    PI: 0,
    disciplina: "Banco de Dados",
  });
  const [display, setDisplay] = useState(false);
  const resultado_forms = () => {
    return (
      <>
        <div className="resultado-display">
          {media_tarefa(form.T1, form.T2)}
          {media_prova(form.P1, form.P2)}
          {media_final(
            form.disciplina,
            form.P1,
            form.P2,
            form.T1,
            form.T2,
            form.PI
          )}
          {
            <button
              type="submit"
              className="limpa_btn"
              onClick={() => {
                setDisplay(false);
              }}
            >
              Limpar Resultados
            </button>
          }
        </div>
      </>
    );
  };

  const handleChange = (campo, valor) => {
    setForm((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };
  // mode : apenas verifica os campos em determinado evento (onSubmit)
  const {
    register,
    handleSubmit,
    reset,
    // utilizado para capturar erroros de dados,
    formState: { isSubmitted, isValid, errors, },
  } = useForm({
    // apenas verifica os campos quando ocorrer o Submit
    defaultValues: { T1: 0, T2: 0, P1: 0, P2: 0, PI: 0 },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
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
            onChange={(event) => {
              handleChange("semestre", event.target.value);
              console.log(event.target.value);
            }}
            value={form.semestre}
          >
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
          </select>
          <label htmlFor="Disciplina" id="Disciplina">
            Disciplinas :
          </label>
          <select
            {...register("Disciplinas")}
            name="Disciplinas"
            id="Disciplinas"
            onChange={(event) => {
              handleChange(
                "disciplina",
                event.target.options[event.target.selectedIndex].text
              );
            }}
            value={form.disciplina}
          >
            {disciplinas(form.semestre)}
          </select>
          <label htmlFor="P1"> P1 :</label>
          <input
            {...register("P1")}
            onChange={(event) => {
              handleChange("P1", parseFloat(event.target.value));
            }}
            name="P1"
            id="P1"
            min="0"
            max="10"
          />
          <p className="error-txt">{errors.P1?.message}</p>
          <label htmlFor="P2">P2 :</label>
          <input
            {...register("P2")}
            name="P2"
            id="P2"
            onChange={(event) => {
              handleChange("P2", parseFloat(event.target.value));
            }}
            min="0"
            max="10"
          />
          <p className="error-txt">{errors.P2?.message}</p>

          <label htmlFor="T1">T1 :</label>
          <input
            {...register("T1")}
            name="T1"
            id="T1"
            onChange={(event) => {
              handleChange("T1", parseFloat(event.target.value));
            }}
            min="0"
            max="10"
          />
          <p className="error-txt">{errors.T1?.message}</p>

          <label htmlFor="T2">T2 :</label>
          <input
            {...register("T2")}
            name="T2"
            id="T2"
            onChange={(event) => {
              handleChange("T2", parseFloat(event.target.value));
            }}
            min="0"
            max="10"
          />
          <p className="error-txt">{errors.T2?.message}</p>
          <label htmlFor="PI">Projeto Integrador :</label>
          <input
            {...register("PI")}
            name="PI"
            id="PI"
            onChange={(event) => {
              handleChange("PI", parseFloat(event.target.value));
            }}
            min="0"
            max="10"
          />
          <p className="error-txt">{errors.PI?.message}</p>
          <button
            type="submit"
            onClick={() => {
              setDisplay(true);
            }}
          >
            Calcular
          </button>
          <button
            type="reset"
            onClick={() => {
              setForm({
                semestre: 0,
                P1: 0,
                P2: 0,
                T1: 0,
                T2: 0,
                PI: 0,
              });
            }}
          >
            Limpar
          </button>
          <button type="button"> Histórico</button>

          <span
            className="resultados"
            style={{ display: display ? "flex" : "none" }}
          >
            {isSubmitted && isValid && (
              <>
                {media_tarefa(form.T1, form.T2)}
                {media_prova(form.P1, form.P2)}
                {media_final(
                  form.disciplina,
                  form.P1,
                  form.P2,
                  form.T1,
                  form.T2,
                  form.PI
                )}
                {
                  <button
                    type="submit"
                    className="limpa_btn"
                    onClick={() => {
                      setDisplay(false);
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
