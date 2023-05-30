import * as yup from "yup";

export const schemaCalculadora = yup.object().shape({
  P1: yup
    .number()
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .test("is-positive", "Nota Inválida", (value) => {
      return value >= 0;
    })
    .test("is-between", "Nota Inválida", function (value) {
      return value <= 10.0;
    })
    .required("Preencher Campo"),
  P2: yup
    .number()
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .test("is-positive", "Nota Inválida", (value) => {
      return value >= 0;
    })
    .test("is-between", "Nota Inválida", function (value) {
      return value <= 10.0;
    })
    .required("Preencher Campo"),
  T1: yup
    .number()
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .test("is-positive", "Nota Inválida", (value) => {
      return value >= 0;
    })
    .test("is-between", "Nota Inválida", function (value) {
      return value <= 10.0;
    })
    .required("Preencher Campo"),
  T2: yup
    .number()
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .test("is-positive", "Nota Inválida", (value) => {
      return value >= 0;
    })
    .test("is-between", "Nota Inválida", function (value) {
      return value <= 10.0;
    })
    .required("Preencher Campo"),
  PI: yup
    .number()
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .test("is-positive", "Nota Inválida", (value) => {
      return value >= 0;
    })
    .test("is-between", "Nota Inválida", function (value) {
      return value <= 10.0;
    })
    .required("Preencher Campo"),
  PSUB: yup
    .number()
    .nullable(true)
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .test("is-positive", "Nota Inválida", (value) => {
      return value >= 0;
    })
    .test("is-between", "Nota Inválida", function (value) {
      return value <= 10.0;
    })
    .required("Preencher Campo"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Email Inválido")
    .required("Preencher Campo")
    .test("email-estrutura", "Email Inválido", (value) => {
      return /^[\d]{2}\.[\d]{5}-[\d]@maua\.br$/.test(value);
    }),
  senha: yup
    .string()
    .required("Preencher Campo")
    .min(8, "Senha Inválida")
    .max(20, "Senha Inválida")
    .test("existe-numero", "Senha Inválida", (value) => {
      return /\d/.test(value);
    }),
});

