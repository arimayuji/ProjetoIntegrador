import * as yup from "yup";

export const schemaCalculadora = yup.object().shape({
    P1: yup
        .number()
        .nullable(true, "Campo vazio")
        .positive("Número deve ser positivo")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .test("is-valid-number", "Valor Inválido", function (value) {
            if (value === "" || value === null || value === undefined) {
                throw new yup.ValidationError("Campo vazio", value, "P1");
            }
            return true;
        })
        .required("Preencher Campo"),
    P2: yup
        .number()
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .test("is-valid-number", "Valor Inválido", function (value) {
            if (value === "" || value === null || value === undefined) {
                throw new yup.ValidationError("Campo vazio", value, "P2");
            }
            return true;
        })
        .positive("Número deve ser positivo"),
    T1: yup
        .number()
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .test("is-valid-number", "Valor Inválido", function (value) {
            if (value === "" || value === null || value === undefined) {
                throw new yup.ValidationError("Campo vazio", value, "T1");
            }
            return true;
        })
        .positive("Número deve ser positivo"),
    T2: yup
        .number()
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .test("is-valid-number", "Valor Inválido", function (value) {
            if (value === "" || value === null || value === undefined) {
                throw new yup.ValidationError("Campo vazio", value, "T2");
            }
            return true;
        })
        .positive("Número deve ser positivo"),
    PI: yup
        .mixed()
        .nullable(true)
        .test("is-valid-number", "Valor Inválido", function (value) {
            if (value === "" || value === null || value === undefined) {
                throw new yup.ValidationError("Campo vazio", value, "PI");
            }
            return true;
        })
        .test("is-between", "Valor fora do intervalo", function (value) {
            return value >= 0 && value <= 10;
        }),
});


export const schemaLogin = yup.object().shape({
    email: yup
        .string()
        .email("Email Inválido")
        .required("Preencher Campo")
        .test('email-estrutura', 'Email Inválido', (value) => {
            return /^[\d]{2}\.[\d]{5}-[\d]@maua\.br$/.test(value);
        }),
    senha: yup
        .string()
        .required("Preencher Campo")
        .min(8, "Senha Inválida")
        .max(20, "Senha Inválida")
        .test('existe-numero', 'Senha Inválida', (value) => {
            return /\d/.test(value);
        }),
});