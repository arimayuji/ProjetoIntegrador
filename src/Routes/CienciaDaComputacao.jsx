import "../Layout/Layout.css";
import "../Layout/CursosLayout.css";
import { useForm } from "react-hook-form";
import { schemaCalculadora } from "../Schema/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalStyle } from "../GlobalStyle";
import { useState } from "react";
import {
  cic_semestres,
  media_final,
  media_prova,
  media_tarefa,
} from "../Cursos";

const disciplinas = (semestre) => {
  return cic_semestres[semestre].disciplinas.map((disciplina, chave) => (
    <option key={chave}>{disciplina}</option>
  ));
};

const CursosLayout = () => {

  const [form, setForm] = useState({
    Semestre: 0,
    P1: 0,
    P2: 0,
    T1: 0,
    T2: 0,
    PI: 0,
    Disciplinas: "Banco de Dados",
  });
  const [display, setDisplay] = useState(false);
  const resultado_forms = () => {
    return (
      <>
        <div className="resultado-display">
          {media_tarefa(form.T1, form.T2)}
          {media_prova(form.P1, form.P2)}
          {media_final(
            form.Disciplinas,
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
    defaultValues: { Semestre: 0, Disciplinas: "Banco de dados", T1: 0, T2: 0, P1: 0, P2: 0, PI: 0 },
    mode: "onSubmit",
    resolver: yupResolver(schemaCalculadora),
  });
  // resultados do forms quando ocorrer o submit
  const form_result = (data) => {
    console.log(data);
  };
  return (
    <>
      <GlobalStyle />
      <div className="root-cursos">
        <h1>Ciência da Computação</h1>
        <form onSubmit={handleSubmit(form_result)}>
          <label htmlFor="Semestre" id="Semestre">
            Semestre :
          </label>
          <select
            {...register("Semestre")}
            name="Semestre"
            id="Semestre"
            onChange={(event) => {
              handleChange("Semestre", event.target.value);
            }}
            defaultValue={form.Disciplinas}
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
              handleChange("Disciplinas", event.target.value);
            }}
            defaultValue={form.Disciplinas}
          >
            {disciplinas(form.Semestre)}
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
            type="button"
            onClick={() => {
              setForm({
                P1: 0,
                P2: 0,
                T1: 0,
                T2: 0,
                PI: 0,
                Semestre: 0,
                Disciplinas: "Banco de Dados",
              });
              reset({ T1: 0, T2: 0, P1: 0, P2: 0, PI: 0, Semestre: 0, Disciplinas: "Banco de Dados" })
            }
            }


          >
            Limpar
          </button>
          <button type="button"> Histórico</button>

          <span
            className="resultados"
            style={{ display: display ? "flex" : "none" }}
          >
            {isSubmitted && isValid && resultado_forms()}
          </span>
        </form>
      </div >
    </>
  );
};
export default CursosLayout;