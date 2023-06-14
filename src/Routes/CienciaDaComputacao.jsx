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
import { AtualizarNotas, ConsultarHistorico } from "../db/BancoDeDados";

const disciplinas = (semestre) => {
  return cic_semestres[semestre].disciplinas.map((disciplina, chave) => (
    <option key={chave}>{disciplina}</option>
  ));
};

const CursosLayout = () => {
  const [display, setDisplay] = useState(false);
  const [psubdisplay, setpsubDisplay] = useState(false);
  const [removePsub, setRemovePsub] = useState(false);
  const [historico, setHistorico] = useState([]);
  const [media, setMedia] = useState({
    MP: 0,
    MF: 0,
    MT: 0,
  });
  const [form, setForm] = useState({
    Semestre: 0,
    P1: 0,
    P2: 0,
    T1: 0,
    T2: 0,
    PI: 0,
    PSUB: 0,
    Disciplinas: "Banco de Dados",
    MP: media.MP,
    MF: media.MF,
    MT: media.MT,
  });

  const atualizarMedia = (data) => {
    const novaMT = media_tarefa(data.T1, data.T2);
    const novaMP = media_prova(data.P1, data.P2, data.PSUB);
    const novaMF = media_final(
      data.Disciplinas,
      data.P1,
      data.P2,
      data.T1,
      data.T2,
      data.PI,
      data.PSUB
    );

    setMedia({
      MP: novaMP,
      MF: novaMF,
      MT: novaMT,
    });
  };

  const fetchHistorico = async () => {
    const notas1 = await ConsultarHistorico(localStorage.getItem("email"));
    setHistorico(notas1);
  };

  const resultado_forms = () => {
    return (
      <>
        <div className="resultado-display">
          <span>Média Prova:</span>
          <input {...register("MP")} value={media.MP} readOnly type="text" />
          <span>Média Tarefa:</span>
          <input {...register("MT")} value={media.MT} readOnly type="text" />
          <span>Média Final:</span>
          <input {...register("MF")} value={media.MF} readOnly type="text" />
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

  const handleReset = () => {
    setForm({
      P1: 0,
      P2: 0,
      T1: 0,
      T2: 0,
      PI: 0,
      PSUB: 0,
      Semestre: 0,
      Disciplinas: "Banco de Dados",
    });
    reset({
      T1: 0,
      T2: 0,
      P1: 0,
      P2: 0,
      PI: 0,
      PSUB: 0,
      Semestre: 0,
      Disciplinas: "Banco de Dados",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (campo, valor) => {
    setForm((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitted, isValid, errors },
  } = useForm({
    defaultValues: {
      Semestre: form.Semestre,
      Disciplinas: form.Disciplinas,
      T1: 0,
      T2: 0,
      P1: 0,
      P2: 0,
      PI: 0,
      PSUB: 0,
      MP: 0,
      MF: 0,
      MT: 0,
    },
    mode: "onSubmit",
    resolver: yupResolver(schemaCalculadora),
  });

  const form_result = async (data) => {
    console.log(data);
    if (removePsub) {
      data.PSUB = 0;
      setRemovePsub(false);
    }
    console.log(data);
    await AtualizarNotas(
      localStorage.getItem("email"),
      data,
      sessionStorage.getItem("Materia")
    );
    fetchHistorico();
    atualizarMedia(data);
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
            value={form.Semestre}
          >
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
          </select>
          <label htmlFor="Disciplinas" id="Disciplinas">
            Disciplinas :
          </label>
          <select
            {...register("Disciplinas")}
            name="Disciplinas"
            id="Disciplinas"
            onChange={(event) => {
              sessionStorage.setItem("Materia", event.target.value);
              handleChange("Disciplinas", event.target.value);
              console.log(event.target.value);
            }}
            value={form.Disciplinas}
          >
            {disciplinas(form.Semestre)}
          </select>
          <label htmlFor="P1"> P1 :</label>
          <input
            {...register("P1")}
            onChange={(event) => {
              handleChange("P1", event.target.value);
            }}
            name="P1"
            id="P1"
            min="0"
            max="10"
            value={form.P1}
          />
          <p className="error-txt">{errors.P1?.message}</p>
          <label htmlFor="P2">P2 :</label>
          <input
            {...register("P2")}
            name="P2"
            id="P2"
            onChange={(event) => {
              handleChange("P2", event.target.value);
            }}
            min="0"
            max="10"
            value={form.P2}
          />
          <p className="error-txt">{errors.P2?.message}</p>

          <label htmlFor="T1">T1 :</label>
          <input
            {...register("T1")}
            name="T1"
            id="T1"
            onChange={(event) => {
              handleChange("T1", event.target.value);
            }}
            min="0"
            max="10"
            value={form.T1}
          />
          <p className="error-txt">{errors.T1?.message}</p>

          <label htmlFor="T2">T2 :</label>
          <input
            {...register("T2")}
            name="T2"
            id="T2"
            onChange={(event) => {
              handleChange("T2", event.target.value);
            }}
            min="0"
            max="10"
            value={form.T2}
          />
          <p className="error-txt">{errors.T2?.message}</p>
          <label htmlFor="PI">Projeto Integrador :</label>
          <input
            {...register("PI")}
            name="PI"
            id="PI"
            onChange={(event) => {
              handleChange("PI", event.target.value);
            }}
            min="0"
            max="10"
            value={form.PI}
          />
          <p className="error-txt">{errors.PI?.message}</p>
          <button
            onClick={(event) => {
              event.preventDefault();
              setpsubDisplay(!psubdisplay);
            }}
            style={{ display: psubdisplay ? "none" : "flex" }}
          >
            Adicionar Prova Substitutiva
          </button>
          {psubdisplay && (
            <div className="psub">
              <label htmlFor="PSUB">PSUB:</label>
              <input
                {...register("PSUB")}
                name="PSUB"
                id="PSUB"
                onChange={(event) => {
                  handleChange("PSUB", event.target.value);
                  console.log(form.PSUB);
                }}
                min="0"
                max="10"
                value={form.PSUB}
              />
              <p className="error-txt">{errors.PSUB?.message}</p>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setpsubDisplay(false);
                  handleChange("PSUB", 0);
                  setRemovePsub(true);
                }}
                className="psub"
              >
                Remover Psub
              </button>
            </div>
          )}

          <button
            type="submit"
            onClick={() => {
              setDisplay(true);
            }}
          >
            Calcular
          </button>
          <div className="btns">
            <button type="reset" onClick={handleReset}>
              Limpar Campos
            </button>
          </div>

          <span
            className="resultados"
            style={{ display: display ? "flex" : "none" }}
          >
            {isValid && resultado_forms()}
          </span>
        </form>
      </div>
    </>
  );
};

export default CursosLayout;
